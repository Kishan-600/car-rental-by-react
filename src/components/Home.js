import React from 'react';
import cimg2 from '../Images/cimg2.png';
import cimg3 from '../Images/cimg3.png';
import cimg4 from '../Images/cimg4.png';
import city1 from '../Images/city1.webp';
import Hyderabad from '../Images/Hyderabad.webp'; 
import Delhi from '../Images/Delhi.webp';
import Kolkata from '../Images/Kolkata.webp';
import Goa from '../Images/Goa.webp';
import Mumbai from '../Images/Mumbai.webp';

export default function Home() {
  return (
    <>
      {/* Home Carousel Images */}

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cimg2} className="d-block w-100 custom-carousel-img" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={cimg3} className="d-block w-100 custom-carousel-img" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={cimg4} className="d-block w-100 custom-carousel-img" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Custom CSS */}

      <style>
        {`
            .custom-carousel-img {
            width: 100%; /* Full width of the screen */
            height: 70vh; /* Set height to 70% of the viewport */
            object-fit: cover; /* Ensure image covers the entire area without stretching */
            object-position: center; /* Keeps the image centered */
            overflow: hidden; /* Prevent image overflow */
          }
        `}
      </style>

                         {/* card section  */}


       <div className="container my-5">
      {/* Heading Section */}
      <h2 className="text-center mb-5">Why People Like Us?</h2>

      {/* Cards Section */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Wide Range of Cars</h5>
                <p className="card-text">
                  Whatever is your need of the hour, we got all your needs covered around the clock providing you with the best self-drive options. Our team is ready to answer all your doubts and queries 24/7.
                </p>
              </div>
              <div className="serial-number">1</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Best Prices in the Market</h5>
                <p className="card-text">
                  We believe in providing our customers the best of everything. Our goal is to offer unbeatable prices while maintaining top-notch quality.
                </p>
              </div>
              <div className="serial-number">2</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Multiple KMs Packages</h5>
                <p className="card-text">
                  We provide you with various options in terms of kilometers for your trip. Whether you wish to drive limited kilometers or unlimited kilometers, we have options for every need.
                </p>
              </div>
              <div className="serial-number">3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section 2 */}
      <div className="row">
        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Rocket Rent in Multiple Cities</h5>
                <p className="card-text">
                  We are established in multiple cities to cater to all our customers and provide them with the best of our services wherever they are.
                </p>
              </div>
              <div className="serial-number">4</div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Special Addons at Very Feasible Rent</h5>
                <p className="card-text">
                  All our customers are special, so we provide them with special addons like cameras, trekking kits, and camping kits at affordable prices to enhance their experience.
                </p>
              </div>
              <div className="serial-number">5</div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">Anytime Booking and 24/7 Support</h5>
                <p className="card-text">
                  Whatever your need is, we got all your needs covered around the clock providing you with the best self-drive options. Our team is always available to help you with anything.
                </p>
              </div>
              <div className="serial-number">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>


          {/*           city collectoin section   */}

          <div className="container mt-5">
  <h2 className="text-center mb-4">Zoom Around All Over India</h2>
  <div id="cityCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {/* Group 1 */}
      <div className="carousel-item active">
        <div className="d-flex justify-content-center gap-4">
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={city1} alt="Bangalore" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Bangalore</h5>
              </div>
            </div>
          </div>
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={Hyderabad} alt="Hyderabad" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Hyderabad</h5>
              </div>
            </div>
          </div>
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={Delhi} alt="Delhi" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Delhi</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Group 2 */}
      <div className="carousel-item">
        <div className="d-flex justify-content-center gap-4">
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={Kolkata} alt="Kolkata" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Kolkata</h5>
              </div>
            </div>
          </div>
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={Goa} alt="Goa" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Goa</h5>
              </div>
            </div>
          </div>
          <div className="card custom-city-card">
            <div className="card-img-container">
              <img src={Mumbai} alt="Mumbai" className="card-img-top custom-city-img" />
              <div className="card-overlay">
                <h5 className="card-title">Mumbai</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#cityCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#cityCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>


  

          

    </>
  );
}
