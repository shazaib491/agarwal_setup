import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import BucketProduct from './BucketProduct';
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export default function Bucket() {
    const { loggedIn,getLoggedIn } = useContext(AuthContext);
    
    const history = useHistory();
    const [bucket, setBucket] = useState([]);
    let [sum, setSum] = useState(0);
    let [sprice, setSprice] = useState(85);
    let [tax, setTax] = useState(30);
    let [total, setTotal] = useState(0);
    useEffect(() => {

        if (loggedIn === false) {
            toast.error("Please FullFill All Credentials", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            history.push("/login");
        }

    }, []);



    useEffect(() => {
        try {
            axios.get(`http://localhost:3001/main/cart_bucket`).then((data) => {
                setBucket([...data.data.bucket])
                getLoggedIn();

            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        setTotal(sum + tax + sprice)
    }, [sum])

    const deleteTocart = (id) => {
        try {
            console.log(id);
            axios.delete(`http://localhost:3001/main/deleteCart?id=${id}`).then((data) => {
                const datas = bucket.filter(cart => cart.pid !== id)
                setBucket([...datas])
            })
        } catch (error) {
            console.log(error);
        }
    }

    let sums = 0;
    let totalAmt = (qty, pid) => {
        var newData = bucket.map(el => {
            if (el.pid === pid)
                return Object.assign(el, { producttotal: el.price * qty })
            return el;
        });
        sums = newData.reduce((accumulator, current) => accumulator + current.producttotal, 0);
        setSum(sums);
        setBucket([...newData])
    }

    const orderNow = () => {
        let data = {
            ptotal: sum,
            sprice: sprice,
            tax: tax,
            total: total
        }

        axios.post(`http://localhost:3001/main/orders`, data).then((data) => {
            console.log(data);
            history.push("/checkOut");
        }).catch(e => {
            console.log(e);
        })
    }


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
                                        <BucketProduct data={
                                            {
                                                buck: buck,
                                                deleteTocart: deleteTocart,
                                                totalAmt: totalAmt
                                            }
                                        } />
                                    ))}


                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="shop-cart-info-price clearfix">
                                <ul class="right-info-price">
                                    <li>
                                        Total Price:
                     <h6>₹{sum}</h6>
                                    </li>
                                    <li>
                                        Shipping Price:
                     <h6>₹{sprice}.00</h6>
                                    </li>
                                    <li>
                                        Tax:
                     <h6>₹{tax}.00</h6>
                                    </li>
                                </ul>
                                <div class="total-price">

                                    <p>Total: <strong>₹{total}</strong></p>
                                </div>
                            </div>
                            <div class="mt-25 right-holder">
                                <button onClick={orderNow} class="primary-button button-md">Order Now</button>
                            </div>
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
