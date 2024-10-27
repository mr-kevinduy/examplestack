'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'

const Login = () => {
  const [email, setEmail] = useState('')

  const submitForm = async event => {
    event.preventDefault()
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
            onChange={event => setEmail(event.target.value)}
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
