import { Avatar, Button } from "antd";
import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../actions/userActions";
import { UserOutlined } from "@ant-design/icons";

const Admin = (props) => {
  const history = useHistory();
  const logoutHandler = () => {
    props.dispatch(userLogout());
    Cookies.remove("user");
    history.push("/");
  };

  return (
    <div style={{ margin: "5% 20% 20% 20%", textAlign: "center" }}>
      <div>
        <Avatar
          size={250}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          icon={<UserOutlined />}
        />
      </div>
      <h1 style={{ margin: "50px 0", fontSize: "50px" }}>Ram</h1>
      <h4>Email : ram123@gmail.com</h4>
      <h4>Contact : 12134567890</h4>
      <p>Address : punjab</p>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default connect()(Admin);
