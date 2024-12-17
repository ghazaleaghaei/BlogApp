"use client";

import Button from "@/Components/Shared/Button"
import TextField from "@/Components/Shared/TextField"
import { useUser } from "Context/UserContext";
import Link from "next/link";
import { useForm } from "react-hook-form"

// export const metadata = {
//     title: "ثبت نام",
// }

function Signup() {

    const { signup } = useUser()

    const {
        register,
        handleSubmit,
        formState: { errors, isLoading }
    } = useForm({
        mode: "onTouched"
    })

    const onSubmit = async (values) => {
        await signup(values)
    }

    return (
        <div>
            <h1>ثبت نام</h1>
            <form
                className="flex flex-col gap-4 w-full mt-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    name="name"
                    label="نام و نام خانوادگی"
                    register={register}
                    isRequired
                    validationSchema={{
                        required: "نام و نام خانوادگی الزامی است",
                        maxLength: {
                            value: 30,
                            message: "حداکثر طول کاراکتر 30 می باشد"
                        },
                        minLength: 5,
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "نام و نام خانوادگی نامعتبر می باشد"
                        },
                    }}
                    errors={errors}
                />
                <TextField
                    name="email"
                    label="ایمیل"
                    register={register}
                    dir="ltr"
                    type="email"
                    isRequired
                    validationSchema={{
                        required: "ایمیل الزامی است",
                        pattern: {
                            value: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
                            message: "ایمیل نامعتیر می باشد"
                        },
                    }}
                    errors={errors}
                />
                <TextField
                    name="password"
                    label="پسورد"
                    register={register}
                    dir="ltr"
                    type="password"
                    isRequired
                    validationSchema={{
                        required: "رمز عبور الزامی است",
                    }}
                    errors={errors}
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-4 disabled:opacity-50 duration-300"
                    disabled={isLoading}
                >
                    تایید
                </Button>
            </form>
            <Link href="/signin" className="text-secondary-500 mt-6 text-center flex w-fit mx-auto">
                ورود
            </Link>
        </div>
    )
}
export default Signup
