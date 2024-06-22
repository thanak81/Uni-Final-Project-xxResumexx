// app/components/ThemeSwitcher.tsx
"use client";

import { Button, DropdownMenu } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
console.log(theme === "dark")
  return (
    <div>
      {theme === "dark" ? (
        <div onClick={() => setTheme("light")} className="cursor-pointer">
          <DarkIcon />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")} className="cursor-pointer">
          <LightIcon />
        </div>
      )}
      {/* <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft">
            Themes
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item shortcut="E" onClick={() => setTheme("light")}>
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ E" onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root> */}
    </div>
  );
}
