import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

export default function BucketProduct({ buck }) {

    const [qty, setQty] = useState(1);
    const [qnty, setQnty] = useState();



    return (
        <>
            <div class="col-md-1 col-sm-1 col-12 pr-0">
                <div class="button-close"> <a href="#"><i class="icon-cancel"></i></a> </div>
            </div>
            <div class="col-md-2 col-sm-2 col-12">
                <div class="shop-cart-box-img"> <img src="assets/img/shop/grid/pro-1.jpg" alt="img" />  </div>
            </div>
            <div class="col-md-3 col-sm-3 col-12">
                <div class="shop-cart-box-info">
                    <h4>{buck.pname}</h4>
                    <span>HR SHEET- PRIME</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-12">
                <div class="quantity ">
                    <h6>Quantity</h6>
                    <form >
                        <input type="number" name="quantity" onChange={(e) => setQnty(e.target.value)} value={qty} />
                        <div class="quantity-nav" >
                            <div class="quantity-button quantity-up" onClick={() => setQty(qty + 1)} >+</div>
                            <div class="quantity-button quantity-down" onClick={() => setQty(qty - 1)} >-</div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-12">
                <div class="shop-cart-box-price">
                    <h5>${(qty * buck.price) === 0 ? buck.price :qty * buck.price}</h5>
                </div>
            </div>
        </>
    )

}
