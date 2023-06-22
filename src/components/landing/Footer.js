import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <a href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
            <i className="flaticon-043-teddy-bear"></i>
            <span className="text-white">KidKinder</span>
          </a>
          <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
          <div className="d-flex justify-content-start mt-4">
            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Get In Touch</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Address</h5>
              <p>123 Street, New York, USA</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Email</h5>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Phone</h5>
              <p>+012 345 67890</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Classes</a>
            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Teachers</a>
            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Blog</a>
            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Newsletter</h3>
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required />
            </div>
            <div>
              <button className="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid pt-5" style={{ borderTop: '1px solid rgba(23, 162, 184, .2)' }}>
        <p className="m-0 text-center text-white">
          &copy; <a className="text-primary font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
          by
          <a className="text-primary font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
