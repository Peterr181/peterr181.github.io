import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation";
import { SocialIcon } from "react-social-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Żerdziński",
  description: "Personalne portfolio Piotr Żerdziński",
  verification: {
    google: "4to734AqMBzIMfrTUNyGG6pov2aIPDC_oVnkqZ023uU",
    yandex: "",
    me: "",
  },
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
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#002244]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0C2340]"></div>
        <div className="positionNavigation slideInFromLeftAnimate ">
          <div className="socialIcons">
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
