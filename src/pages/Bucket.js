import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import BucketProduct from './BucketProduct';
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export default function Bucket() {
    const { loggedIn } = useContext(AuthContext);
    const history = useHistory();
    

    useEffect(() => {
        if (loggedIn === false) {
          toast.error("Please FullFill All Credentials", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          history.push("/login");
        }
      }, []);


    const [bucket, setBucket] = useState([]);
    useEffect(() => {
        try {
            axios.get(`http://localhost:3001/main/cart_bucket`).then((data) => {
                setBucket([...data.data.bucket])
                
            })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div>
            <div class="page-title-section"
                style={{
                    backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")",
                }}
            >
                <div class="container">
                    <h1>Shopping Cart</h1>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                    </ul>
                </div>
            </div>
            <div class="section-block">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-8 col-12">
                            <div class="shop-cart-box">
                                <div class="row bx" id="1">
                                    {bucket && bucket.map((buck, index) => (
                                       <BucketProduct buck={buck} />
                                    ))}


                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="shop-cart-info-price clearfix">
                                <ul class="right-info-price">
                                    <li>
                                        Total Price:
                     <h6>₹10000.00</h6>
                                    </li>
                                    <li>
                                        Shipping Price:
                     <h6>₹85.00</h6>
                                    </li>
                                    <li>
                                        Tax:
                     <h6>₹30.00</h6>
                                    </li>
                                </ul>
                                <div class="total-price">
                                    <p>Total: <strong>₹10150.00</strong></p>
                                </div>
                            </div>
                            <div class="mt-25 right-holder"> <a href="#" class="primary-button button-md">Order Now</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-clients-grey border-top border-bottom">
                <div class="container">
                    <div class="owl-carousel owl-theme clients" id="clients">
                        <div class="item"> <img src="assets/img/partners/partner1.png" alt="partner-image" /> </div>
                        <div class="item"> <img src="assets/img/partners/partner2.png" alt="partner-image" /> </div>
                        <div class="item"> <img src="assets/img/partners/partner3.png" alt="partner-image" /> </div>
                        <div class="item"> <img src="assets/img/partners/partner4.png" alt="partner-image" /> </div>
                        <div class="item"> <img src="assets/img/partners/partner5.png" alt="partner-image" /> </div>
                        <div class="item"> <img src="assets/img/partners/partner6.png" alt="partner-image" /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
