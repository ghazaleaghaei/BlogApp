function TextField({
    type = "text",
    label,
    name,
    dir = "rtl",
    register,
    errors,
    isRequired,
    validationSchema = {},
    ...rest
}) {

    const errorMessage = errors?.[name]
    const hasError = !!(errors && errorMessage)

    return (
        <div className="flex flex-col gap-2">
            <label>
                {label}
                {isRequired && <span className="text-error-900">*</span>}
            </label>
            <input
                autoComplete="off"
                type={type}
                id={name}
                dir={dir}
                className={`bg-gray-50 rounded-lg p-3 focus:outline-none border border-gray-50 hover:border-primary-400 hover:bg-secondary-0 hover:shadow-lg duration-300 ${hasError && " border-error-900"}`}
                {...register(name, validationSchema)}
                {...rest}
            />
            {
                errors && errors[name] && (
                    <span className="text-error-900">
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>
    )
}
export default TextField
