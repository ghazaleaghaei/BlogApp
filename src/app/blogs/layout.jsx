
export const metadata = {
    title: "بلاگ ها"
};

function Layout({ children }) {
    return (
        <div className="grid gap-4 lg:grid-cols-6">
            <h1 className="lg:col-span-6 text-lg font-bold mb-10">لیست بلاگ ها</h1>
            <div className="lg:col-span-3 xl:col-span-1 text-secondary-500 space-y-4">category list</div>
            <div className="lg:col-span-3 xl:col-span-5">
                {children}
            </div>
        </div>
    )
}
export default Layout
