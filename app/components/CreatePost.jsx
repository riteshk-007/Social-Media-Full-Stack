"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { Textarea } from "@/components/ui/textarea";

const CreatePost = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isPostDisabled, setIsPostDisabled] = useState(true);

  useEffect(() => {
    setIsPostDisabled(!text);
  }, [image, text]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePostClick = () => {
    console.log("Image:", image);
    console.log("Text:", text);

    setImage(null);
    setText("");
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
    <div className=" w-full p-4 mt-6 border bg-white shadow-md rounded-md">
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
            className="mt-4 w-full p-2 rounded-md"
            placeholder="What's on your mind?"
            value={text}
            onChange={handleTextChange}
          />
          <Button
            variant="default"
            className="my-2"
            disabled={isPostDisabled}
            onClick={handlePostClick}
          >
            Post
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
