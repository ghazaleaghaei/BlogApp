"use client"

import Avatar from "@/Components/Shared/Avatar"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useUser } from "Context/UserContext"
import Link from "next/link"
import { useState } from "react"
import Sidebar from "./Sidebar"
import dynamic from "next/dynamic"

const Drawer = dynamic(() => import("./Drawer"), { ssr: false })

function Header() {

    const { user, isLoading } = useUser()
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    return (
        <header className={`bg-secondary-0 ${isLoading && "bg-opacity-30 blur-md"}`}>
            <div className="flex items-center justify-between py-5 px-4 lg:px-8">
                <button
                    className="block lg:hidden border-none"
                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                >
                    {
                        isOpenDrawer ?
                            <XMarkIcon className="w-6 h-6" />
                            :
                            <Bars3Icon className="w-6 h-6" />
                    }
                </button>
                <span className="text-sm lg:text-lg font-bold text-secondary-700">
                    سلام {user?.name}
                </span>
                <Link href="/profile">
                    <Avatar src={user?.avatarUrl} />
                </Link>
                <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
                    <Sidebar onClose={() => setIsOpenDrawer(false)} />
                </Drawer>
            </div>
        </header>
    )
}
export default Header
