import React from 'react'

function BasicsTemplate({data}) {
  return (
    <div className="px-5 pt-5 flex flex-col items-center">
    <div className="text-2xl font-bold ">{data?.basics?.name}</div>
    <div>Student</div>
    <div className="flex gap-5">
      <div className="flex gap-2 flex-col items-center px-5 pb-5 text-sm">
        <div className="flex gap-2">
          <div> {data?.basics?.phone}</div>
          <div>|</div>
          <div> {data?.basics?.email}</div>
        </div>
        <div>
          <div> {data?.basics?.address}</div>
        </div>
        <div className="px-5 text-sm text-justify">
          {data.basics?.summary
            ? data.basics?.summary
            : "        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugiat blanditiis dicta reiciendis placeat ab praesentium vero doloribus! Eaque quod omnis a dolorem repellat provident ab officiis totam, optio ut."}
        </div>
      </div>
    </div>
  </div>  )
}

export default BasicsTemplate