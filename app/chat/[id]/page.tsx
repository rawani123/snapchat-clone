import ChatPage from '@/components/ChatPage'
import React from 'react'
import { getProfileUser } from '@/lib/userData'

interface Params{
    id:string
}

const chattingPage = async ({params}:{params:Params}) => {
  let userProfile = await getProfileUser(params.id);

  return (
    <div className='w-[72%]'>
    <ChatPage userProfile={userProfile}/>
    </div>
  )
}

export default chattingPage
