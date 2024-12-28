import Table from "@/Components/Shared/Table"
import { getPosts } from "@/services/postServices"
import PostRow from "./PostRow"

async function PostsTable({ query = "" }) {
    const posts = await getPosts(query)

    if (!posts.length) return <p>پستی یافت نشد</p>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایجاد</th>
                <th>نوع</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    posts.map((post, index) => <PostRow
                        key={post._id}
                        {...post}
                        index={index}
                    />)
                }
            </Table.Body>
        </Table>
    )
}
export default PostsTable