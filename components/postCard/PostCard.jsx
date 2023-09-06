import Image from "next/image.js";
import "./PostCard.scss";

// images
import message from "@/public/img/message.svg";
import notification from "@/public/img/notification.svg";
import ali from "@/public/img/ali.jpg";
import dot from "@/public/img/dots_dark.svg";
import ali1 from "@/public/img/ali_post1.jpg";
import liked from "@/public/img/liked.svg";
import comment from "@/public/img/comment.svg";
import save from "@/public/img/save.svg";
import imoji from "@/public/img/imoji.svg";

export default function PostCard() {
  return (
    <>
      <div className="post-wrapper">
        <div className="post-inner">
          {/* This is a static Post */}
          <article>
            <div className="article-inner">
              <div className="auth-sec">
                <div className="auth-info">
                  <div className="auth-img">
                    <div className="img">
                      <Image src={ali} alt="" />
                    </div>
                  </div>
                  <div className="auth-name">
                    <div className="name">
                      <span className="nm">shuvoalways</span>
                      <span className="dot">•</span>
                      <span className="time">22h</span>
                    </div>
                    <div className="desc">
                      <span>Place || Original audio</span>
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button>
                    <Image src={dot} alt="" />
                  </button>
                </div>
              </div>
              <div className="post">
                <div className="image-post">
                  <div className="img-wrapper">
                    <Image src={ali1} alt="Ali" />
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
                      <span>shuvoalways</span>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo, debitis.
                      </p>
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
        </div>
      </div>
    </>
  );
}
