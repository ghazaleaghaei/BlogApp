import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {

    const { postSlug } = await params
    const post = await getPostBySlug(postSlug);

    return {
        title: `پست ${post.title}`
    }
}

async function Post({ params }) {

    const { postSlug } = await params

    const post = await getPostBySlug(postSlug)

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
    </section>
    )
}
export default Post
