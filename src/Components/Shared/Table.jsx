function Table({ children }) {
    return (
        <div className="bg-secondary-0 overflow-x-auto w-full">
            <table className="w-full border-collapse border-spacing-0">{children}</table>
        </div>
    )
}
export default Table;

function TableHeader({ children }) {
    return (
        <thead>
            <tr className="w-full bg-secondary-100 *:border-b *:border-b-secondary-200 *:whitespace-nowrap *:text-right *:text-base *:py-4 *:px-3 *:text-secondary-600">
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return <tbody>
        {children}
    </tbody>
}

function TableRow({ children }) {
    return <tr className="*:border-b *:border-b-secondary-200 *:whitespace-nowrap *:text-right *:text-base *:py-4 *:px-3 *:text-secondary-600">
        {children}
    </tr>
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
