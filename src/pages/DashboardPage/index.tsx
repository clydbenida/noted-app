import { useEffect, useState } from 'react'
import LoadingOverlay from './components/LoadingOverlay'
import Sidebar from '@renderer/components/Sidebar'

export default function DashboardPage(): JSX.Element {
  // TODO: Simulate loading
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <div className="flex h-full">
      <Sidebar />
      <main>This is the dashboard page</main>
    </div>
  )
}
