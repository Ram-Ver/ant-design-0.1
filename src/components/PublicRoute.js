import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import Categories from "../containers/categories";

function PublicRoute(props) {
  return (
    <>
      <Navbar props={props} />
      <Categories />
      {props.children}
      <MyFooter>
        <Row className="footer-row">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Col>
          <Row style={{ width: "100%" }}>
            <Col
              span={4}
              offset={20}
              style={{ fontSize: "15px", fontWeight: "800" }}>
              copyright ant design
            </Col>
          </Row>
        </Row>
      </MyFooter>
    </>
  );
}

export default PublicRoute;
