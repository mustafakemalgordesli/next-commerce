"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GoogleOutlined } from "@ant-design/icons"
import { Button } from "../ui/button"
import Link from "next/link"
import { SubmitButton } from "../submit-button"
import { SignUpAction } from "@/actions/auth/signup"
import { useFormState } from "react-dom"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const initialState: { email: string, password: string } = {
    email: "",
    password: ""
}

export default function SignupForm() {

    const [state, formAction] = useFormState(SignUpAction, initialState)

    const [passwordShow, SetPasswordShow] = useState(false)

    return <form className="container max-w-lg p-2 sm:p-4 lg:p-8 lg:px-12 border rounded-lg" encType="multipart/form-data" action={formAction} method="POST">
        <div className="text-xl font-semibold pb-4">Sign up with email</div>
        <div className="py-2 grid grid-flow-row gap-4">
            <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
                {state.email && (
                    <p className="text-xs font-medium text-red-600">{state.email}</p>
                )}
            </div>
            <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative flex items-center">
                    <Input type={passwordShow ? "text" : "password"} name="password" id="password" placeholder="Password" />
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
        </div>
        <SubmitButton>Sign Up</SubmitButton>
        <div className="w-full py-2  flex items-center">
            <span className="text-gray-400">Already have an account?</span>
            <Link href="/login" className="flex justify-end">
                <Button variant="ghost" className="underline hover:bg-transparent p-1">Log In</Button>
            </Link>
        </div>
        <Button className="w-full">
            <GoogleOutlined className="mr-1 h-4 w-4" /> Sign up with Google
        </Button>
    </form>
}