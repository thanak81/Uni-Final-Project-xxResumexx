import { Input } from '@nextui-org/react'
import React from 'react'

function InputComp({...props}) {
  return (
    <Input
      radius="sm"
      key="inside"
      variant="bordered"
      labelPlacement="inside"
      isInvalid={props.isInvalid}
      errorMessage={props.error}
      label={props.label}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      // onValueChange={setValue}
    />
  )
}

export default InputComp