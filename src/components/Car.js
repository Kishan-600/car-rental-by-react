import React, { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import car1 from '../img/car1.jpg';
import car2 from '../img/car2.jpg';
import car3 from '../img/car3.png';
import car4 from '../img/car4.jpg';
import car5 from '../img/car10.jpg';
import car6 from '../img/car6.png';
import car7 from '../img/car7.jpg';
import car8 from '../img/car8.png';
import car9 from '../img/car9.jpg';
import car10 from '../img/car10.jpg';
import car11 from '../img/car11.jpg';
import car12 from '../img/car12.jpg';
import car13 from '../img/car13.png';
import car14 from '../img/car14.png';
import car15 from '../img/car3.png';
import car16 from '../img/car16.jpg';
import car17 from '../img/car17.png';
import car18 from '../img/car21.jpg';
import car19 from '../img/car19.jpg';
import car20 from '../img/car16.jpg';

const Car = () => {
  const { addToCart } = useContext(CartContext);

  const cars = [
    {
      image: car1,
      name: 'Maruti Swift',
      price: 2376,
      description: 'A compact car with great mileage and performance.'
    },
    {
      image: car2,
      name: 'Hyundai i20',
      price: 2500,
      description: 'A stylish hatchback with advanced features.'
    },
    {
      image: car3,
      name: 'Honda City',
      price: 3000,
      description: 'A premium sedan with a comfortable ride.'
    },
    {
      image: car4,
      name: 'Toyota Innova',
      price: 5000,
      description: 'A spacious MPV perfect for family trips.'
    },
    {
      image: car5,
      name: 'Ford EcoSport',
      price: 3500,
      description: 'A compact SUV with a sporty design.'
    },
    {
      image: car6,
      name: 'Mahindra Thar',
      price: 4500,
      description: 'An off-road SUV with rugged capabilities.'
    },
    {
      image: car7,
      name: 'Tata Nexon',
      price: 3200,
      description: 'A compact SUV with a 5-star safety rating.'
    },
    {
      image: car8,
      name: 'Kia Seltos',
      price: 4000,
      description: 'A stylish SUV with modern features.'
    },
    {
      image: car9,
      name: 'MG Hector',
      price: 4200,
      description: 'A mid-size SUV with a spacious interior.'
    },
    {
      image: car10,
      name: 'Renault Duster',
      price: 3800,
      description: 'A rugged SUV with a powerful engine.'
    },
    {
      image: car11,
      name: 'Skoda Rapid',
      price: 2900,
      description: 'A premium sedan with a sleek design.'
    },
    {
      image: car12,
      name: 'Volkswagen Vento',
      price: 3100,
      description: 'A German-engineered sedan with superior handling.'
    },
    {
      image: car13,
      name: 'Nissan Magnite',
      price: 3300,
      description: 'A compact SUV with a bold design.'
    },
    {
      image: car14,
      name: 'Hyundai Creta',
      price: 3700,
      description: 'A popular SUV with advanced features.'
    },
    {
      image: car15,
      name: 'Honda Amaze',
      price: 2800,
      description: 'A compact sedan with a comfortable ride.'
    },
    {
      image: car16,
      name: 'Toyota Fortuner',
      price: 6000,
      description: 'A full-size SUV with a powerful engine.'
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
    <Row className="g-4 card-section">
      {cars.map((car, index) => (
        <Col md={3} key={index}>
          <Card className="car-card" style={{ height: '350px' }}>
            <Card.Img variant="top" src={car.image} alt={car.name} />
            <Card.Body>
              <Card.Title className="text-center fw-bold">{car.name}</Card.Title>
              <Card.Text className="text-left">
                <i className="fa fa-inr"></i> {car.price} per day
              </Card.Text>
              <Card.Text className="text-muted">{car.description}</Card.Text>
              <div className="d-flex justify-content-between mt-auto">
                <Button variant="primary" className="w-48" href="buy.html">
                  Buy
                </Button>
                <Button
                  variant="secondary"
                  className="w-48"
                  onClick={() => addToCart(car)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Car;