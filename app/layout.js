"use client";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar.jsx";
import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store.js";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "Next Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Provider store={store}>
          <LeftSidebar />
          <div className="main">
            <div className="main-container">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
