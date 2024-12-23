"use client"

import TextArea from "@/Components/Shared/TextArea"
import { useActionState, useEffect, useState } from "react"
import { createComment } from "../../actions/action"
import SubmitButton from "@/Components/Shared/SubmitButton"
import toast from "react-hot-toast"

const initialState = {
    message: "",
    error: "",
}

function CommentForm({ postId, parentId, onClose }) {

    const [text, setText] = useState("")
    const [state, formAction, pending] = useActionState(createComment, initialState)

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message)
            onClose();
        }
        if (state?.error) {
            toast.error(state.error)
        }
    }, [state])

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md w-full">
                    <form
                        className="space-y-7"
                        // action={createComment.bind(null, postId, parentId)}
                        action={async (formData) => {
                            await formAction({ formData, postId, parentId });
                        }}
                    >
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <SubmitButton pending={pending}>
                            تایید
                        </SubmitButton>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default CommentForm
