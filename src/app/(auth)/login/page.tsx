import LoginForm from "@/components/forms/login-form";

export default function Page({ searchParams }: { searchParams?: { next: string | undefined } }) {
    const next = searchParams?.next || ""
    return <LoginForm next={next} />
}