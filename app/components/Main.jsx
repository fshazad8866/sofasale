import React from "react";
import Swiper from "swiper";
import Category from "./Category";
import BestSelling from "./BestSelling";
import CustomerImage from "./CustomerImage";
import Crousel from "./Crousel";
import Contact from "./Contact";
import FAQ from "./FAQ";

const Main = () => {
  return (
    <main class="main">
      <Crousel />

      <Category />
      <BestSelling />

      <CustomerImage />

      <FAQ />

      <Contact />
    </main>
  );
};

export default Main;
