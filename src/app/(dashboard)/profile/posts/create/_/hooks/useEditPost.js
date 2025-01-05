import { editPostApi } from "@/services/postServices"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function useEditPost() {
    const router = useRouter()
    const { isPending: isEditing, mutate: editPost } = useMutation({
        mutationFn: editPostApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return { isEditing, editPost }
}
