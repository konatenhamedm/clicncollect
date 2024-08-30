// components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Slider = () => {
  const slides = [
    { id: 1, image: '/images/slide1.jpg', title: 'Slide 1' },
    { id: 2, image: '/images/slide2.jpg', title: 'Slide 2' },
    { id: 3, image: '/images/slide3.jpg', title: 'Slide 3' },
    { id: 4, image: '/images/slide4.jpg', title: 'Slide 4' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full h-96"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
