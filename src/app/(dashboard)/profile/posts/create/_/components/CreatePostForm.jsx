"use client"

import Button from "@/Components/Shared/Button"
import RHFSelect from "@/Components/Shared/RHFSelect"
import RHFTextField from "@/Components/Shared/RHFTextField"
import { useCategories } from "@/Hooks/useCategories"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import FileInput from "@/Components/Shared/FileInput"

function CreatePostForm() {

    const [coverImageUrl, setCoverImageUrl] = useState(null);

    const { categories, isLoading } = useCategories()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        mode: "onTouched",
    })

    return (
        <form className="flex flex-col gap-3 max-w-xl mx-auto bg-secondary-0 p-6 rounded-xl">
            <RHFTextField
                label="عنوان"
                name="title"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                label="متن کوتاه"
                name="briefText"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                label="متن"
                name="text"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                label="اسلاگ"
                name="slug"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                label="زمان مطالعه"
                name="readingTime"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFSelect
                label="دسته بندی"
                name="category"
                register={register}
                options={categories}
                isRequired
                errors={errors}
            />
            <Controller
                control={control}
                name="coverImage"
                rules={{ required: "کاور پست الزامی است" }}
                render={({ field: { onChange, value, ...rest } }) => {
                    return (
                        <FileInput
                            isRequired
                            type="file"
                            label="انتخاب کاور پست"
                            name="coverImage"
                            {...rest}
                            value={value?.fileName}
                            onChange={(event) => {
                                const file = event.target.files[0];
                                onChange(file);
                                setCoverImageUrl(URL.createObjectURL(file))
                                event.target.value = null;
                            }}
                        />
                    )
                }}
            />
            {
                coverImageUrl && <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                        fill
                        alt="cover-image"
                        src={coverImageUrl}
                        className="object-cover object-center"
                    />
                    <Button
                        variant="btnRed"
                        className="w-8 h-8 absolute end-4 top-4"
                        onClick={() => {
                            setCoverImageUrl(null);
                            setValue("coverImage", null)
                        }}
                    >
                        <XMarkIcon className="w-full h-full" />
                    </Button>
                </div>
            }
        </form>
    )
}
export default CreatePostForm
