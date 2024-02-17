"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import Link from "next/link"
import { GoogleOutlined } from "@ant-design/icons"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useFormState } from "react-dom"
import { LogInAction } from "@/actions/auth/login"
import { SubmitButton } from "../submit-button"

const initialState: { email: string, password: string } = {
    email: "",
    password: ""
}

export default function LoginForm() {
    const [state, formAction] = useFormState(LogInAction, initialState)

    const [passwordShow, SetPasswordShow] = useState(false)

    return <form className="container max-w-lg p-2 sm:p-4 lg:p-8 lg:px-12 border rounded-lg" action={formAction}>
        <div className="text-xl font-semibold pb-4">Sign in to your account</div>
        <div className="py-2 grid grid-flow-row gap-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
                {state.email && (
                    <p className="text-xs font-medium text-red-600">{state.email}</p>
                )}
            </div>
            <div className="grid w-full items-center gap-1.5">

                <div className="grid w-full grid-flow-col items-center">
                    <Label>Password</Label>

                    <Link href="/forgotpassword" className="flex justify-end underline text-sm font-semibold">
                        Forgot password?
                    </Link>

                </div>
                <div className="relative flex items-center">
                    <Input type={passwordShow ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full" />
                    <Button type="button" onClick={() => SetPasswordShow(s => !s)} variant="ghost" className="absolute right-1 p-1 px-1.5 hover:bg-transparent">
                        {
                            !passwordShow ? <EyeOpenIcon className="h-5 w-5 bg-transparent" /> : <EyeNoneIcon className="h-5 w-5 bg-transparent fill-current" />
                        }
                    </Button>
                </div>
                {state.password && (
                    <p className="text-xs font-medium text-red-600">{state.password}</p>
                )}
            </div>
            {/* <div className="grid w-full grid-flow-col py-1">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" name="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>

                <Link href="/forgotpassword" className="flex justify-end">
                    <Label className="underline hover:bg-transparent p-0 py-3">Forgot password?</Label>
                </Link>

            </div> */}
        </div>
        <SubmitButton>Log In</SubmitButton>
        <div className="w-full py-2  flex items-center">
            <span className="text-gray-400">Don&apos;t have an account yet?</span>
            <Link href="/signup" className="flex justify-end">
                <Button variant="ghost" className="underline hover:bg-transparent p-1">Sign Up</Button>
            </Link>
        </div>
        <Button className="w-full">
            <GoogleOutlined className="mr-1 h-4 w-4" /> Log in with Google
        </Button>
    </form>
}