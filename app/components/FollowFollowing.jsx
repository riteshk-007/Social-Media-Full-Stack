"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const FollowFollowing = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [followerUsers, setFollowerUsers] = useState(
    Array(500).fill("Follower User")
  );
  const [followingUsers, setFollowingUsers] = useState(
    Array(10).fill("Following User")
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full border rounded-lg flex items-center justify-center p-5 mt-10">
      <div
        className="w-1/2 text-center cursor-pointer font-semibold h-full border-r pr-5"
        onClick={() => handleTabChange("Follower")}
      >
        Follower: {followerUsers.length}
      </div>
      <div
        className="w-1/2 text-center cursor-pointer font-semibold h-full border-l pl-5"
        onClick={() => handleTabChange("Following")}
      >
        Following: {followingUsers.length}
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-5 w-full md:w-1/2 lg:w-1/3 shadow-lg overflow-auto max-h-96 scrollbar-hide">
            <span
              className="absolute top-2 right-2 cursor-pointer border rounded-full p-1 bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200"
              onClick={closeModal}
            >
              <MdClose />
            </span>
            {activeTab === "Follower"
              ? followerUsers.map((user, index) => (
                  <div
                    className="w-full mt-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-all duration-300 ease-in-out border-r border-l"
                    key={index}
                  >
                    {user}
                  </div>
                ))
              : followingUsers.map((user, index) => (
                  <div
                    className="w-full mt-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-all duration-300 ease-in-out border-r border-l"
                    key={index}
                  >
                    {user}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowFollowing;
