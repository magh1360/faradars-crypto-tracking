import React from "react";
import aboutImg from "../assets//images/about-us.png";
const FAQPage = () => {

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 bg-info p-3 rounded ">
          <h3>About Us</h3>
        </div>
      </div>
      <div className="row   align-items-center ">
        <div className="col-md-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores animi, aliquam praesentium harum ducimus deleniti aspernatur reiciendis non quod consequatur repellendus saepe voluptate aperiam architecto dolorum nobis vel quaerat quo hic rem, eaque velit tenetur minima! Voluptatem sequi incidunt modi ullam ducimus voluptates iure et blanditiis voluptate dolore tempora quaerat maiores praesentium libero, eos, dolor enim! Nam, aliquid. Tempore omnis nemo eligendi maiores nulla repudiandae quia odit asperiores illum, vel cupiditate tempora excepturi aliquid! Officia doloribus facere voluptatum eaque mollitia consequatur quas error! Quas, asperiores. Illum, rem amet doloribus, voluptatum laborum in quod dolorem vel labore dicta, a optio.
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="about us" className="img-fluid about-img" />
        </div>
      </div>

    </div>
  );
};
export default FAQPage;