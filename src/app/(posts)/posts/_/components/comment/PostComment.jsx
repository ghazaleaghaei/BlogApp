"use client"

import Button from "@/Components/Shared/Button"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import Comment from "./Comment"
import Modal from "./Modal"
import { useState } from "react"
import CommentForm from "./CommentForm"
import { useUser } from "Context/UserContext"
import { useRouter } from "next/navigation"

const latsItem = "after:h-[calc(100%+15px)] after:w-1 after:bg-secondary-300 after:absolute after:-top-3 after:-start-5 after:rounded-full before:w-4 before:h-1 before:bg-secondary-300 before:absolute before:top-1/2 before:-start-4 before:rounded-e-full"

function PostComment({ post: { comments, _id: postId } }) {

    const [open, setOpen] = useState(false)
    const [parent, setParent] = useState(null);
    const { user } = useUser()
    const router = useRouter()


    const addNewCommentHandler = (parent) => {

        if (!user) {
            router.push("/signin")
            return;

        }

        setParent(parent);
        setOpen(true);
    }

    return (
        <div className="mb-10">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title={parent ? " پاسخ به نظر" : "نظر جدید"}
                description={parent ? parent.user.name : "نظر خود را وارد کنید"}
            >
                <CommentForm
                    parentId={parent ? parent._id : null}
                    postId={postId}
                    onClose={() => setOpen(false)}
                />
            </Modal>
            <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
                <Button
                    variant="outline"
                    className="flex items-center px-4"
                    onClick={() => addNewCommentHandler(null)}
                >
                    <QuestionMarkCircleIcon className="me-2 w-6" />
                    <span>ثبت نظر جدید</span>
                </Button>
            </div>
            <div className="space-y-8 bg-secondary-0 rounded-xl py-6 px-3 lg:px-6">
                {
                    comments.length > 0
                        ? (
                            comments.map(comment => <div key={comment._id}>
                                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                                    <Comment
                                        comment={comment}
                                        onAddComment={() => addNewCommentHandler(comment)}
                                    />
                                </div>
                                <div className="ms-6 sm:ms-8 space-y-3">
                                    {
                                        comment.answers.map((item, index) => {
                                            return (
                                                <div key={item._id} className="relative">
                                                    <div className={`border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4 ${latsItem}`}
                                                    >
                                                        <Comment comment={item} key={item._id} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            )
                        ) : (
                            <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
                        )
                }
            </div>
        </div>
    )
}
export default PostComment
