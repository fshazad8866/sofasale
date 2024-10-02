"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { URL } from "../Utils";
const ProductSwiper = ({ product }) => {
  console.log("produccc", product);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.attributes?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${URL}${image?.images?.data?.[0]?.attributes?.url}`}
              alt={product.attributes?.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
