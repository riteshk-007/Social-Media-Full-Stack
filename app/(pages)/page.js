"use client";
import { useEffect } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../Redux/Post.Slice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 ">
      <CreatePost />
      <div className="mt-10 mx-auto w-full flex flex-col justify-center items-center">
        {data?.posts?.map((post) =>
          post?.posts?.map((p) => <Post key={p?.id} post={p} user={post} />)
        )}
      </div>
    </div>
  );
};

export default Home;
