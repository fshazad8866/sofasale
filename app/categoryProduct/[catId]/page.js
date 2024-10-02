// app/categoryProduct/[catId]/page.js
"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link"; // Ensure to use Link from next/link
import { URL } from "@/app/Utils"; // Adjust the path according to your folder structure
import Header from "@/app/components/Header"; // Import your Header component

const CategoryProducts = ({ params }) => {
  const { catId } = params; // Get the dynamic route parameter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [catId]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${URL}/api/products?populate=*&filters[category][id][$eq]=${catId}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Header />
      <section id="blog-posts" className="blog-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Products in {catId}</h2>
          <p>These are products in the selected category</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {products.length > 0 ? (
              products.map((prod) => (
                <div className="col-lg-4" key={prod.id}>
                  <Link href={`/productDetail/${prod.id}`}>
                    <article className="position-relative h-100">
                      {console.log("proddd", prod.attributes.sofa)}
                      <div className="post-img position-relative overflow-hidden">
                        <img
                          src={`${URL}${prod?.attributes?.SofaImage?.data?.attributes?.url}`}
                          className="img-fluid"
                          alt={prod?.attributes?.title}
                        />
                      </div>

                      <div className="meta d-flex align-items-end">
                        <span className="post-date">
                          {prod?.attributes?.price}£
                        </span>
                      </div>

                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">
                          {prod?.attributes?.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
