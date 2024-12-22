function TextArea({
    label,
    name,
    value,
    dir = "rtl",
    onChange,
    isRequired = false,
}) {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-secondary-600 text-sm">
                {label}
                {isRequired && <span className="text-error-900">*</span>}
            </label>
            <textarea
                name={name}
                id={name}
                dir={dir}
                className={`mt-2 min-h-[150px] leading-8 outline-none bg-secondary-100 rounded-xl hover:outline hover:outline-primary-400 duration-300 hover:shadow-xl ${dir === "ltr" ? "text-left" : "text-right"}`}
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    )
}
export default TextArea
