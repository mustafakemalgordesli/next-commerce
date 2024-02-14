import { ShoppingOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AccountDropdown from "@/components/account-dropdown"
import { Input } from "@/components/ui/input"

export default function Header() {
    return <header className="fixed top-0 h-16 border-b w-full">
        <div className="w-full h-full flex items-center justify-between max-w-screen-xl mx-auto">
            <div className="w-[200px]">
                <Link href="/"><span className="text-2xl font-semibold">Next-Commerce</span></Link>
            </div>
            <div>
                <Input className="h-10 hidden sm:inline-flex sm:min-w-[320px] lg:w-[360px]" type="search" placeholder="Search for product, category or brand" />
            </div>
            <div className="flex gap-0.5 sm:gap-1 items-center justify-center max-w-[175px]">
                <Link href="/login" className="w-full sm:hidden">
                    <Button variant="ghost" className="flex w-full h-full gap-1 text-base"><UserOutlined style={{ fontSize: "18px" }} /></Button>
                </Link>

                <AccountDropdown />

                <Link href="/cart">
                    <Button variant="ghost" className="flex w-full h-full gap-1 text-base"><ShoppingOutlined style={{ fontSize: "18px" }} /><span className="hidden sm:inline-block text-base">Cart</span></Button>
                </Link>
            </div>
        </div>
    </header>
}

