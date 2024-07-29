import { useCallback, useState } from 'react'
import { createEditor, Descendant, Editor, Node as SlateNode, Element as SlateElement } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import useRenderElement from './hooks/useRenderElement'
import useKeyDownListener from './hooks/useKeyDownListener'
import useRenderLeaf from './hooks/useRenderLeaf'
import { SHORTCUTS } from './constants'
import withShortcuts from './hooks/withShortcuts'

const initialState: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Test' }] }]

export default function NotedEditor(): JSX.Element {
  const [editor] = useState(() => withShortcuts(withReact(createEditor())))
  const renderElement = useRenderElement()
  const renderLeaf = useRenderLeaf()
  const onKeyDownListener = useKeyDownListener(editor)

  const handleDOMBeforeInput = useCallback(
    (e: InputEvent) => {
      queueMicrotask(() => {
        const pendingDiffs = ReactEditor.androidPendingDiffs(editor)

        const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
          if (!diff.text.endsWith(' ')) {
            return false
          }

          const { text } = SlateNode.leaf(editor, path)
          const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1)
          if (!(beforeText in SHORTCUTS)) {
            return
          }

          const blockEntry = Editor.above(editor, {
            at: path,
            match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n)
          })
          if (!blockEntry) {
            return false
          }

          const [, blockPath] = blockEntry
          return Editor.isStart(editor, Editor.start(editor, path), blockPath)
        })

        if (scheduleFlush) {
          ReactEditor.androidScheduleFlush(editor)
        }
      })
    },
    [editor]
  )

  return (
    <Slate editor={editor} initialValue={initialState}>
      <Editable
        onDOMBeforeInput={handleDOMBeforeInput}
        className="focus-visible:outline-none"
        renderElement={renderElement}
        onKeyDown={onKeyDownListener}
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
      />
    </Slate>
  )
}
