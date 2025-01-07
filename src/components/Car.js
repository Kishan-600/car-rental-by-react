import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CartPlus, CreditCard } from 'react-bootstrap-icons';
import car1 from '../img/car1.jpg';
import car2 from '../img/car2.jpg';
import car3 from '../img/car3.png';
import car4 from '../img/car4.jpg';
import car5 from '../img/car5.png';
import car6 from '../img/car6.png';
import car7 from '../img/car7.jpg';
import car8 from '../img/car8.png';
import car9 from '../img/car9.jpg';
import car10 from '../img/car10.jpg';
import car11 from '../img/car11.jpg';
import car12 from '../img/car12.jpg';
import car13 from '../img/car13.png';
import car14 from '../img/car14.png';
import car15 from '../img/car15.png';
import car16 from '../img/car16.jpg';
import car17 from '../img/car17.png';
import car18 from '../img/car21.jpg';
import car19 from '../img/car19.jpg';
import car20 from '../img/car20.png';

const Car = () => {
  const cars = [
    {
      image: car1,
      name: 'Maruti Swift',
      price: 2376,
      description: 'A compact car with great mileage and performance.'
    },
    {
      image: car2,
      name: 'Hyundai i10',
      price: 2580,
      description: 'A small and reliable city car for daily use.'
    },
    {
      image: car3,
      name: 'Honda City',
      price: 3000,
      description: 'A stylish sedan with luxury features.'
    },
    {
      image: car4,
      name: 'Toyota Corolla',
      price: 4500,
      description: 'A premium sedan known for its comfort and performance.'
    },
    {
      image: car5,
      name: 'Suzuki WagonR',
      price: 2100,
      description: 'An affordable hatchback with spacious interiors.'
    },
    {
      image: car6,
      name: 'Kia Seltos',
      price: 5500,
      description: 'A modern SUV with advanced features.'
    },
    {
      image: car7,
      name: 'BMW 3 Series',
      price: 7000,
      description: 'A luxury sedan known for its performance and design.'
    },
    {
      image: car8,
      name: 'Audi A4',
      price: 8000,
      description: 'A premium sedan with top-notch luxury features.'
    },
    {
      image: car9,
      name: 'Maruti Vitara Brezza',
      price: 3500,
      description: 'A compact SUV with robust build quality.'
    },
    {
      image: car10,
      name: 'Ford Ecosport',
      price: 4000,
      description: 'A compact SUV with good performance and space.'
    },
    {
      image: car11,
      name: 'Honda CR-V',
      price: 6500,
      description: 'A comfortable and reliable SUV.'
    },
    {
      image: car12,
      name: 'Toyota Fortuner',
      price: 9000,
      description: 'A luxury SUV with high-end features.'
    },
    {
      image: car13,
      name: 'Mahindra Thar',
      price: 5000,
      description: 'An iconic off-roading SUV with rugged build.'
    },
    {
      image: car14,
      name: 'Renault Kwid',
      price: 1800,
      description: 'An entry-level hatchback with decent features.'
    },
    {
      image: car15,
      name: 'Skoda Rapid',
      price: 3200,
      description: 'A mid-size sedan with great performance and space.'
    },
    {
      image: car16,
      name: 'Nissan Micra',
      price: 2400,
      description: 'A compact and efficient city car.'
    },
    {
      image: car17,
      name: 'Volkswagen Polo',
      price: 3000,
      description: 'A premium hatchback known for its solid build.'
    },
    {
      image: car18,
      name: 'Chevrolet Spark',
      price: 2000,
      description: 'A budget-friendly city car with basic features.'
    },
    {
      image: car19,
      name: 'Datsun GO',
      price: 2200,
      description: 'An affordable and compact hatchback.'
    },
    {
      image: car20,
      name: 'Mitsubishi Pajero',
      price: 7500,
      description: 'An off-road SUV with superior handling.'
    }
  ];

  return (
    <Row className="g-4">
      {cars.map((car, index) => (
        <Col md={3} key={index}>
          <Card className="car-card" style={{height:'400px'}}>
            <Card.Img variant="top" src={car.image} alt={car.name} />
            <Card.Body>
              <Card.Title className="text-center fw-bold">{car.name}</Card.Title>
              <Card.Text className="text-left">
                <i className="fa fa-inr"></i> {car.price} per day
              </Card.Text>
              <Card.Text className="text-muted">{car.description}</Card.Text>
              <div className="d-flex justify-content-between mt-auto">
                <a href="buy.html" className="btn btn-primary w-48">
                  <CartPlus className="mr-2" />
                  Buy
                </a>
                <a href="cart.html" className="btn btn-secondary w-48">
                  <CreditCard className="mr-2" />
                  Add to Cart
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Car;
