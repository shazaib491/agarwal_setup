import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/main/products";
  useEffect(() => {
    const aboutCont = new AbortController();
    try {
      axios.get(url).then((response) => {
        setData(response.data.post);
        return () => aboutCont.abort();
      })
    } catch (error) {
      console.log(error);
    }
  },[]);

  return (
    <div>
      <div className="swiper-main-slider-fade swiper-container">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(" + "assets/img/slider/slide13.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="slider-content left-holder">
                <h2 className="animated fadeInDown">
                  Creative Consulting Agency <br />
                  For Smart Solutions.
                </h2>
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <p className="animated fadeInDown">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                  </div>
                </div>
                <div className="animated fadeInUp mt-30">
                  <a href="#contact" className="dark-button button-md">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(" + "assets/img/slider/slide11.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="slider-content left-holder">
                <h2 className="animated fadeInDown">
                  <br />
                  your business
                </h2>
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <p className="animated fadeInDown">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                  </div>
                </div>
                <div className="animated fadeInUp mt-25">
                  <a href="#contact" className="dark-button button-md">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(" + "assets/img/slider/slide12.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="slider-content left-holder">
                <h2 className="animated fadeInDown">
                  Building a Succesfull Business
                </h2>
                <div className="row">
                  We will help to improve
                  <div className="col-md-6 col-sm-12 col-12">
                    <p className="animated fadeInDown">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                  </div>
                </div>
                <div className="animated fadeInUp mt-30">
                  <a href="#contact" className="dark-button button-md">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="section-block-bg pb-4">
        <div className="container">
          <div className="section-heading center-holder">
            <h2>Product Catalogue</h2>
            <div className="section-heading-line"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div
              className="owl-carousel owl-theme mt-25"
              id="services-carousel-2"
            >
              {data && data.map((item, index) => {
                return (
                  <div className="d-inline-block ">
                    <div className="classic-shop">
                      <div className="classic-shop-img">
                        <img src="assets/img/shop/grid/pro-1.jpg" alt="img" />
                        <div className="shop-box-overlay">
                          <div className="row">
                            <div className="col-md-12 col-sm-12 col-12 pr-0">
                              <Link to={`/product/${item.id}`}>
                                {/* <a href="products.php"> */}
                                <div className="shop-to-card">
                                  <h4>
                                    <span className="fa fa-eye"></span>View
                                  Catalogue
                                </h4>
                                </div>
                              </ Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="classic-shop-text">
                        <h5>
                          <a key={index}>{item.category}</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="center-holder">
            <a href="product" className="primary-button button-md mt-10">
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="section-block-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12">
              <div className="pr-30-md">
                <div className="section-heading">
                  <h4>Welcome To Agrawal Traders</h4>
                </div>
                <div className="section-heading-line-left"></div>
                <div className="text-content-big mt-20">
                  <p>
                    Agrawal Traders - Wholesale Distributor of hr sheet, pc
                    sheet &amp; galvanized steel sheet in Bhopal, Madhya
                    Pradesh.
                  </p>
                </div>
                <div className="mt-20">
                  <ul className="primary-list">
                    <li>
                      <i className="fa fa-caret-right"></i>Immigration
                      consultant, Information technology consulting
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Consultant pharmacist
                      Creative consultant
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Employment consultant
                      Environmental consultant
                    </li>
                  </ul>
                </div>
                <div className="mt-25">
                  <a
                    href="contact.php"
                    className="primary-button button-sm mb-15-xs"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <img
                src="assets/img/content/home1.jpg"
                className="rounded-border shadow-primary"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-block-bg"
        style={{
          backgroundImage: "url(" + "assets/img/bg/bg1.png" + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 border-dashed">
              <div className="section-heading center-holder white-color">
                <span>Gain a Success With Us!</span>
                <h2>
                  <strong>Doing the right thing</strong>
                </h2>
                <h4>At the Right Time.</h4>
                <a href="#" className="primary-button button-md mt-10">
                  Become a Client
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-heading center-holder white-color">
                <span>Gain a Success With Us!</span>
                <h2>
                  <strong>Doing the right thing</strong>
                </h2>
                <h4>At the Right Time.</h4>
                <a href="#" className="primary-button button-md mt-10">
                  Bulk Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-block-bg"
        style={{
          backgroundImage: "url(" + "assets/img/bg/bg6.png" + ")",
        }}
        id="testmonials"
      >
        <div className="container">
          <div className="section-heading center-holder">
            <span>Testmonials</span>
            <h3>What People Say</h3>
            <div className="section-heading-line"></div>
          </div>
          <div className="owl-carousel owl-theme" id="testmonials-carousel">
            <div className="testmonial-single">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4>John Doe</h4>
              <h6>Consultant</h6>
            </div>
            <div className="testmonial-single">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4>Mary Kay</h4>
              <h6>Design Lead</h6>
            </div>
            <div className="testmonial-single">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4>Jakob Nielsen</h4>
              <h6>Networking Lead</h6>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-block-parallax"
        style={{
          backgroundImage: "url(" + "assets/img/bg/bg2.png" + ")",
        }}
      >
        <div className="container">
          <div className="section-heading center-holder white-color">
            <h2>
              Stay <strong>informed</strong>
            </h2>
            <div className="section-heading-line"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-30 center-holder">
            <form className="newsletter-form" method="post" action="#">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email adress"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="section-clients-grey">
        <div className="container">
          <div className="owl-carousel owl-theme clients" id="clients">
            <div className="item">
              <img src="assets/img/partners/partner1.png" alt="partner-image" />
            </div>
            <div className="item">
              <img src="assets/img/partners/partner2.png" alt="partner-image" />
            </div>
            <div className="item">
              <img src="assets/img/partners/partner3.png" alt="partner-image" />
            </div>
            <div className="item">
              <img src="assets/img/partners/partner4.png" alt="partner-image" />
            </div>
            <div className="item">
              <img src="assets/img/partners/partner5.png" alt="partner-image" />
            </div>
            <div className="item">
              <img src="assets/img/partners/partner6.png" alt="partner-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
