import { createPostApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreatePost() {
    const { isPending: isCreating, mutate: createPost } = useMutation({
        mutationFn: createPostApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return { isCreating, createPost }
}
