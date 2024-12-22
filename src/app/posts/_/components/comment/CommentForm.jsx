"use client"

import Button from "@/Components/Shared/Button"
import TextArea from "@/Components/Shared/TextArea"
import { useState } from "react"

function CommentForm() {
    const [text, setText] = useState("")
    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md w-full">
                    <form className="space-y-7">
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Button>
                            تایید
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default CommentForm
