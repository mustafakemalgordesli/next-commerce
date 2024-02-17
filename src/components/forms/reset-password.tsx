"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { SubmitButton } from "@/components/submit-button"
import { useEffect, useState } from "react"
import { ResetPasswordAction } from "@/actions/auth/resetpassword"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

const initialState: { password: string, error: string, message: string } = {
    password: '',
    error: '',
    message: '',
}

export default function ResetPasswordForm({ expire }: { expire: string }) {

    const [state, formAction] = useFormState(ResetPasswordAction, initialState)

    const [passwordShow, SetPasswordShow] = useState(false)

    useEffect(() => {
        if (state.error != "") {
            alert(state.error)
        }
    }, [state.error])

    useEffect(() => {
        if (state.message != "") {
            alert(state.message)
        }
    }, [state.message])

    return <form className="container max-w-lg p-2 sm:p-4 lg:p-8 lg:px-12 border rounded-lg flex flex-col gap-4" action={formAction}>
        <div className="text-xl font-semibold">Reset your password</div>
        <div className="py-2 grid grid-flow-row gap-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">New Password</Label>
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
        <input type="hidden" name="expire" value={expire} />
        <SubmitButton>Reset password</SubmitButton>
    </form>
}