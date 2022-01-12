import React from "react";
import { Container } from "react-bootstrap";
import "./ExtraSection.css";

const ExtraSectioin = () => {
  return (
    <Container className="py-5 mt-5" id="extra_section">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 containt_main" >
          <div>
            <img
              src="https://klbtheme.com/machic/wp-content/plugins/machic-core/elementor/images/banner-box.jpg"
              width="100%"
              alt=""
            />
          </div>
          <div className="contant_sub">
            <a href="javascript(0)">Weekend Discount</a>
            <h5>Home Speaker</h5>
            <p className=" text-muted pl-5">
              Don't miss the last opportunity.
            </p>
            <button className="btn btn-dark">Read More</button>
          </div>

        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 pl-3  containt_main">
          <div>
            <img src="https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-2.jpg" alt="" />
          </div>
          <div className="contant_sub">
            <a href="javascript(0)">Weekend Discount</a>
            <h5>Home Speaker</h5>
            <p className=" text-muted pl-5">
              Don't miss the last opportunity.
            </p>
            <button className="btn btn-dark">Read More</button>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default ExtraSectioin;
