import { useEffect, useState } from 'react'
import LoadingOverlay from './components/LoadingOverlay'
import Sidebar from '@renderer/components/Sidebar'
import NotedEditor from '@renderer/components/Editor'
import Heading from '@renderer/components/shared/Heading'

export default function DashboardPage(): JSX.Element {
  // TODO: Simulate loading
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <div className="flex h-full">
      <Sidebar />
      <main className="bg-tp-black w-full pt-10 px-24">
        <Heading level="0">Sample Title</Heading>
        <Heading level="1">Sample Subtitle</Heading>
        <NotedEditor />
      </main>
    </div>
  )
}
