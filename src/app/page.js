import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import Landing from "./Page/Landing";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen  flex-col items-center justify-between p-24">
        <Flex direction="column"  align={"center"} gap="5">
          <Heading>Recent Resume</Heading>
          <Landing />
        </Flex>
      </main>
    </>
  );
}
