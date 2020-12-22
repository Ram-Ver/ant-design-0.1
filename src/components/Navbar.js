import React, { useEffect } from "react";
import { Layout, Row, Col, Dropdown, Avatar } from "antd";
import Login from "../containers/Login";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import MyDrawer from "./Drawer";
import MyMenu from "./MyMenu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const { Header } = Layout;
function Navbar(props) {
  const history = useHistory();
  useEffect(() => {
    if (props.user.login) {
      if (window.location.pathname === "/admin") {
        history.push("/admin");
      }
    }
  }, [props.user.login]);
  const navBarMenuKey = ["home", "about-us", "contact-us"];
  const loginComponent = <Login />;

  return (
    <div>
      <Header className="header">
        <Row>
          <Col span={12}>
            <Link to="/">
              <h1 className="header-logo-image">E-commerce</h1>
            </Link>
          </Col>
          <Col span={12} lg={0} xl={0} xxl={0}>
            <MyDrawer login={props.user.login} />
          </Col>
          <Col span={0} lg={12} xl={12} xxl={12}>
            <MyMenu
              mode="horizontal"
              class="header-menu"
              defaultSelected={["home"]}
              menuItem="menu-item"
              menuKey={navBarMenuKey}>
              {props.user.login ? (
                <>
                  <span
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}>
                    <Avatar
                      type="file"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      size={40}
                      icon={<UserOutlined />}
                      style={{ marginRight: "10px" }}
                    />
                    <span
                      onClick={() => {
                        history.push("/admin");
                      }}>
                      Ram
                    </span>
                  </span>
                </>
              ) : (
                <Dropdown overlay={loginComponent} trigger={["click"]}>
                  <span
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}>
                    <UserOutlined /> For Login
                    <DownOutlined />
                  </span>
                </Dropdown>
              )}
            </MyMenu>
          </Col>
        </Row>
      </Header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Navbar);
