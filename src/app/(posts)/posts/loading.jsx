import Spinner from "@/Components/Shared/Spinner"

function Loading() {
    return (
        <div className="w-full flex justify-center items-center gap-4">
            <Spinner />
            <h1>در حال بارگذاری ...</h1>
        </div>
    )
}
export default Loading
