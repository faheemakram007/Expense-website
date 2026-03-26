import { Table, Tag, Button } from "antd";

function ExpenseTable({ data, setData }) {
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
          onClick={() =>
            setData(data.filter((item) => item.key !== record.key))
          }
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
    />
  );
}

export default ExpenseTable;