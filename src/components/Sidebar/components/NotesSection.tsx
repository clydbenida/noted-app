import NoteGroup from './NoteGroup'

export default function NotesSection(): JSX.Element {
  return (
    <section>
      <NoteGroup groupName="Favorites" items={['Sample favorite note', 'Budgeting']} />
      <NoteGroup groupName="All Notes" items={['Sample note', 'Test note 2']} />
    </section>
  )
}
