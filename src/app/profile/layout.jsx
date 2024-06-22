import React from 'react'

function layout({children}) {
  return (
    <div className='h-screen overflow-y-hidden'>{children}</div>
  )
}

export default layout