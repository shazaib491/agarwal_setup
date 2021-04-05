import { useState, useContext } from "react";
import axios from 'axios';
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Register = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [desgination, setDesgination] = useState();
  const [department, setDepartment] = useState();
  const [company_nm, setCompany_nm] = useState();
  const [streetHouse, setStreetHouse] = useState();
  const [address_I, setAddress_I] = useState();
  const [address_II, setAddress_II] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [shipping_address, setShipping_address] = useState();
  const [shipping_street_no, setShipping_street_no] = useState();
  const [shipping_address_I, setShipping_address_I] = useState();
  const [shipping_address_II, setShipping_address_II] = useState();
  const [shipping_country, setShipping_country] = useState();
  const [shipping_state, setShipping_state] = useState();
  const [shipping_city, setShipping_city] = useState();
  const [shipping_pincode, setshipping_pincode] = useState();
  const [phone_no, setPhone_no] = useState();
  const [mobile_no, setMobile_no] = useState();
  const [fax_number, setFax_number] = useState();
  const [email, setEmail] = useState();
  const [alternate_email, setAlternate_email] = useState();
  const [preferred_username, setPreferred_username] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setpasswordVerfiy] = useState();
  const [gst, setGst] = useState();
  const [pancard, setPancard] = useState();
  const history = useHistory();

  const registered = async (e) => {
    try {
      e.preventDefault();
      const registerData = {
        fname,
        lname,
        desgination,
        department,
        company_nm,
        streetHouse,
        address_I,
        address_II,
        country,
        state,
        city,
        pincode,
        shipping_address,
        shipping_street_no,
        shipping_address_I,
        shipping_address_II,
        shipping_country,
        shipping_state,
        shipping_city,
        shipping_pincode,
        phone_no,
        mobile_no,
        fax_number,
        email,
        alternate_email,
        preferred_username,
        password,
        cpassword,
        gst,
        pancard
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
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)} value={fname}
                      />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="lname" placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)} value={lname}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Designation"
                        placeholder="Designation"
                        onChange={(e) => setDesgination(e.target.value)} value={desgination}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Department"
                        placeholder="Department"
                        onChange={(e) => setDepartment(e.target.value)} value={department}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Company Name"
                        placeholder="Company Name"
                        onChange={(e) => setCompany_nm(e.target.value)} value={company_nm}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Street/House No"
                        placeholder="Street/House No"
                        onChange={(e) => setStreetHouse(e.target.value)} value={streetHouse}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address Line 1"
                        placeholder="Address Line 1"
                        onChange={(e) => setAddress_I(e.target.value)} value={address_I}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address Line 2"
                        placeholder="Address Line 2"
                        onChange={(e) => setAddress_II(e.target.value)} value={address_II}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        onChange={(e) => setCountry(e.target.value)} value={country}
                      >
                        <option value="AL">Select Country</option>
                        <option value="AK">India</option>
                        <option value="AZ">Shrilanka</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        onChange={(e) => setState(e.target.value)} value={state}
                      >
                        <option value="AL">Select State</option>
                        <option value="AK">MP</option>
                        <option value="AZ">UP</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        onChange={(e) => setCity(e.target.value)} value={city}
                      >
                        <option value="AL">Select City</option>
                        <option value="AK">Bhopal</option>
                        <option value="AZ">Sagar</option>
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
                      <div className="form-check shipping" onChange={(e) => setShipping_address(e.target.value)} value={shipping_address}>
                        <label>Is Shipping Address same as Billing ?</label>
                        <label className="redio_s">
                          Yes
                          <input type="radio" checked="checked" value="checked" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="redio_s">
                          No
                          <input type="radio" name="radio" value="unchecked" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Street/House No"
                        placeholder="Shipping Street/House No"
                        onChange={(e) => setShipping_street_no(e.target.value)} value={shipping_street_no}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address Line 1"
                        placeholder="Shipping Address Line 1"
                        onChange={(e) => setShipping_address_I(e.target.value)} value={shipping_address_I}


                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address Line 2"
                        placeholder="Shipping Address Line 2"
                        onChange={(e) => setShipping_address_II(e.target.value)} value={shipping_address_II}

                      />
                    </div>
                    <div className="col-md-6">
                      <select className=""
                        onChange={(e) => setShipping_country(e.target.value)} value={shipping_country}
                      >
                        <option value="AL">Select Shipping Country</option>
                        <option value="AK">India</option>
                        <option value="AZ">Shrilanka</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        onChange={(e) => setShipping_state(e.target.value)} value={shipping_state}
                      >
                        <option value="AL">Select Shipping State</option>
                        <option value="AK">MP</option>
                        <option value="AZ">UP</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        onChange={(e) => setShipping_city(e.target.value)} value={shipping_city}

                      >
                        <option value="AL">Select Shipping City</option>
                        <option value="AK">Bhopal</option>
                        <option value="AZ">Sagar</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="pincode"
                        placeholder="Shipping Pincode"
                        onChange={(e) => setshipping_pincode(e.target.value)} value={shipping_pincode}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        pattern="/^-?\d+\.?\d*$/"
                        onKeyPress="if(this.value.length==11) return false;"
                        name="phone_no"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone_no(e.target.value)} value={phone_no}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        pattern="/^-?\d+\.?\d*$/"
                        onKeyPress="if(this.value.length==10) return false;"
                        name="mobile_no"
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile_no(e.target.value)} value={mobile_no}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Fax Number"
                        placeholder="Fax Number"
                        onChange={(e) => setFax_number(e.target.value)} value={fax_number}

                      />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} value={email}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="Alternate Email"
                        placeholder="Alternate Email"
                        onChange={(e) => setAlternate_email(e.target.value)} value={alternate_email}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Preferred Username"
                        placeholder="Preferred Username"
                        onChange={(e) => setPreferred_username(e.target.value)} value={preferred_username}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Preffered Password"
                        onChange={(e) => setpassword(e.target.value)} placeholder="*******"
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
                        onChange={(e) => setpasswordVerfiy(e.target.value)} placeholder="*******" value={cpassword}
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
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
                        onChange={(e) => setPancard(e.target.value)} value={pancard}

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
