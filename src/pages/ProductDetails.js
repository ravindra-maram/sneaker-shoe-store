import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useThemeHook } from "../Globals/ThemeProvider";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./ProductDetails.css";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { products } from "../data";

const ProductDetails = (props) => {
  const [productData, setProductData] = useState({});
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(props.productId));
    console.log(product);
    setProductData(product);
  }, [props.productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
          <Lightbox
            images={[
              {
                src: productData.image,
                title: productData.title,
                description: productData.description,
              },
              {
                src: productData.image,
                title: productData.title,
                description: ProductDetails.description,
              },
              {
                src: productData.image,
                title: productData.title,
                description: ProductDetails.description,
              },
              {
                src: productData.image,
                title: productData.title,
                description: ProductDetails.description,
              },
              {
                src: productData.image,
                title: productData.title,
                description: ProductDetails.description,
              },
              {
                src: productData.image,
                title: productData.title,
                description: ProductDetails.description,
              },
            ]}
          />
        </Col>
        <Col
          xs={10}
          md={7}
          lg={7}
          className={`${theme ? "text-light" : "text-black"} product-details`}
        >
          <h1>{productData.title}</h1>
          <Button
            onClick={() => addItem(productData)}
            className={
              theme ? "bg-dark-primary text-black" : "bg-light-primary"
            }
            style={{ borderRadius: "0", border: 0 }}
          >
            <BsCartPlus size="1.8rem" />
            Add to cart
          </Button>
          <br />
          <b
            className={`${
              theme ? "text-dark-primary" : "text-light-primary"
            } h4 mt-3 d-block`}
          >
            $ {productData.price}
          </b>
          <br />
          <b className="h5">4.1 ⭐</b>
          <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
            {productData.description}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
