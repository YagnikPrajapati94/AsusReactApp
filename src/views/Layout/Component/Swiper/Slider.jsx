import React from 'react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import '../../../../assets/css/slider.css'



const Slider = () => {

    return (
        <div>
              <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // loop:true
        autoplay={{
            delay:1200
        }}
        modules={[Autoplay,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img-fluid slider-img'src="https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/banners/NB-DT-FEB-25.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid slider-img' src="https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/banners/ZBS14_DT.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid slider-img' src="https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/banners/VBS15_DT.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid slider-img' src="https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/banners/VB16_DT.webp" />
        </SwiperSlide>
      </Swiper>
        </div>

    )
}


export default Slider
