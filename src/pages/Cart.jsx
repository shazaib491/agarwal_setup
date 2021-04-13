import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart({ item }) {
  const [added, isadded] = useState(true);
  const addProducts = async (data) => {
    isadded(!added);
    // console.log(added);
    const Productcart = {
      id: data.id,
      product: data.product,
      priceone: data.priceone,
      cart: added,
    };
    console.log(Productcart);
    axios
      .post(`http://localhost:3001/main/addTocart`, Productcart)
      .then((data) => {
        console.log();
        toast.info(data.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <>
      <div class="col-md-4 col-sm-6 col-12">
        <div class="classic-shop">
          <div class="classic-shop-img">
            <img src="../assets/img/shop/grid/pro-1.jpg" alt="img" />
            <div class="shop-box-overlay">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-12 pr-0">
                  <Link to={`/productDetail/${item.id}`}>
                    <div class="shop-to-card">
                      <h4>
                        <span class="fa fa-eye"></span>Details
                      </h4>
                    </div>
                  </Link>
                </div>
                <div class="col-md-6 col-sm-6 col-12 pl-0">
                  <div class="shop-buy">
                    <h4>
                      <button
                        className="text-light "
                        type="button"
                        onClick={() => addProducts(item)}
                      >
                        {added ? (
                          <span class="fa fa-cart-plus"></span>
                        ) : (
                          <span class="fas fa-trash-alt"></span>
                        )}
                      </button>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="classic-shop-text">
            <h4>
              <Link to={`/productDetail/${item.id}`}>{item.product}</Link>
              <p>
                <span>Grade</span>&emsp;HR SHEET- PRIME
              </p>
            </h4>
            <h5>${item.priceone}</h5>
            <ul class="">
              <li className="d-flex justify-content-around">
                <span className="f-25">Grade</span>
                <span>{item.grade}</span>
              </li>
              <li className="d-flex justify-content-around">
                <span className="f-25">Length</span>
                <span>{item.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
