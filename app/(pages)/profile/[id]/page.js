"use client";
import FollowFollowing from "@/app/components/FollowFollowing";
import LoginUserProfile from "@/app/components/LoginUserProfile";
import Post from "@/app/components/Post";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UserProfile = () => {
  const [follow, setFollow] = useState(false);
  return (
    <div className="w-full flex-col items-center justify-center p-2">
      <LoginUserProfile />
      <FollowFollowing />
      <div className="w-full mx-auto my-2">
        <Button className="w-full" onClick={() => setFollow(!follow)}>
          {follow ? "Unfollow" : "Follow"}
        </Button>
      </div>
      {follow && (
        <Post
          img={
            "https://images.unsplash.com/photo-1708257106582-3734df4532e7?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      )}
    </div>
  );
};

export default UserProfile;
