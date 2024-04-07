import React from 'react'
import { useStore } from "../../../../../state/GlobalState";

function BasicsTemplate2() {
  const name = useStore((state)=>state.name)
  const number = useStore((state)=>state.number)
  const email = useStore((state)=>state.email)
  const address= useStore((state)=>state.address)
  return (
    <div className="px-5 pt-5 flex flex-col items-center">
    <div className="text-2xl font-bold "></div>
    <div>Teacher</div>
    <div className="flex gap-5">
      <div className="flex gap-2 flex-col items-center px-5 pb-5 text-sm">
        <div className="flex gap-2">
          <div> Thanak </div>
          <div>thanakmech@gmail.com|081790154</div>
          <div>{name} </div>
        </div>
        <div>
          <div> {number} </div>
        </div>
        <div className="px-5 text-sm text-justify">
          Hello
        </div>
      </div>
    </div>
  </div>  )
}

export default BasicsTemplate2