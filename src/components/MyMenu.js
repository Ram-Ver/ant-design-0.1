import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { Item } = Menu;
function MyMenu(props) {
  return (
    <>
      <Menu
        mode={props.mode}
        className={`${props.class}`}
        theme="dark"
        defaultSelectedKeys={props.defaultSelected}>
        {props.menuKey.map((menu) => (
          <Item key={menu} className={props.menuItem}>
            <Link
              to={
                menu === "home"
                  ? "/"
                  : menu === "about-us"
                  ? "/about-us"
                  : menu === "contact-us"
                  ? "/contact-us"
                  : null
              }>
              <span style={{ textTransform: "uppercase" }}>{menu}</span>
            </Link>
          </Item>
        ))}
        {props.children}
      </Menu>
    </>
  );
}

export default MyMenu;
