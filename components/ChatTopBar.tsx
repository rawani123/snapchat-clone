import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

const ChatTopBar = ({userProfile}:{userProfile:any}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Link href='/chat'>
            <ArrowBigRight/>
        </Link>
        <div className='flex items-center gap-1'>
            <Avatar>
                <AvatarImage src={userProfile.profilePhoto} alt="user" />
            </Avatar>
            <h1 className='font-bold'>{userProfile.fullname}</h1>

        </div>
      </div>
      <form >
        <SubmitButton/>
      </form>
    </div>
  )
}

export default ChatTopBar


const SubmitButton =()=>{
    return(
        <Button>submit</Button>
    )
}
