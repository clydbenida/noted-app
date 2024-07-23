import logo from '@renderer/assets/electron.svg'
import { Button } from '@renderer/components/shared'
import PasswordTextbox from './components/PasswordTextbox'
import { Link } from 'react-router-dom'

export default function RootPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <img src={logo} width={80} className="mb-2" />
      <div className="mb-4">
        Welcome, <strong>user</strong>!
      </div>
      <PasswordTextbox />
      <Link to="/dashboard">
        <Button className="my-3" variant="primary">
          Login
        </Button>
      </Link>
    </div>
  )
}
