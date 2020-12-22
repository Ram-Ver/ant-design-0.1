import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

function MyFooter(props) {
  return <Footer className="footer">{props.children}</Footer>;
}

export default MyFooter;
