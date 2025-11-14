'use client'

import { ThemeProvider } from "next-themes"
import { SessionProvider } from "@/lib/contexts/session-context"

export function Providers({children}: {children : React.ReactNode}) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}
