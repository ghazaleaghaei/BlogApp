import { Suspense } from "react";
import CategoryList from "../_/components/CategoryList";
import Spinner from "@/Components/Shared/Spinner";
import Search from "../_/components/Search";
import Sort from "../_/components/Sort";

export const metadata = {
    title: "بلاگ ها"
};

function Layout({ children }) {
    return (
        <div className="grid gap-4 grid-cols-6 mb-20 p-4">
            <div className="col-span-6 text-lg font-bold mb-10 grid lg:grid-cols-3 gap-2">
                <h1 className="inline-block align-bottom">
                    لیست بلاگ ها
                </h1>
                <Search />
                <Sort />
            </div>
            <div className="col-span-2 lg:col-span-1 text-secondary-500 space-y-4">
                <Suspense fallback={<Spinner />}>
                    <CategoryList />
                </Suspense>
            </div>
            <div className="col-span-4 lg:col-span-5">
                {children}
            </div>
        </div>
    )
}
export default Layout
