interface SidebarItemProps {
  text: string
  onClick?: () => void
  icon?: React.ReactNode | string
}

export default function SidebarItem(props: SidebarItemProps): JSX.Element {
  return (
    <div className="pl-2 py-1 hover:bg-tp-gray cursor-pointer rounded-md">
      <span className="text-sm">{props.text}</span>
    </div>
  )
}
