import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Login = () => {
  const history=useHistory();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const { getLoggedIn } = useContext(AuthContext)
  const login = async (e) => {
    try {
      e.preventDefault();
      const loginData = {
        email,
        password,
      }
      await axios.post("http://localhost:3001/auth/login", loginData,
        { withCredentials: true })
      await getLoggedIn();
      
      toast.success('Welcome User', { position: toast.POSITION.BOTTOM_RIGHT })

      history.push("/dashboard");
    } catch (error) {
      toast.error('Wrong Credentials', { position: toast.POSITION.BOTTOM_RIGHT })
      
      console.log(error);
    }
  }

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
          <h1>Login</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="=login.php">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="contact-form-box mt-30 mr-30">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="section-heading">
                      <h4>Welcome Back!!</h4>
                      <div className="section-heading-line-left"></div>
                    </div>
                    <form className="contact-form" onSubmit={login}>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" name="email" value={email}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            id="password-field"
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="*******"
                            className="form-control" value={password}
                          />
                          <span
                            toggle="#password-field"
                            className="fa fa-fw fa-eye field-icon toggle-password"
                          ></span>
                        </div>

                        <div className="col-md-6 mb-30">
                          <div className="center-holder">
                            <button type="submit">Submit </button>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <p>
                            Don't have an account?
                            <a href="registration.php"> Register Here</a>
                          </p>
                        </div>
                        <div className="col-md-12">
                          <p>
                            If forgot password?
                            <a href="forgot.php"> Click Here</a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
