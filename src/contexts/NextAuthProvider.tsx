"use client";

import { SessionProvider } from "next-auth/react"

export default function NextAuthProvider({ children, session }: { session: any, children: React.ReactNode }) {
    return <SessionProvider session={session}>
        {children}
    </SessionProvider>
}