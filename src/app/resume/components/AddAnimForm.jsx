import React, { Fragment } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'


function AddAnimForm({children}) {
const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
    <Fragment ref={parent}>
        {children}
    </Fragment>
  )
}

export default AddAnimForm