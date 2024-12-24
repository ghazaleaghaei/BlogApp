import PostList from "../_/components/PostList"
import { cookies } from "next/headers"
import { setCookieOnReq } from "Functions/setCookieOnReq"
import { getPosts } from "@/services/postServices"
import queryString from "query-string"

async function BlogPage({ searchParams }) {

    const queries = queryString.stringify(await searchParams);
    const cookiesStore = await cookies()

    const options = await setCookieOnReq(cookiesStore)
    const posts = await getPosts(queries, options)
    const { search } = await searchParams;

    return (<section className="space-y-4">

        {
            search ? <p>
                {posts.length === 0
                    ?
                    "هیچ پستی با این مشخصات پیدا نشد"
                    :
                    `نشان دادن ${posts.length} نتیجه برای `
                }
                <span>&quot;{search}&quot;</span>
            </p> : null
        }
        <PostList posts={posts} />
    </section>
    )
}
export default BlogPage
