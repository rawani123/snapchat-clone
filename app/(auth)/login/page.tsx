import React from 'react'
import LoginPage from '@/components/Login'
import { signIn } from '@/auth'



const Login = () => {
  const loginHandler = async() => {
    'use server'
    await signIn('github')
  }
  return (
    <form action={loginHandler}>
      <LoginPage/>
    </form>
  )
}

export default Login
