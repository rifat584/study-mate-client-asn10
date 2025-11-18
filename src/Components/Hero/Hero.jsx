import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import slideImg1 from "../../assets/slide-1.jpeg";
import slideImg2 from "../../assets/slide-2.jpg";
import slideImg3 from "../../assets/slide.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="border border-red-500">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                `url(${slideImg1})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Find Your Perfect Study Partner
                </h1>
                <p className="mb-5">
                  Match with learners who study the same subject as you.
                </p>
                <Link to={'/find-partners'} className="btn btn-primary">Start Matching</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                `url(${slideImg2})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Study Smarter, Not Harder
                </h1>
                <p className="mb-5">
                  Set your schedule, choose your mode — online or offline.
                </p>
                <Link to={'/find-partners'} className="btn btn-primary">Browse Partners</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                `url(${slideImg3})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Learn Together. Grow Together.
                </h1>
                <p className="mb-5">
                 Build confidence and stay consistent with the right partner.
                </p>
                <Link to={'/auth/register'} className="btn btn-primary">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
