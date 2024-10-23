"use client";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";

const ProductCard = ({
  title,
  price,
  description,
  fabrics,
  colors,
  whatsppLink,
  product,
}) => {
  const styles = {
    container: {
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      height: "100%",
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
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <ProductSwiper product={product} selectedColor={selectedColor} />
        </div>
        <div className="col-lg-6">
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
                    onClick={() => handleColorClick(each)}
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
              >
                Order now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
