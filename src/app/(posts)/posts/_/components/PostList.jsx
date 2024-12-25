import Author from "@/Components/Shared/Author";
import CoverImage from "@/Components/Shared/CoverImage";
import PostInteraction from "@/Components/Shared/PostInteraction";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function PostList({ posts }) {

    return posts.length > 0
        ? <div className="grid lg:grid-cols-3 gap-8">
            {posts.map(post => <article
                key={post._id}
                className="sm:col-span-2 xl:col-span-1 border border-secondary-100 p-2 rounded-lg flex flex-col gap-2"
            >
                <CoverImage {...post} link={`/posts/${post.slug}`} />
                <Link href={`/posts/${post.slug}`}>
                    <h2 className="my-2 font-bold text-secondary-700">
                        {post.title}
                    </h2>
                </Link>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full">
                    <Author {...post.author} />
                    <div className="*:me-1 flex items-center text-secondary-500 text-sm">
                        <ClockIcon className="w-4 aspect-square stroke-secondary-500" />
                        <span>خواندن :</span>
                        <span className="leading-3">{post.readingTime}</span>
                        <span>دقیقه</span>
                    </div>
                </div>
                <PostInteraction post={post} />
            </article>)}
        </div>
        : null;
}
export default PostList
