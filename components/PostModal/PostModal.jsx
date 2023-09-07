"use client";
import "./PostModal.scss";
import { useRef, useState } from "react";
import Image from "next/image.js";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { GrDown } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, setShowModal } from "@/app/component/timelineSlice.js";
import { createPost } from "@/app/component/timelineApiSlice.js";

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

const PostModal = () => {
  const dispatch = useDispatch();
  // post state select for modal show/hide
  const { showModal } = useSelector(selectPost);

  // modal close handler
  const handleModalShow = () => {
    dispatch(setShowModal(false));
  };

  // data management hooks
  const fileRef = useRef(null); // get input field
  const [expendCard, setExpendCard] = useState(false); // expend card & submit form
  const [showLoader, setShowLoader] = useState(false); // show loader
  const [input, setInput] = useState({
    location: "",
    post: "",
    photos: [],
    characterCount: 0,
  });

  const handleSelectPhoto = () => {
    fileRef.current.click();
  };

  // set images from file input field
  const handleFileChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      photos: Array.from(e.target.files),
    }));
  };

  // delete image handler for delete unwanted image
  const handleDeletePhoto = (img) => {
    const updatedList = input.photos.filter((data) => data !== img);
    setInput((prevState) => ({
      ...prevState,
      photos: updatedList,
    }));

    if (updatedList.length === 0) {
      setExpendCard(false);
    }
  };

  // get value from input fields
  const handlePostOnchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // character counter in post
    if (e.target.name === "post") {
      setInput((prevState) => ({
        ...prevState,
        characterCount: e.target.value.length,
      }));
    }
  };

  // submit form data
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setShowLoader(true); // show loader

      // map the images to an array of upload promises
      const uploadPromises = input.photos.map(async (img) => {
        // init a new FormData object
        const data = new FormData();

        // add image to FormData object
        data.append("file", img);
        data.append("upload_preset", "insta_photo");
        data.append("cloud_name", "diguvpgto");

        // upload image to cloudinary and return the promise
        return await axios
          .post(`https://api.cloudinary.com/v1_1/diguvpgto/image/upload`, data)
          .then((res) => {
            // store image url in array
            return { id: res.data.public_id, url: res.data.secure_url };
          });
      });

      // wait for all upload promises to resolve
      Promise.all(uploadPromises)
        .then((results) => {
          // save data to mongoDB
          dispatch(
            createPost({
              photos: input.photos,
              location: input.location,
              post: input.post,
              photos: results,
            })
          );

          // set empty value after successfuly data save
          setInput({
            location: "",
            post: "",
            photos: [],
            characterCount: 0,
          });

          setShowLoader(false); // hide loader
          dispatch(setShowModal(false)); // hide modal
        })
        .catch((err) => {
          console.log(err.message);
          setShowLoader(false); // hide loader
        });
    } catch (error) {
      console.log(error.message);
      setShowLoader(false); // hide loader
    }
  };

  return (
    showModal && (
      <>
        <section id="modal">
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <button className="close" onClick={handleModalShow}>
              <Image src={close} alt="" />
            </button>
            {showLoader && (
              <div className="loader">
                <Image src={loading} alt="" />
              </div>
            )}
            <div
              className={`card ${
                expendCard && input.photos.length > 0 ? "expend" : ""
              }`}
            >
              <div className="card-header">
                <h1>Create new post</h1>
                {expendCard ? (
                  <button onClick={handleSubmit}>Share</button>
                ) : (
                  input.photos.length > 0 && (
                    <button onClick={() => setExpendCard(true)}>Next</button>
                  )
                )}
              </div>
              <div
                className={`card-body ${
                  expendCard && input.photos.length > 0 ? "expend" : ""
                }`}
              >
                {!input.photos || input.photos.length === 0 ? (
                  <div className="img-selector">
                    <div className="img-placeholder">
                      <Image src={photoUpload} alt="" />
                    </div>
                    <div className="selector">
                      <h2>Drag photos and videos here</h2>
                      <button onClick={handleSelectPhoto}>
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
                        {input.photos.map((image, index) => {
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
                            value={input.post}
                            onChange={handlePostOnchange}
                          ></textarea>
                        </div>
                        <div className="text-counter">
                          <div className="imoji">
                            <Image src={imoji} alt="" />
                          </div>
                          <div className="counter">
                            <span>{input.characterCount} / 2,200</span>
                          </div>
                        </div>
                        <div className="location">
                          <div className="title">
                            <input
                              type="text"
                              placeholder="Add Location"
                              name="location"
                              value={input.location}
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
    )
  );
};

export default PostModal;
