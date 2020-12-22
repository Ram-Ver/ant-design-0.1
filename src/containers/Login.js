import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../actions/userActions";

const Login = (props) => {
  const onFinish = (values) => {
    props.dispatch(userLogin(values.username, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        className="login-form"
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input name="username" placeholder="Enter Email or mobile number" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password name="password" placeholder="Enter Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          className="remeber-me">
          <Checkbox className="login-checkbox">Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="forget-password">
          <Link to="forget-password">Forget password</Link>
        </Form.Item>

        <Form.Item className="register">
          <Link to="/">Register</Link>
        </Form.Item>

        <Form.Item>
          <Button className="login-button" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
