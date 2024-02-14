import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { UserOutlined } from "@ant-design/icons"

export default function AccountDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden sm:inline-flex">
                <Button variant="ghost" className="flex w-full h-full gap-1 text-base"><UserOutlined style={{ fontSize: "18px" }} />Log In</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="/login" className="w-full">
                            <Button className="w-full">
                                Log In
                            </Button>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/signup" className="w-full">
                            <Button variant="outline" className="w-full">
                                Sign Up
                            </Button>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}