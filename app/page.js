import Image from "next/image";
import "./page.scss";

//images
import story1 from "@/public/img/story1.jpg";
import story2 from "@/public/img/story2.jpg";
import story3 from "@/public/img/story3.jpg";
import story4 from "@/public/img/story4.jpg";
import story5 from "@/public/img/story5.jpg";
import story6 from "@/public/img/story6.jpg";

// components
import PostModal from "@/components/PostModal/PostModal.jsx";
import RightSidebar from "@/components/rightSidebar/RightSidebar.jsx";
import Timeline from "./component/Timeline.jsx";

export default function Home() {
  return (
    <>
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
        <div className="post-timeline">
          <Timeline />
        </div>
      </div>
      <RightSidebar />
      <PostModal />
    </>
  );
}
