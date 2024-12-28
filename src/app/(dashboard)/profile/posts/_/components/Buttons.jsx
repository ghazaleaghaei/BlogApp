"use client"

import Button from "@/Components/Shared/Button";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function DeletePost({ id }) {
    return (
        <Button variant="outline" onClick={() => console.log(id)} >
            <TrashIcon className="stroke-error w-4 h-4" />
        </Button>
    )
}

export function UpdatePost({ id }) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <Button variant="outline">
                <PencilIcon className="w-4 h-4" />
            </Button>
        </Link>
    )
}

export function CreatePost() {
    return (
        <Link
            href="/profile/posts/create"
            className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium transition-colors hover:bg-primary-700 text-secondary-0"
        >
            <span className="hidden md:block">ایجاد پست</span>
            <PlusIcon className="w-5" />
        </Link>
    )
}
