import { Card, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.email === "admin@gmail.com" && values.password === "1234") {
      localStorage.setItem("user", JSON.stringify(values));
      message.success("Login successful");
      navigate("/");
    } else {
      message.error("Invalid credentials");
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
      <Card style={{ width: 350, borderRadius: "12px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;