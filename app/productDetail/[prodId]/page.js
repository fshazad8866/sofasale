import axios from "axios";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { URL } from "@/app/Utils";
import ProductSwiper from "@/app/components/ProductSwiper";
import ProductDescription from "./ProductDesc";

const ProductDetail = async (props) => {
  const { prodId } = props.params;

  const response = await axios.get(
    `${URL}/api/products?filters[slug]=${prodId}&populate[images][populate]=*&populate[dimentionimage][populate]=*`
  );
  const product = response.data.data[0];

  const { data } = await axios.get(
    `${URL}/api/detail?populate[slider][populate]=*&populate[faqs][populate]=*`
  );

  let colors = new Set();
  let fabrics = new Set();

  product?.attributes?.images?.map((each) => {
    colors.add(`${each.colorhexacode}:::${each.color}`);
    fabrics.add(`${each.fabric}`);
  });
  colors = Array.from(colors);
  fabrics = Array.from(fabrics);
  console.log({ colors, fabrics });

  const whatsppLink = data?.data?.attributes?.whatsapp_url;

  return (
    <>
      <Header data={data?.data.attributes} />
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Product Details</h1>
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
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <ProductCard
                  colors={colors}
                  whatsppLink={whatsppLink}
                  fabrics={fabrics}
                  title={product?.attributes?.title}
                  price={`£${product?.attributes?.price}`}
                  description={`${product?.attributes?.description?.slice(
                    0,
                    250
                  )}`}
                />
              </div>
            </div>
          </div>

          <ProductDescription product={product} />
        </div>
      </section>

      <Footer data={data?.data.attributes} />
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

const ProductCard = ({
  title,
  price,
  description,
  fabrics,
  colors,
  whatsppLink,
}) => {
  const styles = {
    container: {
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
    },
    productTitle: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    productPrice: {
      color: "#eb5d1e",
      fontSize: "28px",
      fontWeight: "bold",
    },
    subText: {
      fontSize: "16px",
    },
    description: {
      margin: "10px 0",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "5px",
    },
    ratingStars: {
      color: "#f39c12",
      display: "inline-block",
    },
    reviews: {
      marginLeft: "10px",
    },
    orders: {
      marginLeft: "auto",
    },
    quantity: {
      marginRight: "10px",
    },
    sizeOptions: {
      marginLeft: "10px",
    },
    button: {
      marginRight: "10px",
      background: "#eb5d1e",
      border: 0,
    },
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.productTitle}>{title}</h4>
      <p style={styles.productPrice}>
        {price}
        <span style={styles.subText}></span>
      </p>

      <p>
        <strong>Description</strong>
      </p>
      <p style={styles.description}>{description}</p>

      {/* <div className="d-flex align-items-center mb-3">
        <label htmlFor="quantity" style={styles.quantity}>
          <strong>Fabrics:</strong>
        </label>
        <select id="quantity" className="form-select w-auto">
          {fabrics.map((each) => (
            <option key={each}>{each}</option>
          ))}
        </select>
      </div> */}

      <div className="d-flex align-items-center mb-3">
        <strong style={{ marginRight: "5%" }}>Color:</strong>

        <div
          class="post-content d-flex"
          style={{
            paddingTop: 0,
            flexDirection: "row",

            gap: "5px",
          }}
        >
          {colors?.map((each) => (
            <div
              title={each.split(":::")[1]}
              key={each}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: each.split(":::")[0],
                cursor: "pointer",
                border: "3px solid #eb5d1f",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="d-flex">
        <a
          href={whatsppLink}
          target="_blank"
          className="btn btn-primary"
          style={styles.button}
          // onClick={() => {}}
        >
          Order now
        </a>
        {/* <button className="btn btn-outline-primary">Add to cart</button> */}
      </div>
    </div>
  );
};
