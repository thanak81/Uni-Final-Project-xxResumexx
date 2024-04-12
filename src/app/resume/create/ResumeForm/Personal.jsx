import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { useStore } from "../../state/GlobalState";
import InputComp from "../../components/InputComp";
function PersonalForm({ active}) {
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);

  const address = useStore((state) => state.address);
  const setAddress = useStore((state) => state.setAddress);

  const email = useStore((state) => state.email);
  const setEmail = useStore((state) => state.setEmail);
  const number = useStore((state) => state.number);
  const setNumber = useStore((state) => state.setNumber);
  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Personal Data
            </Heading>
          }
          subtitle={<small>Personal Info Tip</small>}
        >
          <Text className="text-sm">
            Provide much details about yourself as much as posible.
          </Text>
        </AccordionItem>
      </Accordion>

      {active ? (
        <div className="flex gap-2 flex-col w-full">
          <InputComp
            value={name}
            onValueChange={ setName}
            label={"Full name"}
            name={"basics.name"}
          />
          <InputComp
            value={email}
            onValueChange={setEmail}
            label={"Email"}
            name={"basics.email"}
          />
        </div>
      ) : (
        <div className="flex gap-2 w-full">
          <InputComp
            value={name}
            onValueChange={setName}
            label={"Full name"}
            name={"basics.name"}
          />
          <InputComp
            value={email}
            onValueChange={setEmail}
            label={"Email"}
            name={"basics.email"}
          />
        </div>
      )}
      <div className="w-full">
        <InputComp
          label={"Address"}
          value={address}
          onValueChange={setAddress}
          name={"basics.address"}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"Phone Number"}
          value={number}
          onValueChange={setNumber}
          name={"basics.number"}
          // isInvalid = {true}
          // error={"sdsd"}
        />
      </div>
      <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          name={"basics.description"}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
