const btnType = {
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-900",
    outline: "border border-secondary-400 text-secondary-600",
    danger: "bg-redd-300",
    btnPrimary: "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
    btnSecondary: "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
    btnRed: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
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
