"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { URL } from "../Utils";

const ProductSwiper = ({ product }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Function to handle the zoom toggle on click
  const handleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        Zoom={true}
        thumbs={{ swiper: null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.attributes?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`swiper-image-container ${isZoomed ? "zoomed" : ""}`}
              onClick={handleZoomClick}
            >
              <img
                style={{ width: "100%", height: "400px" }}
                src={`${URL}${image?.images?.data?.[0]?.attributes?.url}`}
                alt={product.attributes?.title}
                className="swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-image-container {
          overflow: hidden;
          cursor: zoom-in;
        }

        .swiper-image-container img {
          transition: transform 0.3s ease;
        }

        .swiper-image-container:hover img {
          transform: scale(1.1); /* Zoom on hover */
        }

        .swiper-image-container.zoomed {
          cursor: zoom-out;
        }

        .swiper-image-container.zoomed img {
          transform: scale(2); /* 100% zoom on click */
        }
      `}</style>
    </div>
  );
};

export default ProductSwiper;
