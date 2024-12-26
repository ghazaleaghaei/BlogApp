import PostsTable from "./posts/_/components/PostsTable";
import { Suspense } from "react";
import Cards from "./_components/Cards";
import Fallback from "./_components/Fallback";

function Profile() {

    return (<div>
        <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
        <Suspense fallback={<Fallback />}>
            <Cards />
        </Suspense>
        <h2 className="text-xl mb-8 text-secondary-700">آخرین پست ها</h2>
        <Suspense fallback={<Fallback />}>
            <PostsTable query="sort=latest&limit=5" />
        </Suspense>
    </div>
    )
}
export default Profile
