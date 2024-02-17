import ResetPasswordForm from "@/components/forms/reset-password"



export default function Page({ searchParams }: { searchParams?: { expire: string | undefined } }) {
    const expire = searchParams?.expire
    if (typeof expire != "string") return <div></div>
    return <ResetPasswordForm expire={expire}></ResetPasswordForm>
}