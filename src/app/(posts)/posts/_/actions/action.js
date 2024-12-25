"use server"

import { createCommentApi } from "@/services/commentService"
import { setCookieOnReq } from "Functions/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"

// export async function createComment(postId, parentId, formData) {
export async function createComment(prevState, { formData, postId, parentId }) {

    //for know which user add comment
    const cookiesStore = await cookies();
    const options = setCookieOnReq(cookiesStore)

    const rawFormData = {
        postId,
        parentId,
        text: formData.get("text"),
    }


    try {
        const { message } = await createCommentApi(rawFormData, options)
        revalidatePath("/posts/[slug]", "page");
        console.log(message)
        return { message }
    } catch (err) {
        const error = err?.response?.data?.message;
        return { error }
    }

}
