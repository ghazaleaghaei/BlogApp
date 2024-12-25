import Author from "@/Components/Shared/Author"
import CoverImage from "@/Components/Shared/CoverImage"

function RelatedPost({ posts }) {
    return (
        <div className="mb-10">
            <p className="text-xl mb-4">پست های مرتبط</p>
            <div className="grid gap-4 grid-cols-6">
                {
                    posts.map(post => <div
                        key={post._id}
                        className="col-span-6 md:col-span-3 lg:col-span-2"
                    >
                        <CoverImage {...post} link={`/posts/${post.slug}`} />
                        <div className="flex items-center justify-between mt-4">
                            <p>{post.title}</p>
                            <Author {...post.author} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default RelatedPost
