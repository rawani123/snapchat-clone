import React from 'react'
import ChatTopBar from './ChatTopBar'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

const ChatPage = () => {
  return (
    <div className='m-2 flex flex-col h-[96%]'>
      <ChatTopBar/>
      <ChatBody/>
      <ChatInput/>
    </div>
  )
}

export default ChatPage
