import { ArrowLeftStartOnRectangleIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import SidebarNavs from "./SidebarNavs"


function Sidebar({ onClose }) {
    return (
        <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">

            <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
                <Link
                    href="/"
                    className="flex items-center gap-x-4 justify-center text-secondary-700 lg:flex-1"
                >
                    <HomeIcon className="w-6 h-6" />
                    <span>نکست بلاگ</span>
                </Link>
                <button onClick={onClose} className="block lg:hidden border-none">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="overflow-y-auto flex-auto" >
                <SidebarNavs />
                <div className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 px-4 py-3">
                    <ArrowLeftStartOnRectangleIcon className="me-4 h-5 w-5" />
                    <span>خروج</span>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
