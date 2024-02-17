"use client"

import { Button } from "@/components/ui/button"
import { LogoutOutlined } from "@ant-design/icons"

export default function LogoutButton({ logoutaction }: { logoutaction: () => void }) {
    const handleClick = async () => {
        await logoutaction()
    }
    return <Button onClick={handleClick} variant="outline" className="w-full flex flex-row items-center justify-center gap-0.5">
        <LogoutOutlined />Log out
    </Button>
}