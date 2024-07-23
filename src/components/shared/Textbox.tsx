interface TextboxProps extends React.HTMLProps<HTMLInputElement> {
  customControl?: React.ReactNode | string
}

export default function Textbox({ customControl, ...props }: TextboxProps): JSX.Element {
  const defaultClassName = 'bg-transparent text-white focus-visible:outline-none'

  return (
    <div className="py-1 px-3 bg-gray-500 rounded-lg ">
      <input {...props} className={`${defaultClassName} ${props.className ?? ''}`} />
      {customControl ?? ''}
    </div>
  )
}
