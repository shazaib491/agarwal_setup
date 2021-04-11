import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

export default function ProductsDynamic() {
    
    useEffect(()=>{
        
    })
    return (
        <div>
            <div className="page-title-section"
                style={{ backgroundImage: "url(" + "../assets/img/bg/pagetitle.jpg" + ")" }}>
                <div className="container">
                    <h1>HR Sheet Catalogue</h1>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="shop-grid-classNameic-4-col.php">HR Sheet Catalogue</a></li>
                    </ul>
                </div>
            </div>
            <div className="section-block">
                <div className="container">
                    <div className="row mt-30 mb-30">
                        <aside className="col-md-3">
                            <div className="card">
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                                            <h6 className="title">Categories</h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_1" >
                                        <div className="card-body">
                                            <form className="pb-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Search" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="filter-content collapse show" id="collapse_1">
                                                <div className="card-body">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">HR SHEET
                                    <b className="badge badge-pill badge-light float-right">12</b>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </aside>


                        {/* <div className="col-md-9">
                            <div className="row">
                                {product && product.map((item,index)=>(
  <div class="col-md-4 col-sm-6 col-12">
  <div class="classic-shop">
      <div class="classic-shop-img">
          <img src="../assets/img/shop/grid/pro-1.jpg" alt="img" />
          <div class="shop-box-overlay">
              <div class="row">
                  <div class="col-md-6 col-sm-6 col-12 pr-0">
                  <Link to={`/productDetail/${item.id}`}>
                          <div class="shop-to-card">
                              <h4><span class="fa fa-eye"></span>Details</h4>
                          </div>
                      </Link>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12 pl-0">
                      <a href="cart.php">
                          <div class="shop-buy">
                              <h4><span class="fa fa-cart-plus"></span>To Cart</h4>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div class="classic-shop-text">
          <h4>
              
          <Link to={`/productDetail/${item.id}`}>
              {item.product}
              </Link>
          <p>HR SHEET- PRIME</p>
          </h4>
          <h5>${item.priceone}</h5>
          <ul class="shop-grid-rating">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-half-empty"></i></li>
          </ul>
      </div>
  </div>
</div>
                                ))}
                              
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
