import React from "react";

function Offer() {
    return (
        <>
            {/* Offer Section */}
            <div className="offer-container my-5">
                <div className="offer-title text-center mb-4">
                    <h2>Exclusive Offers Just For You</h2>
                </div>
                <div id="hp-banner-container-new" className="row justify-content-center">
                    {[
                        {
                            link: "/rentacar/special-offers/asia-ww-wintersale",
                            img: "https://images.hertz.com/content/dam/irac/Overlay/Asia/tiles/Wintersale24_EN.jpg",
                            alt: "Winter Sale",
                        },
                        {
                            link: "/rentacar/productsandservices/productsandservicesRegions.do",
                            img: "https://images.hertz.com/content/dam/irac/Overlay/enUS/tiles/asia_ps_india.jpg",
                            alt: "Products and Services",
                        },
                        {
                            link: "/rentacar/member/enrollment.do",
                            img: "https://images.hertz.com/content/dam/irac/Overlay/enUS/tiles/asia_gpr_getmore.jpg",
                            alt: "Get More",
                        },
                    ].map((offer, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <a href={offer.link}>
                                <img
                                    width="100%"
                                    height="auto"
                                    src={offer.img}
                                    alt={offer.alt}
                                    className="offer-banner shadow-sm rounded"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Host Share and Earn Steps Section */}
            <section className="host-share-earn-steps">
                <header className="host-share-earn-steps-title">
                    3 Simple Steps to Start Sharing and Earning
                </header>
                <article className="host-share-earn-steps-blocks">
                    {[
                        {
                            imgSrc: "https://doav52ie4cv60.cloudfront.net/images/aboutdetail.svg",
                            title: "Install Host App",
                            description: "Become a Zoomcar Host by installing the app here.",
                            buttonText: "DOWNLOAD APP",
                        },
                        {
                            imgSrc: "https://doav52ie4cv60.cloudfront.net/images/secure-car.svg",
                            title: "Setup for Sharing",
                            description: "Signup on the app and provide us your PAN, Bank, and Address details.",
                            buttonText: null,
                        },
                        {
                            imgSrc: "https://doav52ie4cv60.cloudfront.net/images/share-earn.svg",
                            title: "Share and Earn",
                            description: "Select the sharing dates for your car. Our experts will visit to install safety devices.",
                            buttonText: null,
                        },
                    ].map((step, index) => (
                        <article
                            className="host-share-earn-steps-blocks-block"
                            key={index}
                        >
                            <div className="host-share-earn-steps-blocks-block-image-container">
                                <img src={step.imgSrc} alt={step.title} />
                            </div>
                            <article className="host-share-earn-steps-blocks-block-content">
                                <div className="host-share-earn-steps-blocks-block-content-title">
                                    {step.title}
                                </div>
                                <div className="host-share-earn-steps-blocks-block-content-description">
                                    {step.description}
                                    {step.buttonText && (
                                        <div className="host-share-earn-steps-blocks-block-content-description-button">
                                            {step.buttonText}
                                        </div>
                                    )}
                                </div>
                            </article>
                        </article>
                    ))}
                </article>
            </section>

            {/* FAQ Section */}
            <div id="faq" className="my-5">
                <div className="text-center mb-4">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="accordion" id="faqAccordion">
                    {[
                        {
                            question: "How does buying a Turo gift card work?",
                            answer: "Anyone in the United States can buy a gift card whether or not they’re signed up for Turo...",
                        },
                        {
                            question: "How do gift cards get delivered?",
                            answer: "Turo gift cards are sent digitally via email or text message as e-gift cards...",
                        },
                        {
                            question: "What payment methods are accepted for gift card purchases?",
                            answer: "Turo accepts all major debit and credit cards, as well as Apple Pay, for gift card purchases...",
                        },
                        {
                            question: "How do I redeem a gift card?",
                            answer: "There are multiple ways to redeem a gift card. The easiest way is to go to your Account page...",
                        },
                    ].map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Offer;
