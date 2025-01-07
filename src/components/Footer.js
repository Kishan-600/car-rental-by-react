function Footer() {
    return (
      <>
        <footer
          className="desktop-footer-block"
          style={{
            background: "#20a8d9", 
            color: "white", textDecoration: "none", 
          }}
        >
          <div className="container py-3 mt-4">
            <div className="row justify-content-around">
              {/* COMPANY section */}
              <div className="col-12 col-md-4">
                <h6>COMPANY</h6>
                <ul>
                  <li><a href="/aboutus" target="_blank" style={{ color: "white", textDecoration: "none"}}>About Us</a></li>
                  <li><a href="/press-and-media-coverage" target="_blank" style={{ color: "white", textDecoration: "none" }}>Media Coverage</a></li>
                  <li><a href="/careers" target="_blank" style={{ color: "white", textDecoration: "none" }}>Careers</a></li>
                  <li><a href="/privacy-policy" target="_blank" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a></li>
                  <li><a href="/term-conditions" target="_blank" style={{ color: "white", textDecoration: "none" }}>Terms & Conditions</a></li>
                  <li><a href="/cancellation-and-refunds" target="_blank" style={{ color: "white", textDecoration: "none" }}>Refunds</a></li>
                </ul>
              </div>
  
              {/* SERVICES section */}
              <div className="col-12 col-md-4">
                <h6>SERVICES</h6>
                <ul>
                  <li><a href="/car-rentals" target="_blank" style={{ color: "white", textDecoration: "none" }}>Local Car Rentals</a></li>
                  <li><a href="/outstation-taxi/car-rentals" target="_blank" style={{ color: "white", textDecoration: "none" }}>Outstation Taxi</a></li>
                  <li><a href="/one-way-cabs" target="_blank" style={{ color: "white", textDecoration: "none" }}>One way cabs</a></li>
                  <li><a href="/corporate-car-rental" target="_blank" style={{ color: "white", textDecoration: "none" }}>Corporate Car Rental</a></li>
                  <li><a href="/airport-taxi" target="_blank" style={{ color: "white", textDecoration: "none" }}>Airport Taxi</a></li>
                </ul>
              </div>
  
              {/* GET IN TOUCH section */}
              <div className="col-12 col-md-4">
                <h6>GET IN TOUCH</h6>
                <ul>
                  <li><a href="/contact-us" target="_blank" style={{ color: "white", textDecoration: "none" }}>Contact Us</a></li>
                  <li><a href="/sitemap" target="_blank" style={{ color: "white", textDecoration: "none" }}>Sitemap</a></li>
                  <li><a href="/sitemap.xml" target="_blank" style={{ color: "white", textDecoration: "none" }}>XML Sitemap</a></li>
                </ul>
                <div className="row mx-0 mt-2">
                  <a href="https://www.savaari.com/blog/" target="_blank" rel="nofollow" className="col-auto pl-0 pr-2">
                    <div className="sns-brands blogger-icon"></div>
                  </a>
                  <a href="https://www.instagram.com/savaaricarrentals" target="_blank" rel="nofollow" className="col-auto px-2">
                    <div className="sns-brands instagram-icon"></div>
                  </a>
                  <a href="https://twitter.com/savaaricars" target="_blank" rel="nofollow" className="col-auto px-2">
                    <div className="sns-brands twitter-icon"></div>
                  </a>
                  <a href="https://www.youtube.com/c/SavaariCarRentalsIndia" target="_blank" rel="nofollow" className="col-auto px-2">
                    <div className="sns-brands youtube-icon"></div>
                  </a>
                  <a href="https://www.facebook.com/Savaari" target="_blank" rel="nofollow" className="col-auto px-2">
                    <div className="sns-brands facebook-icon"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="sv_footer pb-2" style={{ textAlign: "center" }}>
            © Copyright Savaari.
          </div>
        </footer>
      </>
    );
  }
  export default Footer;
  