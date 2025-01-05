import Breadcrumbs from "@/Components/Shared/Breadcrumbs"
import CreatePostForm from "../../create/_/components/CreatePostForm"
import { getPostById } from "@/services/postServices"
import { notFound } from "next/navigation"

async function EditPage({ params }) {

    const { postId } = await params
    const { post } = await getPostById(postId)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "پست ها",
                        href: "/profile/posts"
                    },
                    {
                        label: "ویرایش پست",
                        href: `/profile/posts/${postId}/edit`,
                        active: true,
                    }
                ]}
            />
            <CreatePostForm postToEdit={post} />
        </>
    )
}
export default EditPage
