import { getServerSession } from "next-auth";
import Button from "./Button";
import { redirect } from "next/navigation";
const Auth = async () => {
  const session = await getServerSession();

  if (session) redirect("/");
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Button />
    </div>
  );
};

export default Auth;
