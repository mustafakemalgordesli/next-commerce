"use client"

import * as React from "react"
import Link from "next/link"

import { UserOutlined } from "@ant-design/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import LogoutButton from "./logout-button"

interface UserPayload {
    id: Number,
    email: string,
}

export default function AccountNavigation({ user }: { user: UserPayload | null }) {
    return (
        <NavigationMenu>
            <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className="list-none text-base gap-0.5 hidden sm:inline-flex"><UserOutlined style={{ fontSize: "16px" }} />{user ? "Account" : "Log In"}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-32 lg:w-36 list-none">
                        {
                            user
                                ?
                                <LoggedIn />
                                :
                                <NotLoggedIn />
                        }
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}

const NotLoggedIn = () => {
    return (
        <>
            <li className="row-span-3 w-full">
                <NavigationMenuLink asChild>
                    <Link href="/login" className="w-full">
                        <Button className="w-full">
                            Log In
                        </Button>
                    </Link>
                </NavigationMenuLink>
            </li>
            <li className="row-span-3 w-full">
                <NavigationMenuLink asChild>
                    <Link href="/signup" className="w-full">
                        <Button variant="outline" className="w-full">
                            Sign Up
                        </Button>
                    </Link>
                </NavigationMenuLink>
            </li>
        </>
    )
}

import { LogOutAction } from "@/actions/auth/logout"
const LoggedIn = () => {
    return (
        <>
            <li className="row-span-3 w-full">
                <NavigationMenuLink asChild>
                    <Link href="/account" className="w-full">
                        <Button className="w-full">
                            Account
                        </Button>
                    </Link>
                </NavigationMenuLink>
            </li>
            <li className="row-span-3 w-full">
                <NavigationMenuLink asChild>
                    <LogoutButton logoutaction={LogOutAction} />
                </NavigationMenuLink>
            </li>
        </>
    )
}