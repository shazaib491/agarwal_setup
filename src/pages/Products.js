import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

export default function Products() {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const url = `http://localhost:3001/category/product?id=${id}`;
    useEffect(async () => {
        const aboutCont = new AbortController();
        try {
            const result = await fetch(url);
            const data = await result.json();
            setProduct(data.post);
            console.log(data.post);
        } catch (error) {
            console.log(error);
        }
        return () => aboutCont.abort();
    }, [url]);
    return (
        <div>
            <div className="page-title-section"
                style={{ backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")" }}>
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


                        <div className="col-md-9">
                            <div className="row">
                                {product && product.map((item,index) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 col-12">
                                            <div className="classNameic-shop">
                                                <div className="classNameic-shop-img">
                                                    <img src="../assets/img/shop/grid/pro-1.jpg" alt="img" />
                                                    <div className="shop-box-overlay">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-6 col-12 pr-0">
                                                                <Link to={`/productDetail/${item.id}`}>
                                                                    <div className="shop-to-card">
                                                                        <h4><span className="fa fa-eye"></span>Details</h4>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-12 pl-0">
                                                                <a href="cart.php">
                                                                    <div className="shop-buy">
                                                                        <h4><span className="fa fa-cart-plus"></span>To Cart</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="classNameic-shop-text">
                                                    <h4><a href="product-detail.php" key={index}  >{item.product}</a></h4>
                                                    <p>HR SHEET- PRIME</p>
                                                    <h5>₹10000.00</h5>
                                                    <ul className="shop-grid-rating">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-empty"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                {/* <div className="col-md-4 col-sm-6 col-12">
                                    <div className="classNameic-shop">
                                        <div className="classNameic-shop-img">
                                            <img src="../assets/img/shop/grid/pro-1.jpg" alt="img" />
                                            <div className="shop-box-overlay">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-12 pr-0">
                                                        <a href="product-detail.php">
                                                            <div className="shop-to-card">
                                                                <h4><span className="fa fa-eye"></span>Details</h4>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-12 pl-0">
                                                        <a href="cart.php">
                                                            <div className="shop-buy">
                                                                <h4><span className="fa fa-cart-plus"></span>To Cart</h4>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="classNameic-shop-text">
                                            <h4><a href="product-detail.php">HR SHEET</a></h4>
                                            <p>HR SHEET- PRIME</p>
                                            <h5>₹10000.00</h5>
                                            <ul className="shop-grid-rating">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-empty"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-md-4 col-sm-6 col-12">
                                    <div className="classNameic-shop">
                                        <div className="classNameic-shop-img">
                                            <img src="../assets/img/shop/grid/pro-1.jpg" alt="img" />
                                            <div className="shop-box-overlay">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-12 pr-0">
                                                        <a href="product-detail.php">
                                                            <div className="shop-to-card">
                                                                <h4><span className="fa fa-eye"></span>Details</h4>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-12 pl-0">
                                                        <a href="cart.php">
                                                            <div className="shop-buy">
                                                                <h4><span className="fa fa-cart-plus"></span>To Cart</h4>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="classNameic-shop-text">
                                            <h4><a href="product-detail.php">HR SHEET</a></h4>
                                            <p>HR SHEET- PRIME</p>
                                            <h5>₹10000.00</h5>
                                            <ul className="shop-grid-rating">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-empty"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
