import logo from '@renderer/assets/electron.svg'
import { Button } from '@renderer/components/shared'
import PasswordTextbox from './components/PasswordTextbox'
import { useNavigate } from 'react-router-dom'

export default function RootPage(): JSX.Element {
  const navigate = useNavigate()

  function handleLoginClick(): void {
    navigate('/dashboard')
  }
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <img src={logo} width={80} className="mb-2" />
      <div className="mb-4">
        Welcome, <strong>user</strong>!
      </div>
      <PasswordTextbox />
      <Button onClick={handleLoginClick} className="my-3" size="md" variant="primary">
        Login
      </Button>
    </div>
  )
}
