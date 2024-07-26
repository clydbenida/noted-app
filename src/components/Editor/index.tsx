import { useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import useRenderElement from './hooks/useRenderElement'

const initialState: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Test' }] }]

export default function NotedEditor(): JSX.Element {
  const [editor] = useState(() => withReact(createEditor()))
  const renderElement = useRenderElement()

  return (
    <Slate editor={editor} initialValue={initialState}>
      <Editable className="focus-visible:outline-none" renderElement={renderElement} />
    </Slate>
  )
}
