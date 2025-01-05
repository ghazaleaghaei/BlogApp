import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"

function FileInput({
    type = "text",
    label,
    name,
    dir = "rtl",
    value,
    onChange,
    errors,
    isRequired,
    className,
    validationSchema = {},
    ...rest
}) {

    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages)

    return (<>
        <label
            htmlFor="file-upload"
            className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}
        >
            {label}
            <ArrowUpTrayIcon className="w-5 h-5" />
            <input
                id="file-upload"
                type="file"
                className="sr-only hidden"
                name={name}
                dir={dir}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </label>
        {
            errors && errors[name] && (
                <span className="text-error">
                    {errors[name]?.message}
                </span>
            )
        }
    </>
    )
}
export default FileInput
