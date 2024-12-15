function TextField({
    type = "text",
    label,
    name,
    dir = "rtl",
    register,
    errors,
    validationSchema = {},
    ...rest
}) {

    const errorMessage = errors?.[name]
    const hasError = !!(errors && errorMessage)

    return (
        <div>
            <label>{label}</label>
            <input
                autoComplete="off"
                type={type}
                id={name}
                dir={dir}
                className=""
                {...register(name, validationSchema)}
                {...rest}
            />
            {
                errors && errors[name] && (
                    <span>
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>
    )
}
export default TextField
