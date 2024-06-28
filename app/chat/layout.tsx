import LeftSideBar from '@/components/LeftSideBar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex h-screen'  >
        <LeftSideBar/>
        {children}
    </div>
  )
}

export default layout
