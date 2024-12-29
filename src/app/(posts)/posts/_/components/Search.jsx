"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Search() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const formSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        const newParams = new URLSearchParams(searchParams.toString());

        newParams.set("page", "1");

        if (search) {
            newParams.set("search", search);
        } else {
            newParams.delete("search");
        }
        router.push(pathname + "?" + newParams.toString(), { scroll: false })
    }

    return (
        <form className="relative z-0" onSubmit={formSubmit}>
            <input
                type="text"
                name="search"
                autoCapitalize="off"
                placeholder="جستجو"
                className="p-3 text-xs bg-secondary-0 w-full outline-none focus:shadow-xl rounded-lg shadow-lg"
            />
            <button
                type="submit"
                className="absolute end-0 top-0 me-3 flex h-full items-center"
            >
                <MagnifyingGlassIcon className="h-4 text-secondary-400" />
            </button>
        </form>
    )
}
export default Search
