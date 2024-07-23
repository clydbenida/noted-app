import NotesSection from './components/NotesSection'
import SidebarDivider from './components/SidebarDivider'
import SidebarItem from './components/SidebarItem'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="bg-[#0a0a0a6f] w-[15rem]">
      <div className="pt-2">
        <SidebarItem text="Home" onClick={() => {}} />
      </div>
      <SidebarDivider />
      <NotesSection />
    </aside>
  )
}
