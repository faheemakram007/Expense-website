import { Card, Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // localStorage se user data lo
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Check email & password
    if (
      savedUser &&
      values.email === savedUser.email &&
      values.password === savedUser.password
    ) {
      message.success("Login Successful");

      localStorage.setItem("isLogin", true);

      navigate("/");
    } else {
      message.error("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <Card style={{ width: 400, borderRadius: "12px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          {/* Button */}
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          <p style={{ marginTop: "15px", textAlign: "center" }}>
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}

export default Login;