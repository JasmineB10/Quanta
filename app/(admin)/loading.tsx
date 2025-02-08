import Avatar from '@/components/Avatar'
import React from 'react'

function Loading() {
  return (
    <div className='mx-auto animate-spin p-10'>
        <Avatar seed='Quanta Support Agent' className=''></Avatar>
    </div>
  )
}

export default Loading