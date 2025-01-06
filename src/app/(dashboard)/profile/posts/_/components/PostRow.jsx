import Table from "@/Components/Shared/Table"
import { toLocalDateShort } from "Functions/dateFormatter"
import { toPersianDigits } from "Functions/numberFormatter"
import truncateText from "Functions/trancateText"
import { DeletePost, UpdatePost } from "./Buttons"

const typeStyle = {
    free: {
        label: "رایگان",
        className: "bg-success"
    },
    premium: {
        label: "پولی",
        className: "bg-secondary-400"
    }
}

function PostRow({ index, title, category, author, createdAt, type, _id }) {
    return (
        <Table.Row>
            <td>{toPersianDigits(index + 1)}</td>
            <td>{truncateText(title, 30)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td>
                <span className={`rounded-full px-3 py-1 text-white ${typeStyle[type].className}`}>
                    {typeStyle[type].label}
                </span>
            </td>
            <td className="flex items-center gap-x-3">
                <UpdatePost id={_id} />
                <DeletePost id={_id} title={title} />
            </td>
        </Table.Row>
    )
}
export default PostRow
