import Link from "next/link.js";
import "./RightSidebar.scss";
import Image from "next/image.js";

// images
import profileImg from "@/public/img/shahab.jpg";
import story5 from "@/public/img/story5.jpg";

export default function RightSidebar() {
  return (
    <>
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
    </>
  );
}
