import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_/components/RelatedPost";
import PostComment from "../_/components/comment/PostComment";

export const dynamicParams = false

// export const dynamicParams = true
//when we get dynamicParams=true it means for example we have 100 posts and we want just 10 post has static rendering and when user needs another posts show them white dynamic rendering, if it was false it means that just show all of the posts in static rendering and when user put another slug in url showing not found page

export async function generateStaticParams() {
    const { posts } = await getPosts()
    // const slugs = posts.slice(0, 10).map(post => ({ slug: post.slug }))
    const slugs = posts.map(post => ({ slug: post.slug }))
    return slugs
}

export async function generateMetadata({ params }) {

    const { slug } = await params
    const post = await getPostBySlug(slug);

    return {
        title: `پست ${post.title}`
    }
}

async function Post({ params }) {

    const { slug } = await params

    const post = await getPostBySlug(slug)

    if (!post) notFound()

    return (<section className="text-secondary-600 max-w-4xl mx-auto">
        <h1 className="text-secondary-700 text-2xl font-bold mb-8">
            {post.title}
        </h1>
        <p className="mb-4">{post.briefText}</p>
        <p className="mb-8">{post.text}</p>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
            <Image
                className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
                fill
                src={post.coverImageUrl}
                alt={post.title}
            />
        </div>
        {
            post.related.length > 0 && <RelatedPost posts={post.related} />
        }
        <PostComment post={post} />
    </section>
    )
}
export default Post
