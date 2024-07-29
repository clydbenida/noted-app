import { RenderElementProps } from 'slate-react'

export default function ListElement(props: RenderElementProps): JSX.Element {
  return <div>* {props.children}</div>
}
