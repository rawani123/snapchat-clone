import ChatPage from '@/components/ChatPage'
import React from 'react'
import { getProfileUser } from '@/lib/userData'
import { getMessage } from '@/lib/messageData'
import { auth } from '@/auth'

interface Params{
    id:string
}

const chattingPage = async ({params}:{params:Params}) => {
  let userProfile = await getProfileUser(params.id);
  const authUser = await auth();
  const messages= authUser?await getMessage(authUser?.user?._id,params.id):[];

  return (
    <div className='w-[72%]'>
    <ChatPage userProfile={userProfile} messages={messages} authUser={authUser}/>
    </div>
  )
}

export default chattingPage
