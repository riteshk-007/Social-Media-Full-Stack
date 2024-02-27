"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      formData.append("upload_preset", "next-cloudinary");
      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/riteshk/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error(`HTTP error! status: ${uploadResponse.status}`);
      }

      const uploadedImageData = await uploadResponse.json();
      const imageUrl = uploadedImageData.secure_url;
      console.log(imageUrl);

      console.log("Text:", data.text);

      setImage(null);
      setValue("text", "");
      setFile(null);
    } catch (error) {
      console.error("An error occurred while uploading the image:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteClick = () => {
    setImage(null);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full p-4 mt-6 border bg-white shadow-md rounded-md"
    >
      <div className=" w-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src={session?.user?.image || "/./image.png"}
              alt="user"
              className="rounded-full shadow-md"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="font-bold text-lg">{session?.user?.name}</h1>
          </div>
        </div>
        <Button variant="outline" onClick={handleOpen}>
          Create Post
        </Button>
      </div>
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">Create a new post</h2>
            <AiOutlineClose
              className="cursor-pointer "
              size={24}
              onClick={handleClose}
            />
          </div>
          <div className="relative mt-4">
            <input
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            {image ? (
              <div className="relative">
                {image && (
                  <Image
                    width={200}
                    height={200}
                    src={image}
                    alt="Selected"
                    className="mt-4"
                  />
                )}
                <div
                  className="absolute right-0 top-0 p-1 bg-white rounded-full cursor-pointer hover:text-red-500"
                  onClick={handleDeleteClick}
                >
                  <AiOutlineDelete size={24} />
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-400 rounded-md p-4 text-center text-gray-400">
                Click or drag and drop to upload an image
              </div>
            )}
          </div>
          <Textarea
            {...register("text", { required: true })}
            className="mt-4 w-full p-2 rounded-md"
            placeholder="What's on your mind?"
          />
          <Button
            variant="default"
            className="my-2"
            disabled={errors.text}
            type="submit"
          >
            Post
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreatePost;
