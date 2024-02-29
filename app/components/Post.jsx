"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createComment } from "../Redux/Comment.Slice";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const Post = ({ post, user }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
  };
  const handleCommentSubmit = (event) => {
    if (comment === "") return;
    if (event.key === "Enter") {
      dispatch(
        createComment({
          content: comment,
          postId: post?.id,
          userEmail: session?.user?.email,
        })
      );
      setCommentCount(commentCount + 1);
      setComment("");
    }
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };
  useEffect(() => {
    setCommentCount(post?.comments?.length);
  }, [post?.comments]);

  const handleCommentCountClick = () => {
    setShowComments(!showComments);
  };
  return (
    <div className="w-full lg:w-2/3 mx-auto py-3 my-5 px-2 border shadow-md rounded-md flex-col">
      <div className="w-full flex items-center justify-start">
        <div className=" w-auto mx-2">
          <Image
            src={user?.avatar || "/./image.png"}
            alt="user"
            className="rounded-full shadow-md"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full flex items-start justify-center mx-2 flex-col">
          <h1 className="font-bold text-sm">{user?.name}</h1>
          <p className="text-gray-500 text-xs">
            {new Date(post?.date).toLocaleDateString()}{" "}
            {new Date(post?.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="w-full p-1 my-2">
        <p className="text-xs font-semibold text-wrap">
          {post?.content || "No content"}
        </p>
      </div>
      <div className="w-full flex items-center justify-center my-1">
        <Image
          src={post?.image || "/./image.png"}
          alt="user"
          className="rounded-md"
          width={550}
          height={500}
          onDoubleClick={handleLikeClick}
        />
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="w-11/12 text-xs flex justify-between items-center mb-2 cursor-pointer">
          {likeCount > 0 && <span>{likeCount} likes</span>}
          {commentCount > 0 && (
            <span onClick={handleCommentCountClick}>
              {commentCount} comments
            </span>
          )}
        </div>
        <div className="flex justify-around w-full mb-2">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLikeClick}
          >
            {liked ? (
              <AiFillHeart size={20} className="text-rose-400" />
            ) : (
              <AiOutlineHeart size={20} />
            )}
            <span className="hidden md:block">Like</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleCommentClick}
          >
            <AiOutlineComment size={20} />
            <span className="hidden md:block">Comment</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleBookmarkClick}
          >
            {bookmarked ? (
              <IoBookmark size={20} />
            ) : (
              <IoBookmarkOutline size={20} />
            )}
            <span className="hidden md:block">Save</span>
          </div>
        </div>
        {showCommentBox && (
          <div className="w-full">
            <input
              autoFocus
              type="text"
              placeholder="Add a comment..."
              className="w-full p-2 border rounded-md"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyUp={handleCommentSubmit}
            />
          </div>
        )}
        {showComments &&
          post?.comments?.map((comment) => (
            <div
              key={comment.id}
              className="w-full flex  flex-col md:flex-row items-center justify-start my-2  p-1 bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 ease-in-out rounded-md shadow-md"
            >
              <div className="w-full flex justify-center space-x-2 items-center mb-2">
                <h1 className="font-bold text-xs text-gray-600">
                  {comment?.userEmail}
                </h1>
                <p className="text-gray-500 text-[10px]">
                  {new Date(comment?.date).toLocaleDateString()}{" "}
                </p>
              </div>
              <div className="w-full border p-1 rounded-md px-2">
                <p className="text-xs font-semibold text-wrap">
                  {comment?.content || "No content"}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
