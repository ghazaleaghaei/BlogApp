'use client'

function Error({ error, reset }) {
    return (<div className="container xl:max-w-7xl">
        <div className="flex flex-col pt-10 w-fit mx-auto gap-10">
            <p className="text-xl font-bold text-secondary-700 mb-8">
                {error.message}
            </p>
            <button
                onClick={reset}
                className="flex items-center gap-x-2 text-secondary-500">
                تلاش مجدد
            </button>
        </div>
    </div>
    )
}
export default Error
