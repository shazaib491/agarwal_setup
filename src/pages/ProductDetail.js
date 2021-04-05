import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function ProductDetail() {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const url = `http://localhost:3001/category/productdetail?id=${id}`;
    useEffect(async () => {
        const aboutCont = new AbortController();
        try {
            const result = await fetch(url);
            const data = await result.json();
            setProduct(data.post[0]);
            console.log(data.post);
        } catch (error) {
            console.log(error);
        }
        return () => aboutCont.abort();
    }, [url]);

    return (
        <div>
            <div className="page-title-section" style={{ backgroundImage: "url(" + "../assets/img/bg/pagetitle.jpg" + ")" }}
            >
                <div className="container">
                    <h1>{product && product.product}</h1>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="shopw-single.php">HR SHEET</a></li>
                    </ul>
                </div>
            </div>

            <div className="section-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="product-images">
                                <div className="main-img-slider">
                                    {/* <figure> <a href="#" data-size="1400x1400"> <img src="../assets/img/shop/single-1.jpg" data-lazy="../assets/img/shop/single-1.jpeg" alt="" /> </a> </figure> */}
                                    {/* <figure> <a href="#" data-size="1400x1400"> <img src="../assets/img/shop/single-2.jpg" data-lazy="../assets/img/shop/single-2.jpeg" alt="" /> </a> </figure> */}
                                    {/* <figure> <a href="#" data-size="1400x1400"> <img src="../assets/img/shop/single-3.jpg" data-lazy="../assets/img/shop/single-3.jpeg" alt="" /> </a> </figure> */}
                                    <figure> <a href="#" data-size="1400x1400"> <img src="../assets/img/shop/single-4.jpg" data-lazy="../assets/img/shop/single-4.jpg" alt="" /> </a> </figure>
                                </div>
                                <ul className="thumb-nav">
                                    <li><img src="../assets/img/shop/single-1.jpg" alt="product-thumb" /></li>
                                    <li><img src="../assets/img/shop/single-2.jpeg" alt="product-thumb" /></li>
                                    <li><img src="../assets/img/shop/single-3.jpeg" alt="product-thumb" /></li>
                                    <li><img src="../assets/img/shop/single-4.jpg" alt="product-thumb" /></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="single-product">
                                <h2>{product && product.product}</h2>
                                <div className="product-review-area"> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> <span>(1 customer review)</span> </div>
                                <div className="single-product-price">
                                    <h4>₹10000.00</h4>
                                </div>
                                <p>{product && product.description}.</p>
                                <div className="quantity mt-30">
                                    <form method="get"> <input type="number" name="quantity" min="1" max="9" step="1" value="1" /> <button type="submit" className="dark-pulse-button add-to-cart-button">Buy Now</button> </form>
                                </div>
                                <div className="product-categories">
                                    <div className="display-b">
                                        <span>Category: </span>
                                        <ul>
                                            <li><a href="#">Books</a></li>
                                            <li><a href="#">Fiance</a></li>
                                        </ul>
                                    </div>
                                    <div className="display-b">
                                        <span>Product ID: </span>
                                        <ul>
                                            <li>789654</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-tags">
                                    <div className="display-b">
                                        <span>Product Tags: </span>
                                        <ul>
                                            <li><a href="#">Fiance</a></li>
                                            <li><a href="#">Books</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">Planning</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-share mt-20"> <span>Share: </span> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-pinterest"></i></a> </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shop-tabs">
                                <div className='tabs tabs_animate mt-70'>
                                    <ul className="tab-menu left-holder">
                                        <li><a href="#tab-1">Description</a></li>
                                        <li><a href="#tab-2">Additional Information</a></li>
                                        <li><a href="#tab-3">Reviews (1)</a></li>
                                    </ul>
                                    <div id='tab-1' className="clearfix product-tab-body">
                                        <h3>Product Description</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div id='tab-2' className="clearfix product-tab-body">
                                        <h3>Product Features</h3>
                                        <ul>
                                            <li><span>Name:</span>Effective Finance Solutions</li>
                                            <li><span>Category:</span>Book</li>
                                            <li><span>Size:</span>15x20 cm</li>
                                            <li><span>Weight:</span>0.55 kg</li>
                                            <li><span>Material:</span>Paper</li>
                                            <li><span>Color:</span>White & Red</li>
                                        </ul>
                                    </div>
                                    {/* <div id='tab-3' className="clearfix product-tab-body">
                                        <h3>Customer Reviews</h3>
                                        <div className="customer-review">
                                            <div className="row">
                                                <div className="col-md-1 pr-0 hidden-sm-down">
                                                    <img src="../assets/img/blog/user2.png" alt="member" />
                                                    <div className="customer-review-stars"> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> </div>
                                                </div>
                                                <div className="col-md-11 col-12">
                                                    <div className="customer-review-block">
                                                        <h5>Alexander PoppinsEmily Hills</h5>
                                                        <strong> April 01, 2018</strong>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <form method="get" action="#" className="mt-60">
                                            <div className="row">
                                                <div className="col-md-2 col-12">
                                                    <h3>Your Review</h3>
                                                </div>
                                                <div className="col-md-10 col-12 mt-5">
                                                    <div className="rating"> <label> <input type="radio" name="stars" value="1" /> <span className="icon">★</span> </label> <label> <input type="radio" name="stars" value="2" /> <span className="icon">★</span> <span className="icon">★</span> </label> <label> <input type="radio" name="stars" value="3" /> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> </label> <label> <input type="radio" name="stars" value="4" /> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> </label> <label> <input type="radio" name="stars" value="5" /> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> <span className="icon">★</span> </label> </div>
                                                    <div className="row">
                                                        <div className="review-input">
                                                            <div className="col-md-6"> <input type="text" name="name" placeholder="Your Name" /> </div>
                                                            <div className="col-md-6"> <input type="email" name="email" placeholder="Your Email" /> </div>
                                                            <div className="col-md-12">
                                                                <textarea name="review" placeholder="Your Review"></textarea>
                                                                <div className="right-holder"> <button type="submit">Send</button> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-clients border-top">
                <div className="container">
                    <div className="owl-carousel owl-theme clients" id="clients">
                        <div className="item"> <img src="img/partners/partner1.png" alt="partner-image" /> </div>
                        <div className="item"> <img src="img/partners/partner2.png" alt="partner-image" /> </div>
                        <div className="item"> <img src="img/partners/partner3.png" alt="partner-image" /> </div>
                        <div className="item"> <img src="img/partners/partner4.png" alt="partner-image" /> </div>
                        <div className="item"> <img src="img/partners/partner5.png" alt="partner-image" /> </div>
                        <div className="item"> <img src="img/partners/partner6.png" alt="partner-image" /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
