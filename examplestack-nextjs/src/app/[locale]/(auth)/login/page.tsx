'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'

const Login = () => {
  const [email, setEmail] = useState('')

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
  }

	return (
		<>
			<form onSubmit={submitForm}>
        {/* Email Address */}
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={email}
            className="block mt-1 w-full"
            onChange={(event: FormEvent<HTMLInputElement> ) => setEmail(event.currentTarget.value)}
            required
            autoFocus
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Button
            type="submit"
            className="ml-3"
          >Login</Button>
        </div>
      </form>
		</>
	)
}

export default Login
