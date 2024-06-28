import React from 'react'
import SignupPage from '@/components/Signup'
import { signIn } from '@/auth'

const Signup = () => {
  const signUpHandler = async() => {
    'use server'
    await signIn('github')
  }
  return (
    <form action={signUpHandler}>
      <SignupPage/>
    </form>
  )
}

export default Signup
