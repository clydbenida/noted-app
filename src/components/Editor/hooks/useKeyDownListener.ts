import { useCallback } from 'react'
import { BaseEditor, Editor, Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

export default function useKeyDownListener(
  editor: ReactEditor & BaseEditor
): (e: React.KeyboardEvent<HTMLDivElement>) => void {
  const keyDownListener = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.ctrlKey) {
        event.preventDefault()
        switch (event.key) {
          case 'b':
            Editor.addMark(editor, 'bold', true)
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
