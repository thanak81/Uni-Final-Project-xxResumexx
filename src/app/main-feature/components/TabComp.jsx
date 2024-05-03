"use client"

import { Tab, Tabs } from '@nextui-org/react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function TabComp() {
    const usePathName = usePathname();

  return (
    <div>
        <Tabs aria-label='Options' color='primary' selectedKey={usePathName}>
            <Tab key="/main/resume/create" title={<Link href={"/main/resume/create"}>Resume</Link>}></Tab>
            <Tab key="/main/cover-letter/create" title={<Link href={"/main/cover-letter/create"}>Cover Letter</Link>}></Tab>
        </Tabs>

    </div>
  )
}

export default TabComp