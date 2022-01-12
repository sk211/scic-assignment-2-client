import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:5000/addProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container className="py-5" id="products">
      <h2 className="py-3">All Products here </h2>
      <Row xs={1} sm={2} md={4} className="g-4">
        {products
          .filter((item, index) => index < 8)
          .map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product.photoUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <div>
                    <i class="fas fa-star text-warning   "></i>
                    <i class="fas fa-star text-warning   "></i>
                    <i class="fas fa-star text-warning   "></i>
                    <i class="fas fa-star text-warning   "></i>
                    <i class="fas fa-star    "></i>
                  </div>
                  <Card.Text>
                    <h2>$ {product.price}</h2>
                  </Card.Text>
                  <Link to={`/ordarplace/${product._id}`}>
                    <Button><i class="fas fa-shopping-cart    "></i></Button>{" "}
                    <Button><i class="fas fa-shopping-cart    "></i></Button>{" "}
                  </Link>


                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Product;
