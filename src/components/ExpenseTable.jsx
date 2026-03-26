import { Table, Tag, Button } from "antd";

function ExpenseTable({ data, onDelete, loading }) {
  const columns = [
    {
      title: "Expense Category",
      dataIndex: "category",
    },
    {
      title: "Entry Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Paid",
      dataIndex: "paid",
      render: () => <Tag color="green">Yes</Tag>,
    },
    {
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Pay Method",
      dataIndex: "method",
    },
    {
      title: "Document",
      render: () => <Button size="small">View</Button>,
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Button
          danger
          size="small"
          onClick={() => onDelete(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      locale={{ emptyText: "No expenses found" }}
      pagination={{ showSizeChanger: false }}
      loading={loading}
    />
  );
}

export default ExpenseTable;