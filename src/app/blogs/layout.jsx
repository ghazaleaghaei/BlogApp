import { Suspense } from "react";
import CategoryList from "./_/components/CategoryList";
import Spinner from "@/Components/Shared/Spinner";

export const metadata = {
    title: "بلاگ ها"
};

function Layout({ children }) {
    return (
        <div className="grid gap-4 grid-cols-6">
            <h1 className="col-span-6 text-lg font-bold mb-10">لیست بلاگ ها</h1>
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
