import { Layout, Select, Avatar, Space } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { Header } = Layout;

function AppHeader() {
  return (
    <Header
      style={{
        background: "#ffffff",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
        margin: "10px",
        height: "70px",
        boxShadow: "0 2px 8px rgba(36, 32, 32, 0.08)",
      }}
    >
      {/* Left Icon */}
      <AppstoreOutlined style={{ fontSize: "22px" }} />

      {/* Right Side */}
      <Space size="middle">
        
        {/* Project Dropdown */}
        <Select
          defaultValue="Default Project"
          style={{ width: 160 }}
          options={[
            { value: "Default Project", label: "Default Project" },
            { value: "All Project", label: "Project All" },
          ]}
        />

        {/* Date Dropdown */}
        <Select
          defaultValue="ALL"
          style={{ width: 140 }}
          options={[
            { value: "All", label: "All" },
            { value: "March-2026", label: "March-2026" },
            { value: "April-2026", label: "April-2026" },
          ]}
        />

        {/* Profile Image */}
        <Avatar
          size={40}
          src="https://i.pravatar.cc/150?img=3"
        />
      </Space>
    </Header>
  );
}

export default AppHeader;