function RHFSelect({ label, name, register, options, isRequired, errors, validationSchema = {}, ...rest }) {

    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages)

    return (
        <div>
            <label
                htmlFor={name}
            >
                {label} {isRequired && <span className="text-error">*</span>}
            </label>
            <select
                {...register(name, validationSchema)}
                {...rest}
                id={name}
                className="bg-secondary-100 rounded-lg p-3 focus:outline-none border border-gray-50 hover:border-primary-400 hover:bg-secondary-0 hover:shadow-lg duration-300 w-full"
            >
                {options.map((option) => (
                    <option
                        className=""
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {
                errors && errors[name] && (
                    <span className="text-error">
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>
    );
}
export default RHFSelect;
