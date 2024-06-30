import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ChatTopBar = () => {
  return (
    <div>
      <div>
        <Link href='/chat'>
            <ArrowBigRight/>
        </Link>
      </div>
      <form >

      </form>
    </div>
  )
}

export default ChatTopBar
