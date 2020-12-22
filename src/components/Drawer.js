import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import MyMenu from "./MyMenu";
import { Link } from "react-router-dom";

const MyDrawer = (props) => {
  const [visible, setVisible] = useState(false);
  const drawerMenuKey = ["home", "about-us", "contact-us"];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <MenuFoldOutlined onClick={showDrawer} className="drawer-icon" />

      <Drawer
        className="drawer"
        bodyStyle={{ backgroundColor: "#3fb0ac" }}
        headerStyle={{ backgroundColor: "#3fb0ac", textAlign: "center" }}
        title={
          <Link to="/admin">{props.login ? "Ram" : "Please Login First"}</Link>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}>
        <MyMenu
          mode="vertical"
          class="drawer-menu"
          defaultSelected={["home"]}
          menuKey={drawerMenuKey}></MyMenu>
      </Drawer>
    </>
  );
};

export default MyDrawer;
