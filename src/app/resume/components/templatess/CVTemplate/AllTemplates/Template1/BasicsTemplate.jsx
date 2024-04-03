import React from 'react'
import { useStore } from "../../../../../state/GlobalState";
function BasicsTemplate() {
  const name = useStore((state)=>state.name)
  const number = useStore((state)=>state.number)
  const email = useStore((state)=>state.email)
  const address= useStore((state)=>state.address)
  return (
    <div className="px-5 pt-5 flex flex-col items-center">
    <div className="text-2xl font-bold ">{name}</div>
    <div>Student</div>
    <div className="flex gap-5">
      <div className="flex gap-2 flex-col items-center px-5 pb-5 text-sm">
        <div className="flex gap-2">
          <div> {number}</div>
          <div>|</div>
          <div> {email}</div>
        </div>
        <div>
          <div> {address}</div>
        </div>
        <div className="px-5 text-sm text-justify">
          {/* {summary} */}
          {/* {data.basics?.summary
            ? data.basics?.summary
            : "        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugiat blanditiis dicta reiciendis placeat ab praesentium vero doloribus! Eaque quod omnis a dolorem repellat provident ab officiis totam, optio ut."} */}
        </div>
      </div>
    </div>
  </div>  )
}

export default BasicsTemplate