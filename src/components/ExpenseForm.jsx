import { Modal, Form, Input, DatePicker, Select } from "antd";

function ExpenseForm({ open, onCancel, onSubmit }) {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add Expense"
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="category" label="Category" required>
          <Input />
        </Form.Item>

        <Form.Item name="date" label="Date" required>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="amount" label="Amount" required>
          <Input />
        </Form.Item>

        <Form.Item name="method" label="Payment Method">
          <Select
            options={[
              { value: "Cash", label: "Cash" },
              { value: "Card", label: "Card" },
            ]}
          />
        </Form.Item>

        <Form.Item name="desc" label="Description">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ExpenseForm;