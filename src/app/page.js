import Image from "next/image";
import { Flex, Text, Button } from "@radix-ui/themes";
import { ThemeSwitcher } from "./components/ThemeSwticher";
import CardComp from "./components/CardComp";
import Landing from "./Page/Landing";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :</Text>
          <ThemeSwitcher />
          <Landing />
          <Button>Let's go</Button>
        </Flex>
      </main>
    </>
  );
}
