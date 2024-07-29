import { useCallback } from 'react'
import { RenderElementProps } from 'slate-react'
import EditorElementWrapper from '../components/EditorElementWrapper'
import {
  ParagraphElement,
  HeadingElement,
  ListElement,
  CodeElement,
  BlockQuoteElement
} from '../components/EditorElements'

export default function useRenderElement(): (props: RenderElementProps) => JSX.Element {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading':
        return (
          <EditorElementWrapper>
            <HeadingElement {...props} />
          </EditorElementWrapper>
        )

      case 'code':
        return (
          <EditorElementWrapper>
            <CodeElement {...props} />
          </EditorElementWrapper>
        )

      case 'ordered-list':
        return (
          <EditorElementWrapper>
            <ListElement {...props} />
          </EditorElementWrapper>
        )

      case 'unordered-list':
        return (
          <EditorElementWrapper>
            <ListElement {...props} />
          </EditorElementWrapper>
        )

      case 'blockquote':
        return (
          <EditorElementWrapper>
            <BlockQuoteElement {...props} />
          </EditorElementWrapper>
        )

      case 'paragraph':
      default:
        return (
          <EditorElementWrapper>
            <ParagraphElement {...props} />
          </EditorElementWrapper>
        )
    }
  }, [])

  return renderElement
}
