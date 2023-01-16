import React from "react";
import Navbar from "../Navbar/Navbar";
import "./achievement.css";
import Cert1 from "../../assets/Certificate-1.png";
import Cert2 from "../../assets/Cert2.png";
import Cert3 from "../../assets/Certificate-3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Achievement() {
  return (
    <>
      <Navbar />
      <section className="achievement container section">
        <h2 className="section__title">Achievement</h2>
        <span className="section__subtitle">Certifications</span>

        <Swiper
          className="achievement__container"
          slidesPerView={1}
          grabCursor={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="achievement__card">
            <img src={Cert1} alt="" className="achievement__img" />

            <h3 className="achievement__name">Full Stack Web Development</h3>
            <p className="achievement__description">{/*  */}</p>
          </SwiperSlide>

          <SwiperSlide className="achievement__card">
            <img src={Cert2} alt="" className="achievement__img" />

            <h3 className="achievement__name">Ethical Hacking from skillUp</h3>
            <p className="achievement__description">{/*  */}</p>
          </SwiperSlide>

          <SwiperSlide className="achievement__card">
            <img src={Cert3} alt="" className="achievement__img" />

            <h3 className="achievement__name">
              Graphic Designer from Internshala
            </h3>
            <p className="achievement__description">{/*  */}</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Achievement;
