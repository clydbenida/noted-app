interface ButtonProps {
  onClick?: () => void
  variant: 'primary' | 'secondary' | 'outlined'
  children?: React.ReactNode | string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button(props: ButtonProps): JSX.Element {
  const defaultClassName = `py-2 px-5 rounded-lg`

  function getVariantStyle(): string {
    switch (props.variant) {
      case 'secondary':
        return ''
      case 'outlined':
        return 'border border-slate-900 bg-transparent text-gray-200'
      case 'primary':
      default:
        return 'bg-slate-600'
    }
  }

  return (
    <button
      onClick={props.onClick}
      className={`${getVariantStyle()} ${defaultClassName} ${props.className}`}
    >
      {props.children}
    </button>
  )
}
