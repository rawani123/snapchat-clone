import React from 'react'
import MyAi from "@/public/myai-asset.png";
import Image from 'next/image';
import { Button } from "./ui/button";
import { FaLaptop } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex justify-center items-center max-w-6xl mx-auto'>
      <div>
        <h1 className='text-7xl font-medium'>Snapchat is <br/> now on the <br/> web!</h1>
        <h1 className='my-4 text-xl'>Chat, Snap, and video call your friend from wherever you are.</h1>
        <Button className='gap-2 rounded-full'><FaLaptop/> Login to Chat</Button>
      </div>
      <div>
        <Image src={MyAi} height={650} width={650} alt='snapchat'/>
      </div>
    </div>
  )
}

export default Header
