import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import Landing from "./Page/Landing";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Flex direction="column" gap="2">
          <Heading>Recent Resume</Heading>
          <Landing />
          <Button>Lets go</Button>
        </Flex>
      </main>
    </>
  );
}
