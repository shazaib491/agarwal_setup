import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";


export default function BucketProduct(data) {
    console.log();

    const [qty, setQty] = useState(0);
    const [qnty, setQnty] = useState();
    
    useEffect(() => {
        data.data.totalAmt(qty, data.data.buck.pid);
    }, [qty])

    return (
        <>
            <div class="col-md-1 col-sm-1 col-12 pr-0">
                <div class="button-close"> <button onClick={() => data.data.deleteTocart(data.data.buck.pid)} ><i class="icon-cancel"></i></button> </div>
            </div>
            <div class="col-md-2 col-sm-2 col-12">
                <div class="shop-cart-box-img"> <img src="assets/img/shop/grid/pro-1.jpg" alt="img" />  </div>
            </div>
            <div class="col-md-3 col-sm-3 col-12">
                <div class="shop-cart-box-info">
                    <h4>{data.data.buck.pname}</h4>
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
                    <h5>{(qty * data.data.buck.price) === 0 ? data.data.buck.price : qty * data.data.buck.price}</h5>
                </div>
            </div>
        </>
    )

}
