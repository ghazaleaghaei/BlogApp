const btnType = {
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-900",
    outline: "border border-secondary-400 text-secondary-600",
    danger: "bg-redd-300"
}

function Button({
    children,
    onClick,
    variant = "primary",
    className,
    ...rest
}) {
    return (
        <button
            onClick={onClick}
            className={`${btnType[variant]} ${className} p-2 rounded-xl `}
            {...rest}
        >
            {children}
        </button>
    )
}
export default Button
