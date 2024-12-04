"use client"

import { ArrowRightIcon } from "@heroicons/react/24/outline"
import useMoveBack from "Hooks/useMoveBack"

function NotFound() {
    const moveBack = useMoveBack()
    return (
        <div className="container max-w-7xl bg-secondary-50 my-20 p-4">
            <div className="max-w-sm mx-auto flex flex-col items-center gap-10">
                <h1 className="text-2xl">صفحه ای که دنبالش بودید، پیدا نشد</h1>
                <button
                    onClick={moveBack}
                    className="flex gap-2 self-start text-secondary-900"
                >
                    <ArrowRightIcon className="w-6 aspect-square stroke-primary-900" />
                    <span>برگشت</span>
                </button>
            </div>
        </div>
    )
}
export default NotFound
