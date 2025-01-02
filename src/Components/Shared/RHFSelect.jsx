function RHFSelect({ label, name, register, options, required, errors }) {
    return (
        <div>
            <label
                htmlFor={name}
            >
                {label} {required && <span className="text-error">*</span>}
            </label>
            <select
                {...register(name)}
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
        </div>
    );
}
export default RHFSelect;
