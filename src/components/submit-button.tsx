'use client'
import { Button } from "@/components/ui/button"
import { useFormStatus } from 'react-dom'
import { ReloadIcon } from "@radix-ui/react-icons"

export function SubmitButton({ children }: {
    children:
    React.ReactNode
}) {
    const { pending } = useFormStatus()

    return (
        <>
            {
                pending
                    ?
                    <Button type="submit" disabled className="w-full mt-1">
                        <ReloadIcon className="mr-1 h-4 w-4 animate-spin" />
                        Please wait
                    </Button >
                    :
                    <Button type="submit" className="w-full mt-1">
                        {children}
                    </Button>
            }
        </>
    )
}