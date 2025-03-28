import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Common/NavBar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Doctor Pro",
  description: "Automobile Fix Services",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en" data-theme="mytheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full antialiased grid place-content-around`}
      >
        <div className="w-[360px] md:w-[820px] lg:w-[1200px]">
          <Toaster position="top-center" reverseOrder={false}/>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
