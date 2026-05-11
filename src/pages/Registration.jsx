import { Card, Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // User save
    localStorage.setItem("user", JSON.stringify(values));

    message.success("Registration Successful");

    navigate("/login");
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
        <h2 style={{ textAlign: "center" }}>Register</h2>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Name */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

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

          {/* Confirm Password */}
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>

          {/* Button */}
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>

          <p style={{ marginTop: "15px", textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}

export default Register;