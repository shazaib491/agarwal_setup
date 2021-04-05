import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productcatalog = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/main/products";



  useEffect(() => {
    const aboutCont = new AbortController();
    try {
      const result = fetch(url).then((result) => {
        return result.json()
      }).then((data) => {
        console.log(data);
        setData(data.post);
        return () => aboutCont.abort();
      });
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div>
      <div
        className="page-title-section"
        style={{
          backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1>Product Category</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="shop-grid-classic-4-col.php">
                Product Catalogue Category
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-block">
        <div className="container">
          <div className="row mt-30">
            {data && data.map((item, index) => (
              <div className="col-md-3 col-sm-6 col-12">
                <div className="classic-shop">
                  <div className="classic-shop-img">
                    <img src="assets/img/shop/grid/pro-1.jpg" alt="img" />
                    <div className="shop-box-overlay">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 pr-0">
                          <Link to={`/product/${item.id}`}>
                            <div className="shop-to-card">
                              <h4>
                                <span className="fa fa-eye"></span>View Catalogue
                   </h4>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="classic-shop-text">
                    <h5>
                      <a href="products.php" key={index} >{item.category}</a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
      <div className="notice-section-grey notice-section-sm border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-12">
              <div className="mt-5">
                <h6>
                  Looking for Professional Approach and Quality Services ?
                </h6>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-12">
              <div className="mt-10 right-holder-md">
                {" "}
                <a href="#" className="primary-button button-sm mt-15-xs">
                  Contact Us Today
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcatalog;
