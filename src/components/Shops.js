import React, { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export default function Shops() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row className="g-4 card-section">
          {cart.map((car, index) => (
            <Col md={3} key={index}>
              <Card className="car-card" style={{ height: '350px' }}>
                <Card.Img variant="top" src={car.image} alt={car.name} />
                <Card.Body>
                  <Card.Title className="text-center fw-bold">{car.name}</Card.Title>
                  <Card.Text className="text-left">
                    <i className="fa fa-inr"></i> {car.price} per day
                  </Card.Text>
                  <Card.Text className="text-muted">{car.description}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(car)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}