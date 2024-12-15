"use client";

import Button from "@/Components/Shared/Button"
import TextField from "@/Components/Shared/TextField"
import { useForm } from "react-hook-form"

// export const metadata = {
//     title: "ثبت نام",
// }

function Signup() {

    const { register, handleSubmit } = useForm()
    const onSubmit = (values) => {

    }
    return (
        <div>
            <h1>ثبت نام</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    name="name"
                    label="نام و نام خانوادگی"
                    register={register}
                />
                <TextField
                    name="email"
                    label="ایمیل"
                    register={register}
                    dir="ltr"
                />
                <TextField
                    name="password"
                    label="پسورد"
                    register={register}
                    dir="ltr"
                />
                <Button type="submit" variant="primary" className="w-full">
                    تایید
                </Button>
            </form>
        </div>
    )
}
export default Signup
