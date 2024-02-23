"use client";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center dark:bg-black">
        <h1>Welcome to the Next.js + Prisma + NextAuth.js + Vercel Starter</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </>
  );
}
