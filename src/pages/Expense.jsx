import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Space,
  Tag,
  FloatButton,
  Typography,
  message,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
  UnorderedListOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import { getExpenses, createExpense, deleteExpense } from "../services/api";



const { Title } = Typography;

function ExpensePage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch expenses on component mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const expenses = await getExpenses();
      setData(expenses);
      setLoading(false);
    } catch (error) {
      message.error("Failed to fetch expenses");
      console.error(error);
    }
  };

  //  Add Function
  const handleAdd = async (values) => {
    try {
      const newExpense = {
        category: values.category,
        date: values.date.format("DD-MM-YYYY"),
        amount: `Rs ${values.amount}`,
        paid: "Yes",
        method: values.method,
        desc: values.desc,
      };

      await createExpense(newExpense);
      message.success("Expense added successfully");
      setIsModalOpen(false);
      fetchExpenses(); // Refresh the list
    } catch (error) {
      message.error("Failed to add expense");
      console.error(error);
    }
  };

  // Delete Function
  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      message.success("Expense deleted successfully");
      fetchExpenses(); // Refresh the list
    } catch (error) {
      message.error("Failed to delete expense");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#f5f6fa" }}>
      
      {/* Top Buttons */}
      <Space size="middle" style={{ marginBottom: "20px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Expense
        </Button>

        <Button type="primary" style={{ background: "#2ecc71" }}>
          Expense Categories
        </Button>

        <Button icon={<UploadOutlined />}>Export</Button>

        <Button icon={<DownloadOutlined />} style={{ background: "#f1c40f" }}>
          Import
        </Button>
      </Space>

      {/* Card */}
      <Card
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Space>
            <UnorderedListOutlined />
            <Title level={4} style={{ margin: 0 }}>
              Expense List
            </Title>
          </Space>

          <Space>
            <Tag icon={<CalendarOutlined />} color="blue">
              Total (March): Rs 0
            </Tag>

            <Tag icon={<ClockCircleOutlined />} color="gold">
              Pending (March): Rs 0
            </Tag>
          </Space>
        </div>

        {/*TABLE COMPONENT */}
        <ExpenseTable data={data} onDelete={handleDelete} loading={loading} />
      </Card>

      {/* Floating Button */}
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => setIsModalOpen(true)}
      />

      {/*  FORM COMPONENT */}
      <ExpenseForm
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      />
    </div>
  );
}

export default ExpensePage;