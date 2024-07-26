import { RenderElementProps } from 'slate-react'

export default function ParagraphElement(props: RenderElementProps): JSX.Element {
  return (
    <div {...props.attributes}>
      <div>{props.children}</div>
    </div>
  )
}
