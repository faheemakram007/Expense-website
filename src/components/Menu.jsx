import { Layout, Menu as AntMenu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ProjectOutlined,
  CheckSquareOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 active highlight ke liye

  const items = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      key: "/expense",
      icon: <DollarCircleOutlined />,
      label: "Expenses",
      onClick: () => navigate("/expense"),
    },
    {
      key: "/income",
      icon: <FundOutlined />,
      label: "Income",
      onClick: () => navigate("/income"),
    },
    {
      key: "4",
      icon: <ProjectOutlined />,
      label: "Projects",
    },
    {
      key: "5",
      icon: <CheckSquareOutlined />,
      label: "Tasks (9/9)",
    },
    {
      key: "6",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "7",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Sider
      width={260}
      style={{
        background: "#0c0b2e",
        color: "white",
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "cursive",
          fontSize: "20px",
          padding: "15px 0",
        }}
      >
        Expense Manager
      </h1>

      <hr style={{ borderColor: "#444" }} />

      {/* MENU text */}
      <p style={{ marginLeft: 20, marginTop: 20, fontSize: 14 }}>
        MENU
      </p>

      {/* Menu */}
      <AntMenu
        selectedKeys={[location.pathname]} // 🔥 active page highlight
        mode="inline"
        theme="dark"
        style={{
          background: "#0c0b2e",
          borderRight: "none",
        }}
        items={items}
      />
    </Sider>
  );
}

export default Sidebar;