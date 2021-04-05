const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <h3>About Us</h3>
              <div className="mt-25">
                <img src="assets/img/logos/logo-footer.png" alt="footer-logo" />
                <p className="mt-25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <div className="footer-social-icons mt-25">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
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
            <div className="col-md-3 col-sm-6 col-12">
              <h3>Quick Links</h3>
              <ul className="footer-list">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about.php">About Us</a>
                </li>
                <li>
                  <a href="testmonials.php">Testmonials</a>
                </li>
                <li>
                  <a href="category.php">Product Catalogue</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h3>Important Links</h3>
              <ul className="footer-list">
                <li>
                  <a href="login.php">Login</a>
                </li>
                <li>
                  <a href="registration.php">Registration</a>
                </li>
                <li>
                  <a href="#">Admin Login</a>
                </li>
                <li>
                  <a href="#">Staff Login</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h3>Help And Support</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Returns and Claims</a>
                </li>
                <li>
                  <a href="faq.php">Faq</a>
                </li>
                <li>
                  <a href="testmonials.php">Testmonials</a>
                </li>
                <li>
                  <a href="contact.php">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bar text-center">
            <p>
              This website is proudly developed by
              <a className="text-warning" href="https://jusmarktech.com">
                Jusmark Tech
              </a>
              | <i className="fa fa-copyright" aria-hidden="true"></i> 2021 all
              rights reserved by
              <a className="text-warning" href="#">
                Agrawal Traders
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="mystickyelements-fixed mystickyelements-position-right mystickyelements-position-screen-center mystickyelements-position-mobile-right mystickyelements-on-hover mystickyelements-size-medium mystickyelements-mobile-size-small mystickyelements-entry-effect-slide-in mystickyelements-templates-default">
        <div className="mystickyelement-lists-wrap">
          <ul className="mystickyelements-lists mysticky">
            <li className="mystickyelements-minimize ">
              <span
                className="mystickyelements-minimize minimize-position-right minimize-position-mobile-right"
                style={{ background: "#000000" }}
              >
                &rarr;
              </span>
            </li>
            <li
              id="mystickyelements-contact-form"
              className="mystickyelements-contact-form  element-desktop-on element-mobile-on"
            >
              <span
                className="mystickyelements-social-icon "
                style={{ backgroundColor: "#02367a", color: "#FFFFFF" }}
              >
                <i className="fa fa-envelope"></i>Quick Enquiry
              </span>
              <div className="element-contact-form">
                <h3 style={{ color: "#02367a" }}>
                  Quick Enquiry{" "}
                  <a href="#" className="element-contact-close">
                    <i className="fa fa-times"></i>
                  </a>
                </h3>
                <form
                  id="stickyelements-forms"
                  action=""
                  method="post"
                  autocomplete="off"
                >
                  <input
                    className=" required"
                    type="text"
                    id="contact-form-name"
                    name="contact-form-name"
                    value=""
                    placeholder="Name"
                    required
                    autocomplete="off"
                  />
                  <input
                    className=" required"
                    type="tel"
                    id="contact-form-phone"
                    name="contact-form-phone"
                    value=""
                    placeholder="Phone"
                    required
                    autocomplete="off"
                  />
                  <input
                    className="email  required"
                    type="email"
                    id="contact-form-email"
                    name="contact-form-email"
                    value=""
                    placeholder="Email"
                    required
                    autocomplete="off"
                  />
                  <textarea
                    className=""
                    id="contact-form-message"
                    name="contact-form-message"
                    placeholder="Message"
                  ></textarea>
                  <input
                    id="stickyelements-submit-form"
                    type="submit"
                    name="contact-form-submit"
                    value="Submit"
                    style={{ backgroundColor: "#02367a", color: "#FFFFFF" }}
                  />
                  <input
                    type="hidden"
                    name="nonce"
                    value="60340071c7743161402072160340071c774b"
                  />
                  <input type="hidden" name="form_id" value="e36b307958" />
                  <input
                    type="hidden"
                    id="stickyelements-page-link"
                    name="stickyelements-page-link"
                    value="#"
                  />
                </form>
                <p
                  className="mse-form-success-message"
                  id="mse-form-error"
                  style={{ display: "none" }}
                ></p>
              </div>
            </li>
            <li
              id="mystickyelements-social-whatsapp"
              className="mystickyelements-social-whatsapp  element-desktop-on element-mobile-on"
            >
              <span
                className="mystickyelements-social-icon social-whatsapp"
                style={{ background: "#26D367" }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=api.whatsapp.com/send?phone=9111778778&amp;text=Hi,%20I'm%20intrested%20in%20 Agrawal Traders Services"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </span>
              <span
                className="mystickyelements-social-text "
                style={{ background: "#26D367" }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=api.whatsapp.com/send?phone=9111778778&amp;text=Hi,%20I'm%20intrested%20in%20 Agrawal Traders Services"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
