import React from 'react'
import Friend from './Friend'
import { getSideBarUsers } from '@/lib/userData';
import { auth } from '@/auth';

const Friends = async() => {
  const authUser = await auth();
  const otherUser = authUser?.user ? await getSideBarUsers(authUser?.user?._id):[];
  // console.log(otherUser)

  return (
    <div className='flex-1 overflow-y-auto'>
      {
        otherUser.map((user:any)=>{
          return <Friend key={user._id} user={user}/>
        })
      }
    </div>
  )
}

export default Friends
