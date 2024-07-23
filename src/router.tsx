import { createBrowserRouter } from 'react-router-dom'
import RootPage from './pages/RootPage'
import DashboardPage from './pages/DashboardPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  }
])

export default router
