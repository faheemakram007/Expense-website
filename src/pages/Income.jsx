import { useState } from "react";
import {
  Button,
  Card,
  Space,
  Tag,
  FloatButton,
  Typography,
} from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import IncomeTable from "../components/IncomeTable";
import IncomeForm from "../components/IncomeForm";

const { Title } = Typography;

const Income = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading] = useState(false);

  // ✅ Add
  const handleAdd = (values) => {
    setData([...data, values]);
    setIsModalOpen(false);
  };

  // ✅ Delete
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div style={{ padding: "20px", background: "#f5f6fa" }}>
      
      {/* Buttons */}
      <Space style={{ marginBottom: "20px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Income
        </Button>

        <Button type="primary" style={{ background: "#2ecc71" }}>
          Categories
        </Button>
      </Space>

      {/* Card */}
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Space>
            <UnorderedListOutlined />
            <Title level={4}>Income List</Title>
          </Space>

          <Space>
            <Tag icon={<CalendarOutlined />} color="blue">
              Total: Rs {data.reduce((a, b) => a + Number(b.amount), 0)}
            </Tag>
          </Space>
        </div>

        {/* Table */}
        <IncomeTable
          data={data}
          onDelete={handleDelete}
          loading={loading}
        />
      </Card>

      {/* Floating Button */}
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => setIsModalOpen(true)}
      />

      {/* Form */}
      <IncomeForm
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      />
    </div>
  );
};

export default Income;