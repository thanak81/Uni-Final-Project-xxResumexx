"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwticher";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import HoverCardComp from "./HoverCard";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();
  console.log(pathName);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const activeNavLink = [
    {
      id: 1,
      title: "Create Resume",
      nav_item: <NavbarItem />,
      nav_link: "/main/resume/create",
      is_active: false,
    },
    {
      id: 2,
      title: "Create Cover Letter",
      nav_link: "/main/cover-letter/create",
      is_active: false,
    },
  ];

  const { status, data: session } = useSession();
  console.log(status);
  console.log(session);
  return (
    <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/">
            <p className="font-bold text-inherit">XXResumeXX</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {activeNavLink.map((nav, index) => (
          <NavbarItem key={nav.id} isActive={nav.nav_link === pathName}>
            <Link
              href={nav.nav_link}
              color={pathName !== nav.nav_link ? "foreground" : ""}
              aria-current={pathName !== nav.nav_link ? "" : "page"}
            >
              {nav.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        {status === "authenticated" ? (
          <HoverCardComp
            avatar={
              <Link href="/profile">
                <Avatar
                  name={
                    session?.user?.payload?.name
                      ? session?.user.payload.name
                      : session?.user.name
                  }
                />
              </Link>
            }
            name={
              session?.user?.payload?.name
                ? session?.user.payload.name
                : session?.user.name
            }
            email={ session?.user?.payload?.email
              ? session?.user.payload.email
              : session?.user.email}
          />
        ) : (
          <Link href="/login">Login</Link>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
