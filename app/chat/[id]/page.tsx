import ChatPage from '@/components/ChatPage'
import React from 'react'

interface Params{
    id:string
}

const chattingPage = ({params}:{params:Params}) => {
  return (
    <div className='w-[72%]'>
    <ChatPage/>
    </div>
  )
}

export default chattingPage
