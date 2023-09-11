"use client";
import "./PostCard.scss";
import Image from "next/image.js";
import timeAgo from "@/utils/timeAgo.js";

// Import Swiper modules styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images
import message from "@/public/img/message.svg";
import notification from "@/public/img/notification.svg";
import dot from "@/public/img/dots_dark.svg";
import liked from "@/public/img/liked.svg";
import comment from "@/public/img/comment.svg";
import save from "@/public/img/save.svg";
import imoji from "@/public/img/imoji.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "@/app/component/timelineApiSlice.js";

export default function PostCard({ user, postData }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handleUseToggle = () => {
    setToggle(!toggle);
  };

  const dropDownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // delete post
  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <article>
        <div className="article-inner">
          <div className="auth-sec">
            <div className="auth-info">
              <div className="auth-img">
                <div className="img">
                  <Image
                    src={user?.profileImg}
                    alt={user?.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="auth-name">
                <div className="name">
                  <span className="nm">{user?.username}</span>
                  <span className="dot">•</span>
                  <span className="time">{timeAgo(postData.createdAt)}</span>
                </div>
                {postData?.location && (
                  <div className="desc">
                    <span>{postData.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="action dropdown" ref={dropDownRef}>
              <button onClick={handleUseToggle}>
                <Image src={dot} alt="" />
              </button>
              <div className={`dropdown-menu ${toggle && "show"}`}>
                <button className="dropdown-item">Edit</button>
                <button
                  className="dropdown-item"
                  onClick={() => handleDeletePost(postData._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="image-post">
              <div className="img-wrapper">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Keyboard, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {postData.photos.map((photo, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={photo.url}
                          alt={photo.id}
                          width={1000}
                          height={500}
                          loading="eager"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="like-sec">
              <ul>
                <li>
                  <button>
                    <Image src={notification} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <Image src={comment} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <Image src={message} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <Image src={save} alt="" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="like-count">
              <span>7 likes</span>
            </div>
            <div className="post-content">
              <div className="content-wrapper">
                <div className="auth-username">
                  <span>{user?.username}</span>
                </div>
                <div className="content">
                  <p>{postData.post}</p>
                </div>
              </div>
              <div className="comment-count">
                <span>View all 103 comments</span>
              </div>
              <div className="comment-box">
                <div className="comment-form">
                  <form>
                    <textarea placeholder="Add a comment..."></textarea>
                  </form>
                </div>
                <div className="icon">
                  <button>
                    <Image src={imoji} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
