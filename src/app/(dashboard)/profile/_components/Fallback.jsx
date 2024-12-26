import Spinner from "@/Components/Shared/Spinner"

function Fallback() {
    return (<div className="w-full flex justify-center items-center gap-4">
        <p>در حال بارگذاری</p>
        <Spinner />
    </div>)
}
export default Fallback
