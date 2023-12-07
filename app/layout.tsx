import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation";
import { SocialIcon } from "react-social-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Żerdziński",
  description: "Personalne portfolio Piotr Żerdziński",
  "google-site-verification": "4to734AqMBzIMfrTUNyGG6pov2aIPDC_oVnkqZ023uU", 
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
