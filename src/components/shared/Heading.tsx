interface HeadingProps {
  children: React.ReactNode | string
  level: '0' | '1' | '2' | '3'
}

export default function Heading(props: HeadingProps): JSX.Element {
  const getHeadingStyle: () => string = () => {
    switch (props.level) {
      case '0':
        return 'mt-4 text-4xl'
      case '1':
        return 'mt-3 text-3xl'
      case '2':
        return 'mt-2 text-2xl'
      case '3':
        return 'mt-1 text-xl'
    }
  }
  return <div className={`font-bold ${getHeadingStyle()}`}>{props.children}</div>
}
