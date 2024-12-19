"use client"

import Button from "@/Components/Shared/Button";
import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon, BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid"
import { toPersianDigits } from "Functions/numberFormatter";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
    const router = useRouter()

    const likeHandler = async (postId) => {
        try {
            const { message } = await likePostApi(postId)
            toast.success(message);
            router.refresh()

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const bookmarkHandler = async (postId) => {
        try {
            const { message } = await bookmarkPostApi(postId)
            toast.success(message);
            router.refresh()

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const buttonClass = "flex items-center justify-center gap-x-1 rounded p-1 [&>svg]:w-4 [&>svg]:aspect-square [&>svg]:text-inherit text-xs lg:text-sm transition-all duration-300 ease-out"

    return (<div className="flex gap-3">
        <Button
            className={buttonClass}
            variant="btnSecondary"
        >
            <ChatBubbleOvalLeftEllipsisIcon />
            <span>{toPersianDigits(post.commentsCount)}</span>
        </Button>
        <Button
            className={buttonClass}
            variant="btnRed"
            onClick={() => likeHandler(post._id)}
        >
            {
                post.isLiked ? <SolidHeartIcon /> : <HeartIcon />
            }
        </Button>
        <Button
            className={buttonClass}
            variant="btnPrimary"
            onClick={() => bookmarkHandler(post._id)}
        >
            {
                post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />
            }
        </Button>
    </div>)
}
export default PostInteraction
