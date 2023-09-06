import Image from "next/image";
import Link from "next/link.js";
import "./page.scss";

//images
import logo from "@/img/instagram.svg";
import home from "@/img/home.svg";
import search from "@/img/search.svg";
import explore from "@/img/explore.svg";
import reals from "@/img/reels.svg";
import message from "@/img/message.svg";
import notification from "@/img/notification.svg";
import create from "@/img/create_post.svg";
import profileImg from "@/img/shahab.jpg";
import moreMenu from "@/img/more.svg";
import story1 from "@/img/story1.jpg";
import story2 from "@/img/story2.jpg";
import story3 from "@/img/story3.jpg";
import story4 from "@/img/story4.jpg";
import story5 from "@/img/story5.jpg";
import story6 from "@/img/story6.jpg";
import ali from "@/img/ali.jpg";
import dot from "@/img/dots_dark.svg";
import ali1 from "@/img/ali_post1.jpg";
import liked from "@/img/liked.svg";
import comment from "@/img/comment.svg";
import save from "@/img/save.svg";
import imoji from "@/img/imoji.svg";

export default function Home() {
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
                <button className="menu-item">
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

      <div className="main">
        <div className="main-container">
          <div className="content-wrapper">
            <div className="story-wrapper">
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story5} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story1} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story2} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story3} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story4} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
              <div className="stroy-box">
                <button>
                  <div className="img">
                    <Image src={story6} alt="" />
                  </div>
                  <div className="auth-name">
                    <span>anahita_h...</span>
                  </div>
                </button>
              </div>
            </div>

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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nemo, debitis.
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
          </div>

          <div className="right-sidebar">
            <div className="auth-info">
              <div className="auth-img">
                <Image src={profileImg} alt="" />
              </div>
              <div className="auth-desc">
                <div className="user-name">
                  <Link href="#">shahab.insta</Link>
                </div>
                <div className="name">
                  <span>Md Shahab Uddin</span>
                </div>
              </div>
              <div className="switch-acc">
                <button>Switch</button>
              </div>
            </div>

            <div className="suggestion">
              <div className="header">
                <span>Suggestions for you</span>
                <button>See All</button>
              </div>
              <div className="list-wrapper">
                <ul>
                  <li>
                    <div className="user-img">
                      <Image src={story5} alt="" />
                    </div>
                    <div className="user-desc">
                      <span className="username">anahita</span>
                      <span className="quote">Suggested for you</span>
                    </div>
                    <div className="follow-btn">
                      <button>Follow</button>
                    </div>
                  </li>
                  <li>
                    <div className="user-img">
                      <Image src={story5} alt="" />
                    </div>
                    <div className="user-desc">
                      <span className="username">anahita</span>
                      <span className="quote">Suggested for you</span>
                    </div>
                    <div className="follow-btn">
                      <button>Follow</button>
                    </div>
                  </li>
                  <li>
                    <div className="user-img">
                      <Image src={story5} alt="" />
                    </div>
                    <div className="user-desc">
                      <span className="username">anahita</span>
                      <span className="quote">Suggested for you</span>
                    </div>
                    <div className="follow-btn">
                      <button>Follow</button>
                    </div>
                  </li>
                  <li>
                    <div className="user-img">
                      <Image src={story5} alt="" />
                    </div>
                    <div className="user-desc">
                      <span className="username">anahita</span>
                      <span className="quote">Suggested for you</span>
                    </div>
                    <div className="follow-btn">
                      <button>Follow</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer">
              <div className="top">
                <ul className="nav">
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Help</Link>
                  </li>
                  <li>
                    <Link href="/">Press</Link>
                  </li>
                  <li>
                    <Link href="/">API</Link>
                  </li>
                  <li>
                    <Link href="/">Jobs</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms</Link>
                  </li>
                  <li>
                    <Link href="/">Locations</Link>
                  </li>
                  <li>
                    <Link href="/">Language</Link>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <p className="copyright">© 2023 Instagram from Meta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
