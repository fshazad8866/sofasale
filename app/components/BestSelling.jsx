import axios from "axios";
import { URL } from "../Utils";
import Link from "next/link";

const BestSelling = async () => {
  const BestSelling = await axios.get(
    `${URL}/api/products?filters[BestSelling][$eq]=true&populate=*`
  );

  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Best Selling</h2>
        <p>These are the most sold products</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {BestSelling.data.data.length > 0 ? (
            BestSelling.data.data.map((prod) => (
              <div className="col-lg-4" key={prod.id}>
                {console.log(
                  "allprod",
                  prod?.attributes?.SofaImage?.data?.attributes?.url
                )}
                <a href="dylansofa.html">
                  <Link href={`/productDetail/${prod.id}`}>
                    <article className="position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        <img
                          src={`${URL}${prod?.attributes?.SofaImage?.data?.attributes?.url}`}
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="meta d-flex align-items-end">
                        <span className="post-date">
                          £{prod.attributes.price}
                        </span>
                      </div>

                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">{prod.attributes.title}</h3>
                      </div>
                    </article>
                  </Link>
                </a>
              </div>
            ))
          ) : (
            <p>Loading products...</p> // Loading state while fetching data
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
