import React from 'react'

function layout({children}) {
  return (
    <div className='h-full overflow-y-hidden'>{children}</div>
  )
}

export default layout