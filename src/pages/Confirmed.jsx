import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import axios from "axios";

export default function Confirmed() {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const [user, setUser] = useState();
  let users;

  useEffect(() => {
    if (loggedIn === false) {
      toast.error("Please FullFill All Credentials", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      history.push("/login");
    }
    axios
      .get(`http://localhost:3001/main/shipping`)
      .then((data) => {
        setUser(data.data.user[0]);
        getLoggedIn();
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div
        className="page-title-section"
        style={{
          backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")",
        }}
      >
        <div className="container">
          <h1>Order Confirmed </h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="confirmatio.php">Order Confirmed</a>
            </li>
          </ul>
        </div>
      </div>
      <div classNameName="section-block">
        <div className="container">
          <div className="row d-flex bg-success justify-content-center">
            <div className="col-md-6">
              <div className="pt-5 pb-5 pl-2 pr-2 text-center text-center">
                <i className="fa fa-check-circle-o fa-5x text-warning"></i>
                <h1 className="text-white font-weight-bold">
                  Hello, {user && user.name}, Your order has been successful 🎉
                </h1>
                <p className="text-white">WE WILL CONTACT YOU SOON...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
