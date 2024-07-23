import { Button, Textbox } from '@renderer/components/shared'
import { useState } from 'react'

export default function PasswordTextbox(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword(): void {
    setShowPassword((prev) => !prev)
  }

  return (
    <div>
      <Textbox
        type={showPassword ? 'text' : 'password'}
        className="my-2"
        placeholder="Password"
        customControl={
          <Button
            variant="outlined"
            size="sm"
            onClick={toggleShowPassword}
            className="text-xs px-1"
          >
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        }
      />
    </div>
  )
}
