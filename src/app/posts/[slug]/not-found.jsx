"use client"

import Link from "next/link"

function NotFound() {

    return (
        <div className="container max-w-7xl bg-secondary-50 my-20 p-4">
            <div className="max-w-sm mx-auto flex flex-col items-center gap-10">
                <h1 className="text-2xl">هیچ پستی با این مشخصات یافت نشد</h1>
                <Link href="/posts" className="text-secondary-500">
                    رفتن به صفحه پست ها
                </Link>
            </div>
        </div>
    )
}
export default NotFound
