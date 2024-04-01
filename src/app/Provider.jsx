"use client"

import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

function Provider({children}) {
  return (
    <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
        </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Provider