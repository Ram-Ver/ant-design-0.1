import React from "react";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

function forgetPassword() {
  return (
    <div className="forget-password-component">
      <div>
        <Input
          className="forget-password-input"
          placeholder="enter your Email"
          prefix={<MailOutlined className="mailIcon" />}
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default forgetPassword;
