import React from 'react'
import parse from "html-react-parser";

function ProfileTemplate({resumeData}) {
  return (
    <div className='prose px-5 mb-5 text-black max-w-full text-justify text-sm'>
        {parse(resumeData.data.profile.summary)}
    </div>
  )
}

export default ProfileTemplate