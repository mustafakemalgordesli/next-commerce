import ResetPasswordForm from "@/components/forms/reset-password"
import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"


export default async function Page({ searchParams }: { searchParams?: { expire: string | undefined } }) {
    const expire = searchParams?.expire
    if (typeof expire != "string") return notFound()
    if (!expire) return notFound()
    const token = await prisma.resetToken.findUnique({ where: { token: expire } })

    if (!token) return <div className="mt-20">
        This link has expired
    </div>

    const timeDiff = Math.abs(
        new Date().getTime() - token.createdAt.getTime()
    );

    const diffMin = Math.ceil(timeDiff / (1000 * 60));

    if (diffMin >= 30) {
        await prisma.resetToken.delete({
            where: { id: token?.id },
        });
        return <div className="mt-20">
            This link has expired
        </div>
    }

    return <ResetPasswordForm expire={expire}></ResetPasswordForm>
}