import axios from "axios";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { URL } from "@/app/Utils";
import ProductSwiper from "@/app/components/ProductSwiper";

const ProductDetail = async (props) => {
  console.log("pros", props);
  const { prodId } = props.params;

  console.log(`${URL}/api/products/${prodId}?populate[images][populate]=*`);
  const response = await axios.get(
    `${URL}/api/products/${prodId}?populate[images][populate]=*`
  );

  const product = response.data.data;

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
              <li className="current">{product.attributes?.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          <ProductSwiper product={product} />

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <p>{product.attributes?.description}</p>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Product information</h3>
                <ul>
                  <li>
                    <strong>Price:</strong> £{product.attributes?.price}
                  </li>
                  <li>
                    <strong>Fabrics Available:</strong>
                    {product?.attributes?.images?.map((img, index) => (
                      <li key={index}>{img?.fabric}</li>
                    ))}
                  </li>
                  <li>
                    <strong>Colours available:</strong>
                    {product?.attributes?.images?.map((img, index) => (
                      <li key={index}>{img?.color}</li>
                    ))}
                  </li>
                </ul>
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
  console.log("ssss products");

  // Return the array of product ids to statically generate each page
  return products.map((product) => ({
    prodId: product.id.toString(),
  }));
}
