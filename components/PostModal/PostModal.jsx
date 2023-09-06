"use client";
import React, { useEffect, useRef, useState } from "react";
import "./PostModal.scss";
import { CiLocationOn } from "react-icons/ci";
import { GrDown } from "react-icons/gr";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// import images/svg
import close from "@/public/img/close.svg";
import photoUpload from "@/public/img/photo-upload.svg";
import profile from "@/public/img/shahab.jpg";
import imoji from "@/public/img/imoji.svg";
import loading from "@/public/img/loader.svg";
import Image from "next/image.js";

const PostModal = ({ action }) => {
  // hooks
  const fileRef = useRef(null); // get input field
  const [fileInput, setFileInput] = useState(null); // set file input for click event
  const [images, setImages] = useState([]); // set images
  const [countChar, setCountChar] = useState(0); // count of characters
  const [expendCard, setExpendCard] = useState(false); // expend card & submit form
  const [showLoader, setShowLoader] = useState(false); // show loader

  const [postData, setPostData] = useState({
    username: "shahab.insta",
    name: "Md Shahab Uddin",
    profileImg:
      "https://res.cloudinary.com/dtpp4gleq/image/upload/v1676271269/Shahab_jymhye.jpg",
    post: "",
    location: "",
    photos: [],
  }); // post data

  useEffect(() => {
    setFileInput(fileRef.current); // set file input for click event
  }, [setFileInput]);

  // set images from file input field
  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // delete image handler for delete unwanted image
  const handleDeletePhoto = (img) => {
    const updatedList = images.filter((data) => data !== img);
    setImages(updatedList);

    if (updatedList.length === 0) {
      setExpendCard(false);
    }
  };

  // get value from input field
  const handlePostOnchange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // character counter in post
    if (e.target.name === "post") {
      setCountChar(e.target.value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowLoader(true); // show loader

    // map the images to an array of upload promises
    const uploadPromises = images.map((img, index) => {
      // init a new FormData object
      const data = new FormData();

      // add image to FormData object
      data.append("file", img);
      data.append("upload_preset", "insta_photo");
      data.append("cloud_name", CLOUD_NAME);

      // upload image to cloudinary and return the promise
      return axios.post(`${CLOUDINARY_URL}/image/upload`, data).then((res) => {
        // store image url in array
        return { id: res.data.public_id, url: res.data.secure_url };
      });
    });

    // wait for all upload promises to resolve
    Promise.all(uploadPromises).then((results) => {
      // set some post data
      const finalData = {
        ...postData,
        likes: 0,
        comments: 0,
        time: new Date().getTime(),
        photos: results,
      };

      axios.post(`http://localhost:5050/posts `, finalData).then((res) => {
        setPostData((prevState) => ({
          ...prevState,
          post: "",
          location: "",
          photos: [],
        }));

        setShowLoader(false); // hide loader

        setShow(false); // hide modal
      });
    });
  };

  return (
    <>
      <section id="modal">
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <button className="close" onClick={() => setShow(false)}>
            <Image src={close} alt="" />
          </button>
          {showLoader && (
            <div className="loader">
              <Image src={loading} alt="" />
            </div>
          )}
          <div
            className={`card ${
              expendCard && images.length > 0 ? "expend" : ""
            }`}
          >
            <div className="card-header">
              <h1>Create new post</h1>
              {expendCard ? (
                <button onClick={handleSubmit}>Share</button>
              ) : (
                images.length > 0 && (
                  <button onClick={() => setExpendCard(true)}>Next</button>
                )
              )}
            </div>
            <div
              className={`card-body ${
                expendCard && images.length > 0 ? "expend" : ""
              }`}
            >
              {!images || images.length === 0 ? (
                <div className="img-selector">
                  <div className="img-placeholder">
                    <Image src={photoUpload} alt="" />
                  </div>
                  <div className="selector">
                    <h2>Drag photos and videos here</h2>
                    <button onClick={() => fileInput.click()}>
                      Select from computer
                    </button>
                    <input
                      type="file"
                      name="photos"
                      ref={fileRef}
                      onChange={handleFileChange}
                      multiple
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="img-preveiw">
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
                      {images.map((image, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              src={URL.createObjectURL(image)}
                              alt=""
                              width={100}
                              height={100}
                            />
                            <button
                              className="close"
                              onClick={() => handleDeletePhoto(image)}
                            >
                              <Image src={close} alt="" />
                            </button>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  {expendCard && (
                    <div className="post-box">
                      <div className="auth-info">
                        <div className="img">
                          <Image src={profile} alt="" />
                        </div>
                        <div className="name">
                          <span>shahab.insta</span>
                        </div>
                      </div>

                      <div className="post-field">
                        <textarea
                          name="post"
                          placeholder="Write a caption..."
                          value={postData.post}
                          onChange={handlePostOnchange}
                        ></textarea>
                      </div>
                      <div className="text-counter">
                        <div className="imoji">
                          <Image src={imoji} alt="" />
                        </div>
                        <div className="counter">
                          <span>{countChar} / 2,200</span>
                        </div>
                      </div>
                      <div className="location">
                        <div className="title">
                          <input
                            type="text"
                            placeholder="Add Location"
                            name="location"
                            onChange={handlePostOnchange}
                          />
                        </div>
                        <div className="icon">
                          <i>
                            <CiLocationOn />
                          </i>
                        </div>
                      </div>
                      <div className="post-additional-method">
                        <div className="title">
                          <span>Accessibility</span>
                        </div>
                        <div className="icon">
                          <i>
                            <GrDown />
                          </i>
                        </div>
                      </div>
                      <div className="post-additional-method">
                        <div className="title">
                          <span>Advanced Setting</span>
                        </div>
                        <div className="icon">
                          <i>
                            <GrDown />
                          </i>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostModal;
