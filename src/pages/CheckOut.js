import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../Context/AuthContext";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const CheckOut = () => {
    const { loggedIn, getLoggedIn } = useContext(AuthContext);
    console.log(loggedIn);
    const history = useHistory();

    const [user, setUser] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [bill, setBill] = useState();
    let users;

    useEffect(() => {

        if (loggedIn === false) {
            toast.error("Please FullFill All Credentials", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            history.push("/login");
        }
        axios.get(`http://localhost:3001/main/shipping`).then((data) => {
            setUser(data.data.user[0]);
            setCity(data.data.city[0]);
            setState(data.data.state[0]);
            getLoggedIn();

        }).catch(e => {
            console.log(e);
        })
        axios.get(`http://localhost:3001/main/expenses`).then((bill) => {
            console.log(bill);
        })
    }, [])
    return (
        <>
            <div className="page-title-section"
                style={{
                    backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")"
                }}>
                <div className="container">
                    <h1>Checkout</h1>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="checkout.php">Checkout</a></li>
                    </ul>
                </div>
            </div>
            <div className="section-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-12">
                            <div className="section-heading mt-15">
                                <h4>Shipping Address Details!</h4>
                                <div className="section-heading-line-left"></div>
                            </div>
                            <div className="contact-form-box mt-30">
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <lable>Full Name</lable>
                                            <input type="text" name="name" placeholder="Enter Your Name" value={user && user.name} />
                                        </div>
                                        <div className="col-md-6">
                                            <lable>Email</lable>
                                            <input type="email" name="email" placeholder="Enter Email Address" value={user && user.email} />
                                        </div>
                                        <div className="col-md-6">
                                            <lable>Mobile Number</lable>
                                            <input type="number" onKeyPress="if(this.value.length==10) return false;" name="number" placeholder="Enter Mobile Number" value={user && user.mobile} />
                                        </div>
                                        <div className="col-md-6">
                                            <lable>State</lable>
                                            <select className="form-control">
                                                <option selected value={user && user.state}>{state && state.state}</option>

                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <lable>City</lable>
                                            <select className="form-control">
                                                <option selected value={user && user.city}>{city && city.city}</option>

                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <lable>Pincode</lable>
                                            <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;" name="Pincode" placeholder=" Enter Pincode" value={user && user.pincode} />
                                        </div>
                                        <div className="col-md-12">
                                            <lable>Address</lable>
                                            <textarea name="address" value={user && user.address} placeholder="Enter complete Address e.g. house number, street name, landmark.."></textarea>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-4 col-12">
                            <div className="shop-cart-info-price clearfix">
                                <ul className="right-info-price">
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
                                <div className="total-price">
                                    <p>Total: <strong>₹10115.00</strong></p>
                                </div>
                            </div>
                            <div className="mt-25 right-holder"> <a href="confirmation.php" className="primary-button button-md">Proceed</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOut;
