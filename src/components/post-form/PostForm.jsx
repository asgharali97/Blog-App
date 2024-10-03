import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import authService from "../../appWrite/config";
import { useNavigate } from "react-router-dom";
import { Button, RTE, Select, Input } from "../index";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues} =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  console.log(userData.$id + " user Id ")

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await authService.uploadFile(data.image[0])
        : null;

      if (file) {
        authService.deleteFile(post.featuredImage);
      }
      const dbPost = await authService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await authService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await authService.createPost({
          ...data,
          userId:userData.$id
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransForm = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/[\s]/g, "-");
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
        if (name === "title") {
            setValue("slug", slugTransForm(value.title), { shouldValidate: true });
        }
    });

    return () => subscription.unsubscribe();
}, [watch, slugTransForm, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-3">
        <Input
        label='Title :'
        placeholder = 'Title'
        className = 'mb-4'
        {...register('title',{
          validate:true
        })}
        />
        <Input
        label='Slug :'
        placeholder = 'Slug'
        className = 'mb-4'
        {...register('slug',{
          validate:true
        })}
        onInput = {(e)=>{
          setValue('slug',
          slugTransForm(e.currentTarget.value),
          {shouldValidate:true})
        }}
        />
        <RTE label='Content :' name="content" control={control} defaultValue={getValues('content')} />
        </div>
        <div className="w-1/3 px-2">
        <Input
        label='Featured Image :'
        type='file'
        className = 'mb-4'
        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register('image',{
          validate:!post
        })}
        />

        {post && (
          <div className="w-full mb-4">
            <img 
             src={authService.getFilePreview(post.featuredImage)}
             alt={post.title}
             className="rounded-lg"
             />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
               {post ? "Update" : "Submit"}
        </Button>
        </div>
      </form>
    </>
  );
}
