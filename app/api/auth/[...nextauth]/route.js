import prisma from "@/DB/db.config";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name, image } = user;
      try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name,
              email,
              avatar: image,
            },
          });
        }
        return user;
      } catch (error) {
        console.error("Sign in error:", error);
        return null;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
