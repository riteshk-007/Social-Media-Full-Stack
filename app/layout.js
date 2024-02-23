import { AuthProvider } from "./(pages)/Provider";
import "./globals.css";
import { ReduxProvider } from "./Redux/Provider";

import { Lexend } from "next/font/google";

const font = Lexend({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300"],
});

export const metadata = {
  title: "Social Media App",
  description: "A social media app built with Next.js and Prisma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
