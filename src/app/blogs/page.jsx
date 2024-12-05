import { Suspense } from "react"
import PostList from "./_/components/PostList"
import Spinner from "@/Components/Shared/Spinner"

function BlogPage() {

    return (<section className="space-y-4">
        <Suspense fallback={<Spinner />}>
            <PostList />
        </Suspense>
    </section>
    )
}
export default BlogPage
