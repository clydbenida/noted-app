import { Editor, Element as SlateElement, BaseEditor, Transforms, Range, Point } from 'slate'
import { ReactEditor } from 'slate-react'
import { SHORTCUTS } from '../constants'
import { CustomElement } from '@renderer/types/global'
import { UnorderedListElement } from '@renderer/types/ElementTypes'

export default function withShortcuts(editor: BaseEditor & ReactEditor): typeof editor {
  const { deleteBackward, insertText } = editor

  editor.insertText = (text): void => {
    const { selection } = editor

    if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection
      const block = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n)
      })
      const path = block ? block[1] : []
      const start = Editor.start(editor, path)
      const range = { anchor, focus: start }
      const beforeText = Editor.string(editor, range) + text.slice(0, -1)
      const type = SHORTCUTS[beforeText]

      if (type) {
        Transforms.select(editor, range)

        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor)
        }

        const newProperties: Partial<CustomElement> = {
          ...type
        }
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n)
        })

        if (type.type === 'heading') {
          Editor.addMark(editor, 'bold', true)
        }

        if (type.type === 'unordered-list') {
          const list: UnorderedListElement = {
            type: 'unordered-list',
            children: []
          }
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'unordered-list'
          })
        }

        return
      }
    }

    insertText(text)
  }

  editor.deleteBackward = (...args): void => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n)
      })

      if (match) {
        const [block, path] = match
        const start = Editor.start(editor, path)

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<SlateElement> = {
            type: 'paragraph'
          }
          Transforms.setNodes(editor, newProperties)

          Editor.addMark(editor, 'bold', false)

          if (block.type === 'unordered-list') {
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'unordered-list',
              split: true
            })
          }

          return
        }
      }

      deleteBackward(...args)
    }
  }

  return editor
}
