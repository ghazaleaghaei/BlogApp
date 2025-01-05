"use client"

import Button from "@/Components/Shared/Button"
import RHFSelect from "@/Components/Shared/RHFSelect"
import RHFTextField from "@/Components/Shared/RHFTextField"
import { useCategories } from "@/Hooks/useCategories"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import FileInput from "@/Components/Shared/FileInput"
import SubmitButton from "@/Components/Shared/SubmitButton"
import useCreatePost from "../hooks/useCreatePost"
import { useRouter } from "next/navigation"
import useEditPost from "../hooks/useEditPost"
import { imageUrlToFile } from "Functions/fileFormatter"

function CreatePostForm({ postToEdit = {} }) {

    //we use coverImageUrl for showing image in form
    //we must pass file(coverImage) to backend and inputElement not coverImageUrl

    const { _id: editId } = postToEdit;
    const isEditSession = Boolean(editId)

    const {
        title,
        text,
        slug,
        briefText,
        readingTime,
        category,
        coverImage,
        coverImageUrl: prevCoverImageUrl
    } = postToEdit

    let editValues = {};
    if (isEditSession) {
        editValues = {
            title,
            text,
            slug,
            briefText,
            readingTime,
            category: category._id,
            coverImage
        }
    }
    console.log(editValues)
    //coverImage is url, we must convert it to file to pass to backend
    useEffect(() => {
        if (prevCoverImageUrl) {
            async function fetchMyApi() {
                const file = await imageUrlToFile(prevCoverImageUrl)
                setValue("coverImage", file)
            }
            fetchMyApi()
        }
    }, [editId])

    const router = useRouter()

    const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);

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
        defaultValues: editValues
    })

    const { isCreating, createPost } = useCreatePost()
    const { isEditing, editPost } = useEditPost()

    const onSubmit = (data) => {
        console.log(data)

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        if (isEditSession) {
            editPost({ id: editId, data: formData }, {
                onSuccess: () => {
                    router.push("/profile/posts")
                }
            })
        } else {
            createPost(formData, {
                onSuccess: () => {
                    router.push("/profile/posts")
                }
            })
        }

    }

    return (
        <form
            className="flex flex-col gap-3 max-w-xl mx-auto bg-secondary-0 p-6 rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
        >
            <RHFTextField
                label="عنوان"
                name="title"
                errors={errors}
                register={register}
                isRequired
                validationSchema={{
                    required: "عنوان ضروری است",
                    minLength: {
                        value: 5,
                        message: "حداقل ۵ کاراکتر را وارد کنید"
                    }
                }}
            />
            <RHFTextField
                label="متن کوتاه"
                name="briefText"
                errors={errors}
                register={register}
                isRequired
                validationSchema={{
                    required: "توضیحات ضروری است",
                    minLength: {
                        value: 10,
                        message: "حداقل 10 کاراکتر را وارد کنید"
                    }
                }}
            />
            <RHFTextField
                label="متن"
                name="text"
                errors={errors}
                register={register}
                isRequired
                validationSchema={{
                    required: "توضیحات ضروری است",
                }}
            />
            <RHFTextField
                label="اسلاگ"
                name="slug"
                errors={errors}
                register={register}
                isRequired
                validationSchema={{
                    required: "اسلاگ ضروری است",
                }}
            />
            <RHFTextField
                label="زمان مطالعه"
                name="readingTime"
                errors={errors}
                register={register}
                isRequired
                validationSchema={{
                    required: "زمان مطالعه ضروری است",
                }}
            />
            <RHFSelect
                label="دسته بندی"
                name="category"
                register={register}
                options={categories}
                isRequired
                errors={errors}
                validationSchema={{
                    required: "یک دسته بندی را انتخاب کیند",
                }}
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
                            errors={errors}
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
            <SubmitButton
                variant="primary"
                type="submit"
                className="w-full disabled:opacity-50"
                disabled={isCreating || isEditing}
            >
                تایید
            </SubmitButton>
        </form>
    )
}
export default CreatePostForm
