import { useMemo, useState } from 'react'
import SidebarItem from './SidebarItem'
import { Button } from '@renderer/components/shared'

interface NoteGroupProps {
  groupName: string
  items?: string[]
}

export default function NoteGroup(props: NoteGroupProps): JSX.Element {
  const [isHovered, setHovered] = useState(false)

  const renderItems = useMemo(
    () => props.items?.map((item, idx) => <SidebarItem key={idx} text={item} />),
    [props.items]
  )

  return (
    <div className="mr-2">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-between items-center py-1"
      >
        <h5 className="pl-2 text-xs font-bold text-tp-white mb-2 mt-4">{props.groupName}</h5>
        <Button
          size="sm"
          variant="outlined"
          className={`hover:bg-tp-white ${isHovered ? 'block' : 'hidden'}`}
        >
          +
        </Button>
      </div>
      {renderItems}
    </div>
  )
}
