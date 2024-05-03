import AddIcon from '@/app/components/icons/AddIcon'
import { Accordion, AccordionItem, Divider } from '@nextui-org/react'
import { Button, Heading, Text } from '@radix-ui/themes'
import React, { Fragment } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import RemoveIcon from '@/app/components/icons/RemoveIcon'
import InputComp from "../../../components/InputComp";
import AddButton from "../../../create/components/AddButton";
function LanguageForm({data}) {
  const {register, control} = useFormContext()
  const {fields,append, remove} = useFieldArray({
    control,
    name: "data.language"
  })
// const watch = useWatch()


function handleAdd(e) {
  e.preventDefault();
  append();
}

function handleRemove(index) {
  remove(index);
}

  return (
    <div className="rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
    <Accordion>
      <AccordionItem
        title={
          <Heading className="self-start" as="h3">
            Languages
          </Heading>
        }
        subtitle={<small>Language Info Tip</small>}
      >
        <Text className="text-sm">
          
          Provide much details about yourself as much as possible.
        </Text>
      </AccordionItem>
    </Accordion>
    {/* <InitialWork /> */}
    {fields.map((field, index) => {
      return (
        <Fragment key={field.id}>
          <Language data={data} index={index} handleRemove={handleRemove}/>
          {/* <Work index={index} handleRemove={handleRemove} register={register} watchPresent={watchPresent}/> */}
        </Fragment>
      );
    })}
    <div className="py-5">
      <AddButton handleAdd={handleAdd}/>
    </div>
  </div>
  )
}

export default LanguageForm


function Language({data,index, handleRemove}){
  console.log("language",data)
  return (
    <>
      {index > 0 && <Divider className="my-5 bg-blue-500" />}
      
      <div className="w-full flex gap-5 items-center">
        <InputComp
          name={`data.language.${index}.name`}
          label={`Language ${index+1}`}
          defaultValue={
            data?.payload?.data?.language[index]?.name
              ? data?.payload?.data?.language[index].name
              : ""
          }
          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
        <Button
          className="p-5 cursor-pointer"
          color="red"
          title="Remove"
          onClick={()=>handleRemove(index)}
        >
          <RemoveIcon />
        </Button>
      </div>
      <div className="w-full">
        <InputComp
          name={`data.language.${index}.fluency`}
          label={`Fluency`}
          defaultValue={
            data?.payload?.data?.language[index]?.fluency
              ? data.payload.data.language[index].fluency
              : ""
          }
          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
      </div>
    </>
  )
}