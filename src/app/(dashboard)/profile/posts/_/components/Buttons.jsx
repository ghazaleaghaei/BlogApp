"use client"

import Button from "@/Components/Shared/Button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
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
