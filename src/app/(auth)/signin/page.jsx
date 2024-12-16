"use client";

import Button from "@/Components/Shared/Button"
import TextField from "@/Components/Shared/TextField"
import { signinApi } from "@/services/authService";
import { useUser } from "app/Context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

// export const metadata = {
//     title: "ثبت نام",
// }

function Signin() {

    const { signin } = useUser()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onTouched"
    })

    const onSubmit = async (values) => {
        await signin(values)
    }

    return (
        <div>
            <h1>ورود</h1>
            <form
                className="flex flex-col gap-4 w-full mt-4"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <Button type="submit" variant="primary" className="w-full mt-4">
                    تایید
                </Button>
            </form>
            <Link href="/signup" className="text-secondary-500 mt-6 text-center flex w-fit mx-auto">
                ثبت نام
            </Link>
        </div>
    )
}
export default Signin
