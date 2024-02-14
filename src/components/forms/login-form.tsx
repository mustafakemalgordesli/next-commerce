"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "../ui/button"
import Link from "next/link"

export default function LoginForm() {
    return <form className="container max-w-lg p-2 sm:p-4 lg:p-8 lg:px-12 border rounded-lg">
        <div className="text-xl font-semibold pb-4">Sign in to your account</div>
        <div className="py-2 grid grid-flow-row gap-4">
            <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="grid w-full grid-flow-col py-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>

                <Link href="/forgotpassword" className="flex justify-end">
                    <Button variant="ghost" className="underline hover:bg-transparent p-0">Forgot password?</Button>
                </Link>

            </div>
        </div>
        <Button className="w-full">Log In</Button>
        <div className="w-full pt-4  flex items-center">
            <span className="text-gray-400">Don&apos;t have an account yet?</span>
            <Link href="/signup" className="flex justify-end">
                <Button variant="ghost" className="underline hover:bg-transparent p-1">Sign Up</Button>
            </Link>
        </div>
    </form>
}