import { ShoppingOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AccountNavigation from "@/components/account-navigation"
import { SearchOutlined } from "@ant-design/icons"

export default function Header() {
    return <header className="fixed top-0 h-16 border-b w-full bg-white">
        <div className="w-full h-full flex items-center justify-between max-w-screen-xl mx-auto px-2 lg:px-0">
            <div className="ml-4 sm:ml-0 w-[180px]">
                <Link href="/"><span className="text-xl sm:text-2xl font-semibold">NextCommerce</span></Link>
            </div>
            <div className="items-center relative hidden md:flex">
                <Input className="h-10 sm:min-w-[320px] lg:w-[360px]" type="search" placeholder="Search for product, category or brand" />
                <Button variant="ghost" className="absolute right-0 p-2 flex justify-center items-center"><SearchOutlined className="h-8 w-8 text-lg rotate-90" /></Button>
            </div>
            <div className="flex items-center justify-center mx-4 sm:mx-0 sm:w-[180px]">
                <Link href="/login" className="sm:hidden mx-2 sm:mx-0">
                    <Button variant="ghost" className="flex text-base p-1 px-2"><UserOutlined style={{ fontSize: "16px" }} /></Button>
                </Link>

                {/* <AccountDropdown /> */}

                <AccountNavigation />

                <Link href="/cart">
                    <Button variant="ghost" className="flex w-full h-full gap-1 text-base p-1 py-2 mx-2 sm:mx-0 sm:py-1.5 sm:px-4">
                        {/* <div className="w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">1</div> */}
                        <ShoppingOutlined style={{ fontSize: "16px" }} /><span className="hidden sm:inline-block text-base">Cart</span>
                    </Button>
                </Link>
            </div>
        </div>
    </header>
}

