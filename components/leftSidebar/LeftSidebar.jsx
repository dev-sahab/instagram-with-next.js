"use client";
import "./LeftSidebar.scss";

// images
import Image from "next/image.js";
import Link from "next/link.js";
import logo from "@/public/img/instagram.svg";
import home from "@/public/img/home.svg";
import search from "@/public/img/search.svg";
import explore from "@/public/img/explore.svg";
import reals from "@/public/img/reels.svg";
import create from "@/public/img/create_post.svg";
import moreMenu from "@/public/img/more.svg";
import message from "@/public/img/message.svg";
import notification from "@/public/img/notification.svg";
import profileImg from "@/public/img/shahab.jpg";

export default function LeftSidebar() {
  return (
    <>
      <aside>
        <div className="inner-aside">
          <div className="logo">
            <Image src={logo} alt="" />
          </div>

          <div className="menus">
            <ul>
              <li className="menu-list">
                <Link href="/" className="menu-item active">
                  <span className="icon">
                    <Image src={home} alt="" />
                  </span>
                  <span className="mn">Home</span>
                </Link>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon">
                    <Image src={search} alt="" />
                  </span>
                  <span className="mn">Search</span>
                </Link>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon">
                    <Image src={explore} alt="" />
                  </span>
                  <span className="mn">Explore</span>
                </Link>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon">
                    <Image src={reals} alt="" />
                  </span>
                  <span className="mn">Reals</span>
                </Link>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon">
                    <Image src={message} alt="" />
                  </span>
                  <span className="mn">Messages</span>
                </Link>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon">
                    <Image src={notification} alt="" />
                  </span>
                  <span className="mn">Notifications</span>
                </Link>
              </li>
              <li className="menu-list">
                <button
                  className="menu-item"
                  onClick={() => alert("create post")}
                >
                  <span className="icon">
                    <Image src={create} alt="" />
                  </span>
                  <span className="mn">Create</span>
                </button>
              </li>
              <li className="menu-list">
                <Link href="/" className="menu-item">
                  <span className="icon profile">
                    <Image src={profileImg} alt="" />
                  </span>
                  <span className="mn">Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="more-menus">
            <div className="menu-list">
              <Link href="/" className="menu-item">
                <span className="icon">
                  <Image src={moreMenu} alt="" />
                </span>
                <span className="mn">More</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
