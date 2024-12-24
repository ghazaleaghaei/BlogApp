"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

const sortOptions = [
    {
        label: "تاریخ ایجاد (جدید ترین)",
        value: "latest",
    },
    {
        label: "تاریخ ایجاد (قدیمی ترین)",
        value: "earliest",
    },
    {
        label: "محبوبیت",
        value: "popular",
    },
    {
        label: "زمان مطالعه (نزولی)",
        value: "time_desc",
    },
    {
        label: "زمان مطالعه (صعودی)",
        value: "time_asc",
    },
];


function Sort() {

    const searchParams = useSearchParams()
    const [sort, setSort] = useState(searchParams.get("sort") || "latest")
    const pathname = usePathname()
    const router = useRouter()

    const changeHandler = (e) => {
        setSort(e.target.value);
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("sort", e.target.value);
        router.push(pathname + "?" + newParams.toString(), { scroll: false })
    }

    return (
        <select
            value={sort}
            onChange={changeHandler}
            className="p-3 text-xs bg-secondary-0 w-full outline-none focus:shadow-xl rounded-lg shadow-lg"
        >
            {sortOptions.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    )
}
export default Sort
