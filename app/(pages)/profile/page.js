import FollowFollowing from "@/app/components/FollowFollowing";
import LoginUserProfile from "@/app/components/LoginUserProfile";

const Profile = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2">
      <LoginUserProfile />
      <FollowFollowing />
    </div>
  );
};

export default Profile;
