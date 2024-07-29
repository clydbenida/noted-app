import Heading from '@renderer/components/shared/Heading'
import { RenderElementProps } from 'slate-react'

export default function HeadingElement(props: RenderElementProps): JSX.Element {
  const headingLevel = props.element.type === 'heading' ? props.element.level : '1'

  return (
    <div {...props.attributes}>
      <Heading level={headingLevel}>{props.children}</Heading>
    </div>
  )
}
