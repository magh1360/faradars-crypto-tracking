import React from "react";
import contactImg from "../assets/images/contact-us.png"
const FAQPage = () => {

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 bg-info p-3 rounded ">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row   align-items-center mt-3">
        <div className="col-md-7 ">
          <div>
            <h3 className="text-primary">How to contact us</h3>
            <h5>0912 555 5555</h5>
            <h5>021 222222222</h5>
            <h5>test@faradars.com</h5>
          </div>
          <div className="mt-3">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Please type your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <input type="text" className="form-control" placeholder="Please type your message" />
            </div>
            <button className="btn btn-outline-primary ms-3" >Send</button>
          </div>
        </div>

        <div className="col-md-5 text-center">
          <img src={contactImg} alt="about us" className="img-fluid about-img" />
        </div>
      </div>

    </div>
  );
};
export default FAQPage;