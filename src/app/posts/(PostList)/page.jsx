import PostList from "../_/components/PostList"
import { cookies } from "next/headers"
import { setCookieOnReq } from "Functions/setCookieOnReq"
import { getPosts } from "@/services/postServices"

async function BlogPage() {

    const cookiesStore = await cookies()
    const options = await setCookieOnReq(cookiesStore)
    const posts = await getPosts(options)

    return (<section className="space-y-4">

        <PostList posts={posts} />
    </section>
    )
}
export default BlogPage
