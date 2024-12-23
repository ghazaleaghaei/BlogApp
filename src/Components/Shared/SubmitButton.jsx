import { useFormStatus } from "react-dom"
import Button from "./Button"
import Spinner from "./Spinner"

function SubmitButton({ children, className, pending, ...rest }) {

    // const { pending } = useFormStatus()

    return (
        <Button
            disabled={pending}
            {...rest}
            className={`flex items-center justify-center gap-x-4 py-2 w-full disabled:opacity-70 ${className}`}
        >
            {children}
            {pending && <Spinner containerClass="h-6 w-6" />}
        </Button>
    )
}
export default SubmitButton
