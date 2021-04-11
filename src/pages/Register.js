import { useState, useContext } from "react";
import axios from 'axios';
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Register = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [firmname, setFirmname] = useState();
  const [products, setProducts] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [pincode, setPincode] = useState();
  const [address, setaddress] = useState();
  const [gid, setGid] = useState();
  const [gstno, setGstno] = useState();
  const [gst, setGst] = useState();
  const [pancardno, setPancardno] = useState();
  // const [pancard, setPancard] = useState();
  // const [profileimage, setProfileimage] = useState();

  const history = useHistory();

  const registered = async (e) => {
    try {
      e.preventDefault();
      const registerData = {
        name,
        email,
        mobile,
        password,
        cpassword,
        firmname,
        products,
        state,
        city,
        area,
        pincode,
        address,
        gid,
        gstno,
        gst,
        pancardno
      }
      await axios.post("http://localhost:3001/auth/register", registerData, { withCredentials: true })
      await getLoggedIn();
      toast.success('Account Registered Welcome User', { position: toast.POSITION.BOTTOM_RIGHT })
      history.push("/dashboard");
    } catch (error) {
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
          <h1>Registration</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="contact.php">Registration</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="section-heading mt-15">
                <h4>Create your own Account</h4>
                <div className="section-heading-line-left"></div>
              </div>
              <div className="contact-form-box mt-30">
                <form className="contact-form" onSubmit={registered}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)} value={name}
                      />
                    </div>
                  
                    <div className="col-md-6">
                      <input type="text" name="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} value={email}
                      />
                    </div>
                 
                 
                    <div className="col-md-6">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Preffered Password"
                        onChange={(e) => setPassword(e.target.value)} placeholder="*******"
                        value={password}
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="col-md-6">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="passwordVerfiy"
                        placeholder="Confirm Password"
                        onChange={(e) => setCpassword(e.target.value)} placeholder="*******" value={cpassword}
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>

                        <div className="col-md-6">
                      <input
                        type="number"
                        pattern="/^-?\d+\.?\d*$/"
                        onKeyPress="if(this.value.length==10) return false;"
                        name="mobile_no"
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile(e.target.value)} value={mobile}

                      />
                    </div>
                   
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firmname"
                        placeholder="firmname"
                        onChange={(e) => setFirmname(e.target.value)} value={firmname}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firmname"
                        placeholder="Products"
                        onChange={(e) => setProducts(e.target.value)} value={products}
                      />
                    </div>

                
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address "
                        placeholder="Address"
                        onChange={(e) => setaddress(e.target.value)} value={address}
                      />
                    </div>
                    <div className="col-md-6">
                      <select className="form-control"
                        onChange={(e) => setState(e.target.value)} value={state}
                      >
                        <option value="1">Select State</option>
                        <option value="2">MP</option>
                        <option value="3">UP</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                      className="form-control"
                        onChange={(e) => setCity(e.target.value)} value={city}
                      >
                        <option value="1">Select City</option>
                        <option value="2">Bhopal</option>
                        <option value="3">Sagar</option>
                      </select>
                    </div>


                    <div className="col-md-6">
                      <select
                      className="form-control"
                        onChange={(e) => setArea(e.target.value)} value={area}
                      >
                        <option value="1">Select area</option>
                        <option value="2">Bhopal</option>
                        <option value="3">Sagar</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="pincode"
                        placeholder="Pincode"
                        onChange={(e) => setPincode(e.target.value)} value={pincode}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="GST Number"
                        placeholder="GST Number"
                        onChange={(e) => setGst(e.target.value)} value={gst}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="PAN"
                        placeholder="Permanent Account Number (PAN)"
                        onChange={(e) => setPancardno(e.target.value)} value={pancardno}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="PAN"
                        placeholder="Gst no"
                        onChange={(e) => setGstno(e.target.value)} value={gstno}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="PAN"
                        placeholder="gid no"
                        onChange={(e) => setGid(e.target.value)} value={gid}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="custom-file mt-2">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                          name="filename"
                        />
                        <label className="custom-file-label" for="customFile">
                          Upload GST Certificate
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="custom-file mt-2">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                          name="filename"
                        />
                        <label className="custom-file-label" for="customFile">
                          Upload PAN Card
                        </label>
                      </div>
                    </div>

                    <div className="col-md-3 mb-30">
                      <div className="center-holder">
                        <button type="submit">Submit </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
