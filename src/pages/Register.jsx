import { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Register = () => {
  // location hooks
  const [{ alt, src }, setImg] = useState({
    src: "assets/img/placeholder/download.png",
    alt: "Upload an Image",
  });
  // location hooks
  const { getLoggedIn } = useContext(AuthContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [firmname, setFirmname] = useState();
  const [products, setProducts] = useState();
  const [state, setState] = useState();
  const [states, setStates] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState();
  const [area, setArea] = useState();
  const [areas, setAreas] = useState();
  const [pincode, setPincode] = useState();
  const [address, setaddress] = useState();
  const [gid, setGid] = useState();
  const [gstno, setGstno] = useState();
  const [gst, setGst] = useState();
  const [pancardno, setPancardno] = useState();
  const [profileimage, setProfileimage] = useState();
  const [godown, setGodown] = useState([]);
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
        pancardno,
      };

      let data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("password", password);
      data.append("cpassword", cpassword);
      data.append("firmname", firmname);
      data.append("products", products);
      data.append("state", state);
      data.append("city", city);
      data.append("area", area);
      data.append("pincode", pincode);
      data.append("address", address);
      data.append("gid", gid);
      data.append("gstno", gstno);
      data.append("gst", gst);
      data.append("pancardno", pancardno);
      data.append("image", profileimage);
      await axios.post("http://localhost:3001/auth/register", data, {
        withCredentials: true,
      });
      await getLoggedIn();
      toast.success("Account Registered Welcome User", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const state_url = "http://localhost:3001/locations/state";
    let city_url;
    let area_url;
    let pincode_url;
    const getState = async () => {
      try {
        const stateData = await axios.get(state_url);
        setStates(stateData.data.state);
        city_url = `http://localhost:3001/locations/city?id=${state}`;
        if (city_url) {
          getCity();
        }
      } catch (error) {
        console.log(error);
      }
    };
    getState();

    const getCity = async () => {
      try {
        if (isNaN(state)) {
          return;
        }
        const stateCity = await axios.get(city_url);
        setCities(stateCity.data.city);
        area_url = `http://localhost:3001/locations/area?id=${city}`;
        if (area_url) {
          getArea();
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getArea = async () => {
      try {
        const areaData = await axios.get(area_url);

        setAreas(areaData.data.area);
        pincode_url = `http://localhost:3001/locations/pincode?id=${area}`;
        if (pincode_url) {
          getPincode();
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getPincode = async () => {
      try {
        const pincodeData = await axios.get(pincode_url);
        setPincode(pincodeData.data.pincode[0].pincode);
      } catch (error) {}
    };
  }, [state, city, area, pincode]);

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
    setProfileimage(e.target.files[0]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/gowdown`)
      .then((response) => {
        setGodown([...response.data.godown]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Preffered Password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*******"
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
                        onChange={(e) => setCpassword(e.target.value)}
                        placeholder="*******"
                        value={cpassword}
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
                        name="mobile_no"
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firmname"
                        placeholder="firmname"
                        onChange={(e) => setFirmname(e.target.value)}
                        value={firmname}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firmname"
                        placeholder="Products"
                        onChange={(e) => setProducts(e.target.value)}
                        value={products}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Address "
                        placeholder="Address"
                        onChange={(e) => setaddress(e.target.value)}
                        value={address}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        name="state"
                        onChange={(e) => setState(e.target.value)}
                      >
                        {states &&
                          states.map((state, index) => (
                            <option key={index} value={state.id}>
                              {state.state}
                            </option>
                          ))}

                        <option>Select State</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      >
                        <option>Select City</option>
                        {cities &&
                          cities.map((city, index) => (
                            <option key={index} value={city.id}>
                              {city.city}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select
                        className="form-control"
                        onChange={(e) => setArea(e.target.value)}
                      >
                        <option>Select area</option>
                        {areas &&
                          areas.map((area, index) => (
                            <option key={index} value={area.id}>
                              {area.area}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="pincode"
                        placeholder="Pincode"
                        onChange={(e) => setPincode(e.target.value)}
                        value={pincode}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="GST Number"
                        placeholder="GST Number"
                        onChange={(e) => setGst(e.target.value)}
                        value={gst}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="PAN"
                        placeholder="Permanent Account Number (PAN)"
                        onChange={(e) => setPancardno(e.target.value)}
                        value={pancardno}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="PAN"
                        placeholder="Gst no"
                        onChange={(e) => setGstno(e.target.value)}
                        value={gstno}
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        className="form-control"
                        onChange={(e) => setGid(e.target.value)}
                        value={gid}
                      >
                        <option>Select godown</option>
                        {godown &&
                          godown.map((godowns, index) => (
                            <option key={index} value={godowns.id}>
                              {godowns.godown}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-md-3 m-auto">
                      <img
                        className=""
                        src={src}
                        alt={alt}
                        className="form-img__img-preview"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-file mt-2">
                        <input
                          type="file"
                          className="custom-file-input w-50"
                          id="customFile"
                          name="profileImage"
                          onChange={handleImg}
                        />

                        <label
                          htmlFor=""
                          className="custom-file-label w-50 m-auto mt-5"
                          for="customFile"
                        >
                          profileImage
                        </label>
                      </div>
                    </div>

                    <div className="col-md-3 mb-30 mx-auto d-block">
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
