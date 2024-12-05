import Image from "next/image";

async function PostList() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`)
    const { data: { posts } } = await res.json()

    return posts.length > 0
        ? <div className="grid lg:grid-cols-4 gap-8">
            {posts.map(post => <article
                key={post._id}
                className="sm:col-span-2 xl:col-span-1 border border-secondary-100 p-2 rounded-lg"
            >
                <div className="relative aspect-video overflow-hidden rounded-md">
                    <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover object-center hover:scale-110 duration-300"
                        sizes="(min-width: 808px) 50vw, 100vw"
                    />
                </div>
            </article>)}
        </div>
        : null;
}
export default PostList
