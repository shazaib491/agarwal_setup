const About = () => {
    return (
        <div>
            <div className="page-title-section" style={{
              backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
         <div className="container">
            <h1>About Us</h1>
            <ul>
               <li><a href="index.php">Home</a></li>
               <li><a href="about.php">About</a></li>
            </ul>
         </div>
      </div>
      <div className="section-block">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-6 col-12">
                  <div className="pr-30-md">
                     <div className="section-heading">
                        <h4>Welcome To Agrawal Trader</h4>
                     </div>
                     <div className="section-heading-line-left"></div>
                     <div className="text-content-big mt-20">
                        <p>Agrawal Traders - Wholesale Distributor of hr sheet, pc sheet &amp; galvanized steel sheet in Bhopal, Madhya Pradesh.</p>
                     </div>
                     <div className="mt-20">
                        <ul className="primary-list">
                           <li><i className="fa fa-check-square"></i>Immigration consultant, Information technology consulting</li>
                           <li><i className="fa fa-check-square"></i>Consultant pharmacist Creative consultant</li>
                           <li><i className="fa fa-check-square"></i>Employment consultant Environmental consultant</li>
                           <li><i className="fa fa-check-square"></i>Independent contractor, Permatemp</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-sm-6 col-12"> <img src="assets/img/content/home5.jpg" className="rounded-border shadow-primary mt-15-xs" alt="img"/> </div>
            </div>
         </div>
      </div>
      <div className="section-block-bg" style={{
              backgroundImage: "url(" + "assets/img/bg/bg11.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
         <div className="container">
            <div className="row">
               <div className="col-md-7 col-sm-12 col-12 offset-md-5">
                  <div className="section-heading">
                     <span>Improve your business with us !</span> 
                     <h4>First class business solutions since 1995</h4>
                     <div className="section-heading-line-left"></div>
                     <div className="text-content-big mt-10">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6 col-sm-6 col-12">
                        <div className="feature-flex-square">
                           <div className="clearfix">
                              <div className="feature-flex-square-icon"> <i className="icon-target"></i> </div>
                              <div className="feature-flex-square-content">
                                 <h4><a href="#">Business Solutions</a></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, nunc ut.</p>
                                 <a href="#" className="feature-flex-square-content-button">Learn More</a> 
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-6 col-12">
                        <div className="feature-flex-square">
                           <div className="clearfix">
                              <div className="feature-flex-square-icon"> <i className="icon-diamond"></i> </div>
                              <div className="feature-flex-square-content">
                                 <h4><a href="#">Development Manager</a></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, nunc ut.</p>
                                 <a href="#" className="feature-flex-square-content-button">Learn More</a> 
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-6 col-12">
                        <div className="feature-flex-square">
                           <div className="clearfix">
                              <div className="feature-flex-square-icon"> <i className="icon-networking"></i> </div>
                              <div className="feature-flex-square-content">
                                 <h4><a href="#">Global Consumer insights</a></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, nunc ut.</p>
                                 <a href="#" className="feature-flex-square-content-button">Learn More</a> 
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-6 col-12">
                        <div className="feature-flex-square">
                           <div className="clearfix">
                              <div className="feature-flex-square-icon"> <i className="icon-hourglass"></i> </div>
                              <div className="feature-flex-square-content">
                                 <h4><a href="#">Professional Approach</a></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, nunc ut.</p>
                                 <a href="#" className="feature-flex-square-content-button">Learn More</a> 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="section-clients border-top border-bottom">
         <div className="container">
            <div className="owl-carousel owl-theme clients" id="clients">
               <div className="item"> <img src="assets/img/partners/partner1.png" alt="partner-image"/> </div>
               <div className="item"> <img src="assets/img/partners/partner2.png" alt="partner-image"/> </div>
               <div className="item"> <img src="assets/img/partners/partner3.png" alt="partner-image"/> </div>
               <div className="item"> <img src="assets/img/partners/partner4.png" alt="partner-image"/> </div>
               <div className="item"> <img src="assets/img/partners/partner5.png" alt="partner-image"/> </div>
               <div className="item"> <img src="assets/img/partners/partner6.png" alt="partner-image"/> </div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default About;