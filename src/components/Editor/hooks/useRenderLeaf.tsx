import { useCallback } from 'react'
import { RenderLeafProps } from 'slate-react'

export default function useRenderLeaf(): (props: RenderLeafProps) => JSX.Element {
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return (
      <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}>
        {props.children}
      </span>
    )
  }, [])

  return renderLeaf
}
