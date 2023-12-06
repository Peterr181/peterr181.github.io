import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation";
import { SocialIcon } from "react-social-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Żerdziński",
  description: "Personalne portfolio Piotr Żerdziński",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  text-gray-950 h-screen text-white relative `}
      >
        <div className="fixed  top-1/2 transform -translate-y-1/2  border-r-[0.35rem] border-t-[0.35rem] border-b-[0.35rem] border-[#1d4ed8] p-5 slideInFromLeftAnimate">
          <div className="flex flex-col gap-12">
            <SocialIcon url="https://github.com/Peterr181" />
            <SocialIcon url="https://www.youtube.com/channel/UCRF__zCXhBQw35VlDzvIcfw" />
            <SocialIcon url="https://www.linkedin.com/in/peter-%C5%BCerdzi%C5%84ski/" />
            <SocialIcon url="https://leetcode.com/n4cho181/" />
          </div>
        </div>
        <Header />

        {children}
      </body>
    </html>
  );
}
