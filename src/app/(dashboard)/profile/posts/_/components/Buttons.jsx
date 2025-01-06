"use client"

import Button from "@/Components/Shared/Button";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import deletePost from "../functions/deletePost";
import ConfirmDelete from "@/Components/Shared/ConfirmDelete";
import Modal from "app/(posts)/posts/_/components/comment/Modal";
import useDeletePost from "../hooks/useDeletePost";
import { useRouter } from "next/navigation";

export function DeletePost({ id, title }) {

    const [open, setOpen] = useState(false)
    const router = useRouter()
    const { isDeleting, deletePost } = useDeletePost()

    return (
        <>
            <Button variant="outline" onClick={() => setOpen(true)} >
                <TrashIcon className="stroke-error w-4 h-4" />
            </Button>
            <Modal
                title={`حذف ${title}`}
                open={open}
                onClose={() => setOpen(false)}
            >
                <ConfirmDelete
                    resourceName={title}
                    onClose={() => setOpen(false)}
                    onConfirm={(e) => {
                        e.preventDefault()
                        deletePost({ id }, {
                            onSuccess: () => {
                                setOpen(false);
                                router.refresh("/profile/posts")
                            }
                        })
                    }}
                    disabled={isDeleting}
                />
            </Modal>
        </>
    )
}

//delete post from server
// export function DeletePost({ id: postId, postTitle }) {
//     // const deletePostWithId = ;
//     const [state, formAction] = useFormState(deletePost, {
//         error: "",
//         message: "",
//     });
//     const [isDeleteOpen, setIsDeleteOpen] = useState(false);

//     useEffect(() => {
//         if (state?.message) {
//             toast.success(state.message);
//             setIsDeleteOpen(false);
//         }
//         if (state?.error) {
//             toast.error(state.error);
//         }
//     }, [state]);

//     return (
//         <>
//             <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
//                 <TrashIcon className="text-error" />
//             </ButtonIcon>
//             <Modal
//                 title={`حذف ${postTitle}`}
//                 open={isDeleteOpen}
//                 onClose={() => setIsDeleteOpen(false)}
//             >
//                 <ConfirmDelete
//                     resourceName={postTitle}
//                     onClose={() => setIsDeleteOpen(false)}
//                     // onConfirm={deletePost.bind(null, postId)}
//                     onConfirm={async (formData) => {
//                         await formAction({ formData, postId });
//                     }}
//                 />
//             </Modal>
//         </>
//     );
// }

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
