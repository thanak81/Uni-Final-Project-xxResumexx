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
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwticher";
import { usePathname, useRouter } from "next/navigation";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname()
  console.log(pathName)
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
    title : "Create Resume",
    nav_item : <NavbarItem/>,
    nav_link : "/resume/create",
    is_active : false
  },
    {
    id: 2,
    title : "Get Template",
    nav_link : "/template",
    is_active: false
  },
]

  return (
      <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">XXResumeXX</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {activeNavLink.map((nav,index)=>(
            <NavbarItem key={nav.id} isActive= {nav.nav_link === pathName}>
              <Link href={nav.nav_link} color={pathName !== nav.nav_link? "foreground" : ""} aria-current={pathName !== nav.nav_link? "" : "page"}>
                {nav.title}
              </Link>
            </NavbarItem>
          )
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSwitcher />
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
