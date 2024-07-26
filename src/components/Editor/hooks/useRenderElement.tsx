import { useCallback } from 'react'
import { RenderElementProps } from 'slate-react'
import EditorElementWrapper from '../components/EditorElementWrapper'
import ParagraphElement from '../components/EditorElements/ParagraphElement'

export default function useRenderElement(): (props: RenderElementProps) => JSX.Element {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
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
