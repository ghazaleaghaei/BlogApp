import Breadcrumbs from "@/Components/Shared/Breadcrumbs";
import CreatePostForm from "./_/components/CreatePostForm";

export default function Page() {
    return <div>
        <Breadcrumbs
            breadcrumbs={[
                {
                    label: "پست ها",
                    href: "/profile/posts"
                },
                {
                    label: "ایجاد پست",
                    href: "/profile/posts/create",
                    active: true,
                }
            ]}
        />
        <CreatePostForm />
    </div>
}
