import { RenderElementProps } from 'slate-react'

export default function CodeElement(props: RenderElementProps): JSX.Element {
  return (
    <div>
      <pre>
        <code></code>
      </pre>
    </div>
  )
}
