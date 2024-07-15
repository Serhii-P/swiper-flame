
import { useEffect, useRef } from "react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.preload = "auto";
    }
  }, []);

  const handleSlideChange = (swiper) => {
    const video = videoRef.current;
    if (video) {
      const newTime =
        (video.duration / (swiper.slides.length - 1)) * swiper.realIndex;
      gsap.to(video, {
        duration: 1.6,
        currentTime: newTime,
        ease: "power2.out",
      });
    }
  };

  const handleSlideChangeTransitionStart = () => {
    const video = videoRef.current;
    if (video) {
      video.classList.add("change");
    }
  };

  const handleSlideChangeTransitionEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.classList.remove("change");
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={50}
        mousewheel={true}
        speed={1600}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiper.on("slideChange", () => handleSlideChange(swiper));
          swiper.on(
            "slideChangeTransitionStart",
            handleSlideChangeTransitionStart
          );
          swiper.on("slideChangeTransitionEnd", handleSlideChangeTransitionEnd);
        }}
      >
        <SwiperSlide>
          <div className="slide__content">
            <h2>Abstract</h2>
            <p>Joi the future</p>
            <button>Join</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <h2>Design</h2>
            <p>Joi the future</p>
            <button>Join</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <h2>Future</h2>
            <p>Joi the future</p>
            <button>Join</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <h2>Forever</h2>
            <p>Joi the future</p>
            <button>Join</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <video
        preload="auto"
        src="/background.mp4"
        className="video-background"
        ref={videoRef}
        muted
      ></video>
    </>
  );
};


export default HomePage
