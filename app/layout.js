import LeftSidebar from "@/components/leftSidebar/LeftSidebar.jsx";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "Next Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <LeftSidebar />
        {children}
      </body>
    </html>
  );
}
