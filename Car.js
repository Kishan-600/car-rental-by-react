import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
import car21 from '../img/car21.jpg';
import car19 from '../img/car19.jpg';
import car20 from '../img/car20.png';

// import car21 from '../img/car21.jpg';
const Car = () => {
  return (
    <>
    <Row className="g-4">
      {/* Card 1 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
            src={car1}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car2}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car3}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car4}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="g-4">
     {/* Card 5 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car5}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>


     {/* Card 6 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car6}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>

   
     {/* Card 7 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car7}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>

     {/* Card 8 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car8}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>
   </Row>

   <Row className="g-4">
     {/* Card 9 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car9}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>

     {/* Card 10 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car10}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>

     {/* Card 11 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car11}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>

     {/* Card 12 */}
     <Col md={3}>
     <Card className="car-card">
       <Card.Img
         variant="top"
         src={car12}
         alt="Maruti Swift"
       />
       <Card.Body>
         <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
         <Card.Text className="text-left">
           <i className="fa fa-inr"></i> 2376 per day
         </Card.Text>
         <div className="d-flex justify-content-between mt-auto">
           <Button variant="primary" className="w-48">
             <CartPlus className="mr-2" />
             Buy
           </Button>
           <Button variant="secondary" className="w-48">
             <CreditCard className="mr-2" />
             Add to Cart
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>
   </Row>




   <Row className="g-4">
      {/* Card 13 */}

      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
            src={car13}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 14 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car14}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 15 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car15}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 16 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car16}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>


    <Row className="g-4">
      {/* Card 17 */}

      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
            src={car17}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 18*/}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car21}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 19 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car19}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 20 */}
      <Col md={3}>
        <Card className="car-card">
          <Card.Img
            variant="top"
           src={car20}
            alt="Maruti Swift"
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Maruti Swift</Card.Title>
            <Card.Text className="text-left">
              <i className="fa fa-inr"></i> 2376 per day
            </Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button variant="primary" className="w-48">
                <CartPlus className="mr-2" />
                Buy
              </Button>
              <Button variant="secondary" className="w-48">
                <CreditCard className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

   </>
  );
};

export default Car;
