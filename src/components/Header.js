import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Logout from '../pages/Logout';

const Header = () => {
  const { loggedIn } = useContext(AuthContext)

  return (
    <div>
      {/* <div id="preloader"> 
        <div className="row loader">
          <div className="loader-icon"></div>
        </div>
      </div>*/}
      <div id="top-bar" className="hidden-sm-down">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-12">
              <div className="top-bar-welcome">
                <ul>
                  <li>Agrawal Traders</li>
                </ul>
              </div>
              <div className="top-bar-info">
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>+91 755 273 3268
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>info@agrawaltraders.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <ul className="social-icons hidden-md-down">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header>
        <nav id="navigation4" className="container navigation">
          <div className="nav-header">
            <a className="nav-brand" href="index.php">
              <img
                src="assets/img/logos/logo.png"
                className="main-logo"
                alt="logo"
                id="main_logo"
              />
            </a>
            <div className="nav-toggle"></div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu align-to-right">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/productcatalog">Product Catalog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {loggedIn === false && (<>
                <li>
                  <Link to="/login">Login</Link>
                </li>
            
              </>)
              }
              {loggedIn === true && (<>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                  
                </li>
                <li>
                  <Logout />
                </li>
              </>)
              }

            </ul>
          </div>
          <div className="cart">
            <a href="cart.php">
              <i className="fa fa-shopping-bag"></i>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
