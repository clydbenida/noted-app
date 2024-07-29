import { useCallback } from 'react'
import { BaseEditor, Editor, Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

export default function useKeyDownListener(
  editor: ReactEditor & BaseEditor
): (e: React.KeyboardEvent<HTMLDivElement>) => void {
  const keyDownListener = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.currentTarget.innerText === '###') {
        Transforms.setNodes(
          editor,
          { type: 'heading', level: '3', children: [{ text: '', bold: true }] },
          { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
        )

        Editor.addMark(editor, 'bold', true)
      }

      if (event.ctrlKey) {
        event.preventDefault()
        switch (event.key) {
          case 'b':
            Editor.addMark(editor, 'bold', true)
            console.log('Text set to bold?')
        }
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        console.log('Enter pressed')
        Editor.insertNode(editor, { type: 'paragraph', children: [{ text: '' }] })
      }
    },
    [editor]
  )

  return keyDownListener
}
