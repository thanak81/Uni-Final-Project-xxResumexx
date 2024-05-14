
import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import Landing from "./Page/Landing";
import BardComp from "./components/BardComp";
import { useTheme } from "next-themes";
export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col  w-full p-24">
          <Landing />
        
      </main>
    </>
  );
}
