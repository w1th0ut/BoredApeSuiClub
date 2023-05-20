import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Gellery.css";
import { Autoplay, Navigation } from "swiper";

import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import img11 from '../images/11.png'
import img12 from '../images/12.png'
import img13 from '../images/13.png'
import img14 from '../images/14.png'
import img15 from '../images/15.png'

const Gellery = () => {
    return (
    <>
    <h2 id="gellery" className="text-white text-4xl md:text-5xl font-bold pb-16 md:pb-24 text-center font-Poppins">Gallery</h2>
    <Swiper
       
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        className="mySwiper mx-6 md:max-w-[1024px] md:mx-auto pb-24 md:pb-32"
      >
        
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img3} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img4} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img5} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img6} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img7} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img8} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img9} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img10} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img11} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img12} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img13} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img14} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="max-w-xs md:max-w-md" src={img15} alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
    </>
    );
};

export default Gellery;