import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderImages } from '../components/coursesData/Data';
export const SarfrazSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          SliderImages.map((image, index)=> (
              <div key={index}>
                  <img src={image.image} alt="Slider 1" style={{ width: '100%', height: 'auto' }} />
              </div>
          ))
        }
      </Slider>
    </div>
  );
};