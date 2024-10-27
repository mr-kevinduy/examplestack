'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      email,
      setErrors
    })
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
            onChange={(event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
            required
          />

          {/*<InputError messages={errors.email} className="mt-2" />*/}
        </div>

        <div className="flex items-center justify-end mt-4">
          <Button
            type="submit"
            className="ml-3"
          >Register</Button>
        </div>
      </form>
    </>
  )
}

export default Register
