import { getPosts } from "@/services/postServices";
import PostList from "app/posts/_/components/PostList"
import { setCookieOnReq } from "Functions/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {

    const { search } = searchParams;
    const { categorySlug } = params
    const queries = `categorySlug=${categorySlug}` + "&" + queryString.stringify(searchParams);
    const cookiesStore = await cookies()
    const options = await setCookieOnReq(cookiesStore)
    const posts = await getPosts(queries, options)

    return (
        <div>

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

        </div>
    )
}
export default Category