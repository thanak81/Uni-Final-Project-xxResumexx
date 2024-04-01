import Image from "next/image";
import { Flex, Text, Button } from '@radix-ui/themes';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :</Text>
      <Button>Let's go</Button>
    </Flex>

    </main>
  );
}
