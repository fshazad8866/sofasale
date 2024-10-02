"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Crousel = () => {
  const Swiperdata = [
    {
      Title: "Unwind in Style – Sofas Crafted for Her Comfort",
      Description: ` Tailored designs blend luxury and coziness effortlessly,
                offering the perfect space to relax and recharge. Every detail,
                from the soft cushions to the refined stitching, is thoughtfully
                crafted to ensure both relaxation and elegance are within reach.`,
      Img: "https://sofaclub.co.uk/cdn/shop/files/1_4d8ac017-cd34-4da0-a605-125258501529.jpg?v=1725271854",
    },
    {
      Title: "Elegance Meets Comfort – Sofas Designed with Her in Mind.",
      Description: `These timeless designs feature a touch of modern flair, bringing
              sophistication and comfort to her home. Each piece elevates the
              space with a perfect balance of style and function, making it as
              practical as it is beautiful.`,
      Img: "https://sofaclub.co.uk/cdn/shop/files/2_7a02caa0-1f3b-4097-abdc-7c9cbc0c159e.jpg?v=1725272673",
    },
    {
      Title: "Relax, Rejuvenate, Repeat – Sofas Perfect for Her Space.",
      Description: `   With plush cushions and sleek designs, these sofas are built for
              all-day comfort. Created to complement her lifestyle, they
              transition seamlessly from work to leisure, providing the perfect
              spot for unwinding or staying productive.`,
      Img: "https://sofaclub.co.uk/cdn/shop/files/3_1b5ace28-ac5b-45e7-9b0c-2ab0951495bf.jpg?v=1725273011",
    },
  ];
  return (
    <section id="hero" class="hero section light-background">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Swiperdata.map((data) => (
          <SwiperSlide key={data.Title}>
            <div style={{ height: "450px" }} className="hero-img">
              <img src={data.Img} alt="" />
              <div class="carousel-container">
                <h2>{data.Title}</h2>
                <p>{data.Description}</p>
                <a href="#featured-services" class="btn-get-started">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div class="featured container">
        <div class="row gy-4">
          <div class="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="featured-item position-relative">
              <h4>
                <a href="" class="stretched-link">
                  Order today, delivered tomorrow.
                </a>
              </h4>
              <p>Transform your living room in 24 hours.</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="featured-item position-relative">
              <h4>
                <a href="" class="stretched-link">
                  Money Back Guarantee.
                </a>
              </h4>
              <p>Free returns on all orders.</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="featured-item position-relative">
              <h4>
                <a href="" class="stretched-link">
                  Recycle Your Sofa.
                </a>
              </h4>
              <p>We will take away your old sofa on delivery date.</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="featured-item position-relative">
              <h4>
                <a href="" class="stretched-link">
                  Spread The Cost.
                </a>
              </h4>
              <p>Flexible finance options available, including 0%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crousel;
