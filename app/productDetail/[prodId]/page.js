import axios from "axios";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { URL } from "@/app/Utils";
import ProductSwiper from "@/app/components/ProductSwiper";

const ProductDetail = async (props) => {
  const { prodId } = props.params;

  const response = await axios.get(
    `${URL}/api/products?filters[slug]=${prodId}&populate[images][populate]=*`
  );
  const product = response.data.data[0];

  return (
    <>
      <Header />
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{product.attributes?.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{product?.attributes?.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {/* Swiper on the left side */}
            <div className="col-lg-6">
              <ProductSwiper product={product} />
            </div>

            {/* Product Information on the right side */}
            <div className="col-lg-6">
              <div
                style={{
                  // position: "relative",
                  // height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3>Product information</h3>
                  <ul>
                    <li>
                      <strong>Price:</strong> £{product?.attributes?.price}
                    </li>
                    <li>
                      <strong>Fabrics Available:</strong>
                      <ul>
                        {product?.attributes?.images?.map((img, index) => (
                          <li key={index}>{img?.fabric}</li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <strong>Colours available:</strong>
                      <ul>
                        {product?.attributes?.images?.map((img, index) => (
                          <li key={index}>{img?.color}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description below the swiper and product info */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="portfolio-description">
                <h3>Description</h3>
                <p>{product?.attributes?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;

// Static params for generating product pages
export async function generateStaticParams() {
  const response = await axios.get(`${URL}/api/products`);
  const products = response.data.data;

  return products.map((product) => {
    return {
      prodId: product.attributes.slug,
    };
  });
}
