import { Table, Button } from "antd";

function IncomeTable({ data, onDelete, loading }) {
  const columns = [
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Button danger onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      locale={{ emptyText: "No income found" }}
    />
  );
}

export default IncomeTable;