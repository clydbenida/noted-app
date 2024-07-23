interface ButtonProps {
  onClick?: () => void
  variant: 'primary' | 'secondary' | 'outlined'
  children?: React.ReactNode | string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button(props: ButtonProps): JSX.Element {
  const defaultClassName = `flex justify-center items-center rounded-lg`

  function getVariantStyle(): string {
    switch (props.variant) {
      case 'secondary':
        return ''
      case 'outlined':
        return 'border border-slate-900 bg-transparent text-gray-200'
      case 'primary':
      default:
        return 'bg-slate'
    }
  }

  function getVariantSize(): string {
    switch (props.size) {
      case 'sm':
        return 'text-sm py-1 px-2 h-6'
      case 'md':
      default:
        return 'py-2 px-5'
    }
  }

  return (
    <button
      onClick={props.onClick}
      className={`${getVariantStyle()} ${defaultClassName} ${getVariantSize()} ${props.className ?? ''}`}
    >
      <span>{props.children}</span>
    </button>
  )
}
