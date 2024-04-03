import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { useStore } from "../../state/GlobalState";
function Personal() {
  const name = useStore(state=> state.name)
  const setName = useStore(state=> state.setName)

  const address = useStore(state=> state.address)
  const setAddress = useStore(state=> state.setAddress)

  const email = useStore(state=> state.email)
  const setEmail = useStore(state=> state.setEmail)
  const number = useStore(state=> state.number)
  const setNumber = useStore(state=> state.setNumber)


  return (
    <div className="px-8 rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Personal Data
            </Heading>
          }
          subtitle={<small>Personal Info Tip</small>}
        >
          <Text  className="text-sm">
          Provide much details about yourself as much as posible.
          </Text>
     
        </AccordionItem>
      </Accordion>

      <div className="w-full">
        <div className="flex gap-2">
          <Input
            radius="sm"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Full Name"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            radius="sm"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onValueChange={setEmail}
          />
        </div>
      </div>
      <div className="w-full">
        <Input
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          label="Address"
          placeholder="Enter your address"
          value={address}
          onValueChange={setAddress}
        />
      </div>
      <div className="w-full">
        <Input
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={number}
          onValueChange={setNumber}
        />
      </div>
      <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          placeholder="Enter your description"
        />
      </div>
    </div>
  );
}

export default Personal;
