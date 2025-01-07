import React from "react";

function Blogs() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-6">
                    <a className="blog-main-img" href="/blog/discover-india-biking-adventures-with-freedo-rentals">
                        <img
                            className="img-fluid"
                            src="https://freedo.rentals/blog-images/blog-22.jpg"
                            alt="Blog Main Image"
                        />
                    </a>
                </div>

                {/* Content Column */}
                <div className="col-md-6">
                    <div className="blog-content-main">
                        <span className="badge bg-freedo-theme fw-normal mb-3">Best Places</span>
                        <h5 className="mb-2">
                            <a
                                className="text-dark d-block"
                                href="/blog/discover-india-biking-adventures-with-freedo-rentals"
                            >
                                Explore India on Two Wheels: Top Bike-Friendly Road Trips with Freedo Bike Rentals
                            </a>
                        </h5>
                        <div className="blog-time text-dark mb-2">
                            <i className="far fa-calendar"></i> July 2023 / India
                        </div>
                        <p className="text-secondary fw-light">
                            What does every bike lover want? Explore those places that make their soul happy! India has
                            some of the finest and most scenic places to offer! You can explore picturesque surroundings
                            and breathtaking landscapes on your two-wheeled buddy.
                        </p>
                        <a
                            className="text-dark pt-2 d-block text-decoration-underline"
                            href="/blog/discover-india-biking-adventures-with-freedo-rentals"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            {/* Host Investment Banner */}
            <div className="host-investment-banner my-5">
                <img
                    className="host-investment-banner-img img-fluid"
                    src="https://www.zoomcar.com/zap/subscribe/build/c305b40c67077b3849c25a445c6191d8.png"
                    alt="Host Investment Banner"
                />
            </div>

            {/* Host Counter Section */}
            <div className="host-counter my-5 w-100">
                <div className="host-counter-container row justify-content-center">
                    <div className="host-counter-ele col-md-2 col-6 text-center">
                        <h3 className="host-counter-ele-number text-primary">7 Million+</h3>
                        <p className="host-counter-ele-text">Bookings Served</p>
                    </div>
                    <div className="host-counter-ele col-md-2 col-6 text-center">
                        <h3 className="host-counter-ele-number text-primary">2 Billion+</h3>
                        <p className="host-counter-ele-text">KMs driven</p>
                    </div>
                    <div className="host-counter-ele col-md-2 col-6 text-center">
                        <h3 className="host-counter-ele-number text-primary">10 Million+</h3>
                        <p className="host-counter-ele-text">Guest Community</p>
                    </div>
                    <div className="host-counter-ele col-md-2 col-6 text-center">
                        <h3 className="host-counter-ele-number text-primary">38 Cities</h3>
                        <p className="host-counter-ele-text">And Counting...</p>
                    </div>
                    <div className="host-counter-ele col-md-2 col-6 text-center">
                        <h3 className="host-counter-ele-number text-primary">25,000+</h3>
                        <p className="host-counter-ele-text">Live On Zoomcar Host</p>
                    </div>
                </div>
            </div>

            {/* Host Car Sharing Section */}
            <section className="host-car-sharing my-5">
                <section className="host-car-sharing-benefits">
                    <header className="host-car-sharing-benefits-title text-center">
                        Why share your car with us?
                    </header>
                    <article className="host-car-sharing-benefits-blocks row justify-content-center">
                        <article className="host-car-sharing-benefits-blocks-block col-md-3 text-center">
                            <div className="host-car-sharing-benefits-blocks-block-image-container">
                                <img src="https://doav52ie4cv60.cloudfront.net/images/repair.svg" alt="Damage Coverage" />
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-title">
                                Damage Coverage
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-description">
                                Your car's safety is our responsibility
                            </div>
                        </article>
                        <article className="host-car-sharing-benefits-blocks-block col-md-3 text-center">
                            <div className="host-car-sharing-benefits-blocks-block-image-container">
                                <img src="https://doav52ie4cv60.cloudfront.net/images/earning.svg" alt="Track Earnings" />
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-title">
                                Track your earnings
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-description">
                                Track your earnings in real time via host app
                            </div>
                        </article>
                        <article className="host-car-sharing-benefits-blocks-block col-md-3 text-center">
                            <div className="host-car-sharing-benefits-blocks-block-image-container">
                                <img src="https://doav52ie4cv60.cloudfront.net/images/flexibility.svg" alt="End to End Controls" />
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-title">
                                End to end controls
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-description">
                                You decide when you want to share your car and at what price! Communicate directly with guests with chat feature.
                            </div>
                        </article>
                        <article className="host-car-sharing-benefits-blocks-block col-md-3 text-center">
                            <div className="host-car-sharing-benefits-blocks-block-image-container">
                                <img src="https://doav52ie4cv60.cloudfront.net/images/secure-car.svg" alt="Comfort" />
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-title">
                                Comfort
                            </div>
                            <div className="host-car-sharing-benefits-blocks-block-description">
                                Share your car from anywhere at the tap of a button
                            </div>
                        </article>
                    </article>
                </section>
            </section>
        </div>
    );
}

export default Blogs;
