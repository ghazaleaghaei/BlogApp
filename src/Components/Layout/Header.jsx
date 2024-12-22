"use client"

import { useUser } from "Context/UserContext"
import NavLink from "./NavLink"

const navLinks = [
    {
        id: 1,
        children: "خانه",
        path: "/"
    },
    {
        id: 2,
        children: "بلاگ ها",
        path: "/posts"
    },
]

function Header() {

    const { user, isLoading } = useUser()

    return (
        <header className={`shadow-md bg-inherit sticky top-0 border-b border-b-secondary-300 bg-white z-10 duration-300 ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}`}>

            <nav className="container xl:max-w-7xl">
                <ul className="flex items-center text-secondary-400 py-2 gap-4">
                    {
                        navLinks.map((navLink, index) => <li
                            key={navLink.id}
                            className={`${index + 1 == navLinks.length && "me-auto"}`}
                        >
                            <NavLink path={navLink.path}>
                                {navLink.children}
                            </NavLink>
                        </li>)
                    }
                    {
                        user ? (
                            <NavLink path="/profile">پروفایل</NavLink>
                        ) : (
                            <NavLink path="/signin">ورود</NavLink>
                        )
                    }
                </ul>
            </nav>
        </header>)
}
export default Header
