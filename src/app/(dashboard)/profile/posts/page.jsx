import { Suspense } from "react"
import PostsTable from "./_/components/PostsTable"
import Fallback from "../_components/Fallback"

function Posts() {
    return (
        <Suspense fallback={< Fallback />}>
            <PostsTable />
        </Suspense>
    )
}
export default Posts
