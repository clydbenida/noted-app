interface EditorElementWrapperProps {
  children?: React.ReactNode | JSX.Element
}
export default function EditorElementWrapper(props: EditorElementWrapperProps): JSX.Element {
  return <div>{props.children}</div>
}
