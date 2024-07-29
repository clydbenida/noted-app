import { useCallback } from 'react'
import { RenderElementProps } from 'slate-react'
import EditorElementWrapper from '../components/EditorElementWrapper'
import ParagraphElement from '../components/EditorElements/ParagraphElement'
import HeadingElement from '../components/EditorElements/HeadingElement'

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

      case 'ordered-list':
      case 'unordered-list':
      case 'blockquote':
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
