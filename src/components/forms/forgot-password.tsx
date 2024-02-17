"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { SubmitButton } from "@/components/submit-button"
import { ForgotPasswordAction } from "@/actions/auth/forgotpassword"

const initialState: { email: string } = {
    email: "",
}

export default function ForgotPasswordForm() {
    const [state, formAction] = useFormState(ForgotPasswordAction, initialState)

    return <form className="container max-w-lg p-2 sm:p-4 lg:p-8 lg:px-12 border rounded-lg flex flex-col gap-4" action={formAction}>
        <div className="text-xl font-semibold">Reset your password</div>
        <div className="py-2 grid grid-flow-row gap-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                {state.email && (
                    <p className="text-xs font-medium text-red-600">{state.email}</p>
                )}
            </div>
        </div>
        <SubmitButton>Send password reset email</SubmitButton>
        {/* <div className="w-full py-2  flex items-center">
            <span className="text-gray-400">Don&apos;t have an account yet?</span>
            <Link href="/signup" className="flex justify-end">
                <Button variant="ghost" className="underline hover:bg-transparent p-1">Sign Up</Button>
            </Link>
        </div> */}
    </form>
}