import { getServerSession } from "next-auth";
import Button from "./Button";
import { redirect } from "next/navigation";
const Auth = async () => {
  const session = await getServerSession();

  if (session) redirect("/");
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-black">
      <Button />
    </div>
  );
};

export default Auth;
