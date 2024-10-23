"use client";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";
import { Modal, Button, Form } from "react-bootstrap"; // Import necessary components from React Bootstrap

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
    button: {
      marginRight: "10px",
      background: "#eb5d1e",
      border: 0,
    },
  };

  const [selectedColor, setSelectedColor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCartClick = () => {
    setShowModal(true); // Show the modal when Add To Cart is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
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
                className="post-content d-flex"
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
              <Button
                onClick={handleAddToCartClick} // Trigger modal on Add to Cart
                className="btn btn-primary btn-hover"
                style={styles.button}
              >
                Add To Cart
              </Button>
              <a
                href={whatsppLink}
                target="_blank"
                className="btn btn-primary btn-hover"
                style={styles.button}
              >
                Order Via Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Form */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Post Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your Post Code" />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter your Phone Number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;
