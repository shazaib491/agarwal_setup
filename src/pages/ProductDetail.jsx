import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const url = `http://localhost:3001/category/productdetail?id=${id}`;
  useEffect(() => {
    const aboutCont = new AbortController();
    try {
      axios.get(url).then((response) => {
        setProduct(response.data.post[0]);
      });
    } catch (error) {
      console.log(error);
    }
    return () => aboutCont.abort();
  }, [url]);

  return (
    <>
      <div
        class="page-title-section"
        style={{
          backgroundImage: "url(" + "../assets/img/bg/pagetitle.jpg" + ")",
        }}
      >
        <div class="container">
          <h1>HR SHEET</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="shopw-single.php">HR SHEET</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="section-block">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-12">
              <div class="product-images">
                <div class="main-img-slider">
                  <figure>
                    {" "}
                    <a href="#" data-size="1400x1400">
                      {" "}
                      <img
                        src="../assets/img/shop/single-2.jpg"
                        data-lazy="../assets/img/shop/single-2.jpeg"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </figure>
                  <figure>
                    {" "}
                    <a href="#" data-size="1400x1400">
                      {" "}
                      <img
                        src="../assets/img/shop/single-3.jpg"
                        data-lazy="../assets/img/shop/single-3.jpeg"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </figure>
                  <figure>
                    {" "}
                    <a href="#" data-size="1400x1400">
                      {" "}
                      <img
                        src="../assets/img/shop/single-4.jpg"
                        data-lazy="../assets/img/shop/single-4.jpg"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </figure>
                </div>
                <ul class="thumb-nav d-md-flex justify-content-center">
                  <li className="w-100">
                    <img
                      className=" "
                      src="../assets/img/shop/single-1.jpg"
                      alt="product-thumb"
                    />
                  </li>
                  <li className="w-100">
                    <img
                      className=" "
                      src="../assets/img/shop/single-2.jpeg"
                      alt="product-thumb"
                    />
                  </li>
                  <li className="w-100">
                    <img
                      className=" "
                      src="../assets/img/shop/single-3.jpeg"
                      alt="product-thumb"
                    />
                  </li>
                  <li className="w-100">
                    <img
                      className=" "
                      src="../assets/img/shop/single-4.jpg"
                      alt="product-thumb"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-12">
              <div class="single-product">
                <h2>{product.product}</h2>
                {/* <div class="product-review-area"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i> <span>(1 customer review)</span> </div> */}
                <div class="single-product-price">
                  <h4>₹{product.priceone}</h4>
                </div>
                <p>{product.description}.</p>
                <div class="quantity mt-30">
                  <form method="get">
                    {" "}
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="9"
                      step="1"
                      value="1"
                    />{" "}
                    <button
                      type="submit"
                      class="dark-pulse-button add-to-cart-button"
                    >
                      Add  To Cart
                    </button>{" "}
                  </form>
                </div>
                <div class="product-categories">
                  <div class="display-b">
                    <span>Length: </span>
                    <ul>
                      <li>
                        <a href="#">{product.length}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="display-b">
                    <span>Width: </span>
                    <ul>
                      <li>{product.width}</li>
                    </ul>
                  </div>
                  <div class="display-b">
                    <span>Thickness: </span>
                    <ul>
                      <li>{product.thick}</li>
                    </ul>
                  </div>
                  <div class="display-b">
                    <span>Grade: </span>
                    <ul>
                      <li>{product.grade}</li>
                    </ul>
                  </div>
                  <div class="display-b">
                    <span>Color: </span>
                    <ul>
                      <li>{product.color}</li>
                    </ul>
                  </div>

                  <div class="display-b">
                    <span>Price: </span>
                    <ul>
                      <li>{product.priceone}</li>
                    </ul>
                  </div>
                </div>

                {/* <div class="product-share mt-20"> <span>Share: </span> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-pinterest"></i></a> </div> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="shop-tabs">
                <div class="tabs tabs_animate mt-70">
                  <ul class="tab-menu left-holder">
                    <li>
                      <a href="#tab-1">Description</a>
                    </li>
                    <li>
                      <a href="#tab-2">Additional Information</a>
                    </li>
                    <li>
                      <a href="#tab-3">Reviews (1)</a>
                    </li>
                  </ul>
                  <div id="tab-1" class="clearfix product-tab-body">
                    <h3>Product Description</h3>
                    <p>{product.description}</p>
                  </div>
                  <div id="tab-2" class="clearfix product-tab-body">
                    <h3>Product Features</h3>
                    <ul>
                      <li>
                        <span>Name:</span>
                        {product.product}
                      </li>
                      <li>
                        <span>Length:</span>
                        {product.length}
                      </li>
                      <li>
                        <span>Width:</span>
                        {product.width}
                      </li>
                      <li>
                        <span>Thickness:</span>
                        {product.thick}
                      </li>
                      <li>
                        <span>Grade:</span>
                        {product.grade}
                      </li>
                      <li>
                        <span>Color:</span>
                        {product.color}
                      </li>
                      <li>
                        <span>Price:</span>
                        {product.priceone}
                      </li>
                    </ul>
                  </div>
                  <div id="tab-3" class="clearfix product-tab-body">
                    <h3>Customer Reviews</h3>
                    <div class="customer-review">
                      <div class="row">
                        <div class="col-md-1 pr-0 hidden-sm-down">
                          <img
                            src="../assets/img/blog/user2.png"
                            alt="member"
                          />
                          <div class="customer-review-stars">
                            {" "}
                            <i class="fa fa-star" aria-hidden="true"></i>{" "}
                            <i class="fa fa-star" aria-hidden="true"></i>{" "}
                            <i class="fa fa-star" aria-hidden="true"></i>{" "}
                            <i class="fa fa-star" aria-hidden="true"></i>{" "}
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>{" "}
                          </div>
                        </div>
                        <div class="col-md-11 col-12">
                          <div class="customer-review-block">
                            <h5>Alexander PoppinsEmily Hills</h5>
                            <strong> April 01, 2018</strong>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form method="get" action="#" class="mt-60">
                      <div class="row">
                        <div class="col-md-2 col-12">
                          <h3>Your Review</h3>
                        </div>
                        <div class="col-md-12 col-12 mt-5">
                          <div class="rating">
                            {" "}
                            <label>
                              {" "}
                              <input type="radio" name="stars" value="1" />{" "}
                              <span class="icon">★</span>{" "}
                            </label>{" "}
                            <label>
                              {" "}
                              <input type="radio" name="stars" value="2" />{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                            </label>{" "}
                            <label>
                              {" "}
                              <input type="radio" name="stars" value="3" />{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                            </label>{" "}
                            <label>
                              {" "}
                              <input type="radio" name="stars" value="4" />{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                            </label>{" "}
                            <label>
                              {" "}
                              <input type="radio" name="stars" value="5" />{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                              <span class="icon">★</span>{" "}
                            </label>{" "}
                          </div>
                        </div>
                        <div class="row">
                          <div class="review-input">
                            <div class="col-12">
                              <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className=""
                              />
                            </div>
                            <div class="col-12">
                              <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                              />
                            </div>
                            <div class="col-12">
                              <textarea
                                name="review"
                                placeholder="Your Review"
                              ></textarea>

                              <div class="right-holder">
                                {" "}
                                <button type="submit">Send</button>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
