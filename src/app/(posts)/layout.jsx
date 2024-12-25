import Header from "@/Components/Layout/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container xl:max-w-7xl h-fit flex-1 bg-secondary-50 pt-10">
                {children}
            </div>
        </>
    )
}
