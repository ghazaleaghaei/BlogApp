import Button from "@/Components/Shared/Button";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { toPersianDigits } from "Functions/numberFormatter";

function PostInteraction({ commentsCount }) {

    const buttonClass = "flex items-center justify-center gap-x-1 rounded p-1 [&>svg]:w-4 [&>svg]:aspect-square [&>svg]:text-inherit text-xs lg:text-sm transition-all duration-300 ease-out"

    return (<div className="flex gap-3">
        <Button
            className={buttonClass}
            variant="btnSecondary"
        >
            <ChatBubbleOvalLeftEllipsisIcon />
            <span>{toPersianDigits(commentsCount)}</span>
        </Button>
        <Button
            className={buttonClass}
            variant="btnRed"
        >
            <HeartIcon />
        </Button>
        <Button
            className={buttonClass}
            variant="btnPrimary"
        >
            <BookmarkIcon />
        </Button>
    </div>)
}
export default PostInteraction
