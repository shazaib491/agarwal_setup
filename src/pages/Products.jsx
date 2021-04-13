import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
toast.configure();

export default function Products() {
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

  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [godown, setGodown] = useState([]);
  const [added, isAdded] = useState(false);
  const url = `http://localhost:3001/category/product?id=${id}`;
  const disabled = false;
  useEffect(() => {
    const aboutCont = new AbortController();
    try {
      axios.get(url).then((response) => {
        setProduct(response.data.post);
        setCategory(response.data.category);
        setGodown(response.data.godown);
      });
    } catch (error) {
      console.log(error);
    }
    return () => aboutCont.abort();
  }, [url]);

  const onSelectGodown = async (e) => {
    let id = e.target.value;
    let categories = new Array();
    let stock;
    let stockData;
    let finalArray = new Array();
    try {
      stock = await axios.get(
        `http://localhost:3001/category/getStock?id=${id}`
      );
      stockData = stock.data.stock;
      const category = await axios.get(
        `http://localhost:3001/category/getCategoryByStock`
      );
      categories = category.data.category;
      categories.forEach((category, index) => {
        stockData.forEach((stock) => {
          if (category.id === stock.cid) {
            finalArray.push(category);
          }
        });
      });
      let jsonObject = finalArray.map(JSON.stringify);
      let uniqueSet = new Set(jsonObject);
      let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      setCategory([...uniqueArray]);
      let allProducts = new Array();
      const products = await axios.get(
        `http://localhost:3001/category/getProductByStock`
      );
      allProducts = products.data.products;
      let finalProduct = new Array();
      allProducts.forEach((productsss) => {
        stockData.forEach((stock) => {
          if (productsss.cid === stock.cid) {
            finalProduct.push(productsss);
          }
        });
      });
      let jsonObjects = finalProduct.map(JSON.stringify);
      let uniqueSets = new Set(jsonObjects);
      let uniqueArrays = Array.from(uniqueSets).map(JSON.parse);
      setProduct([...uniqueArrays]);
    } catch (error) {
      console.log(error);
    }
  };
  let [checked, isChecked] = useState(true);
  const onCategory = async (e, cid) => {
    isChecked(!checked);
    if (checked) {
      let allProducts = new Array();
      const products = await axios.get(
        `http://localhost:3001/category/getCategoryByProduct?id=${cid}`
      );
      allProducts = products.data.product;
      setProduct([...allProducts]);
    } else {
      console.log("not checkwd");
    }
  };

  

  return (
    <div>
      <div
        className="page-title-section"
        style={{
          backgroundImage: "url(" + "../assets/img/bg/pagetitle.jpg" + ")",
        }}
      >
        <div className="container">
          <h1>HR Sheet Catalogue</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="shop-grid-classNameic-4-col.php">HR Sheet Catalogue</a>
            </li>
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
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      className=""
                    >
                      <h6 className="title">Categories</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                      <div
                        className="filter-content collapse show"
                        id="collapse_1"
                      >
                        <div className="card-body">
                          {category &&
                            category.map((item, index) => (
                              <label
                                className="custom-control custom-checkbox"
                                key={index}
                              >
                                <input
                                  type="checkbox"
                                  onChange={(e) => onCategory(e, item.id)}
                                  className="custom-control-input"
                                />
                                <div
                                  className="custom-control-label"
                                  key={index}
                                >
                                  {item.category}
                                  <b
                                    className="badge badge-pill badge-light float-right"
                                    key={index}
                                  >
                                    {" "}
                                    {index + 1}
                                  </b>
                                </div>
                              </label>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </aside>

            <div className="col-md-9">
              <div className="row">
                <div class="col-md-12 col-sm-12 col-12">
                  <div class="pull-right">
                    <select
                      name="godown"
                      className="form-control"
                      onChange={(e) => onSelectGodown(e, godown)}
                    >
                      <option isOptionDisabled={disabled}>
                        --SELECT GODOWN--
                      </option>
                      {godown &&
                        godown.map((item, index) => (
                          <option value={item.id}>{item.godown}</option>
                        ))}
                    </select>
                  </div>
                </div>
                {product &&
                  product.map((item, index) => (
                    <Cart item={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
