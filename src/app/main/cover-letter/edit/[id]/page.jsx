import React from 'react'

function page({params}) {
  return (
    <div>{params.id}</div>
  )
}

export default page