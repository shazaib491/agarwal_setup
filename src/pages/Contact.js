import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const enquiry = async (e) => {
    e.preventDefault();
    try {
      const query = {
        name, email, message
      }
      const serverRes = await axios.post("http://localhost:3001/enquiry", query)
      console.log(serverRes.data);
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
          <h1>Contact</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="contact.php">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-7 col-12">
              <div className="section-heading mt-15">
                <h4>Let's Talk about Your Business</h4>
                <div className="section-heading-line-left"></div>
              </div>
              <div className="contact-form-box mt-30">
                <form className="contact-form" onSubmit={enquiry} >
                  <div className="row">
                    {/* <div className="col-md-12">
                      {" "}
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                      />{" "}
                    </div> */}
                    <div className="col-md-6 col-sm-6 col-12">
                      {" "}
                      <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />{" "}
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      {" "}
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="E-mail"
                      />{" "}
                    </div>
                    <div className="col-md-12">
                      {" "}
                      <textarea
                        name="message"
                        placeholder="Message"
                        onChange={(e) => setmessage(e.target.value)}
                      ></textarea>{" "}
                    </div>
                    <div className="col-md-12 mb-30">
                      <div className="center-holder">
                        {" "}
                        <input  type="submit" value="Send Message" />
                          {" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-sm-5 col-12">
              <div className="contact-info-box">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="contact-info-section">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 col-4 center-holder">
                          {" "}
                          <i className="fa fa-phone"></i>{" "}
                        </div>
                        <div className="col-md-10 col-sm-10 col-8">
                          <h4>Call Us</h4>
                          <p>0755 273 3268</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="contact-info-section">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 col-4 center-holder">
                          {" "}
                          <i className="fa fa-envelope-open"></i>{" "}
                        </div>
                        <div className="col-md-10 col-sm-10 col-8">
                          <h4>Email</h4>
                          <p>info@agrawaltraders.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="contact-info-section">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 col-4 center-holder">
                          {" "}
                          <i className="fa fa-globe"></i>{" "}
                        </div>
                        <div className="col-md-10 col-sm-10 col-8">
                          <h4>Our Location</h4>
                          <p> 430-433, Categorised Market, New Kabad Khana,</p>
                          <p> Bhopal, Madhya Pradesh 462018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="contact-info-section">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 col-4 center-holder">
                          {" "}
                          <i className="fa fa-clock-o"></i>{" "}
                        </div>
                        <div className="col-md-10 col-sm-10 col-8">
                          <h4>Working Hours</h4>
                          <p>Mon-Sat 09:00 - 19:00</p>
                          <p>Sun 10:00 - 13:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="map" className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14660.857069154808!2d77.4076853!3d23.2716629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22ea81bab89333da!2sAgrawal%20Traders%20(Iron%20%26%20Steel%20Merchants)!5e0!3m2!1sen!2sin!4v1616241996249!5m2!1sen!2sin"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
