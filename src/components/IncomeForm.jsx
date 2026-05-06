import { Modal, Form, Input, DatePicker, Select, message } from "antd";

const { Option } = Select;

function IncomeForm({ open, onCancel, onSubmit }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const newData = {
      ...values,
      date: values.date.format("YYYY-MM-DD"),
      id: Date.now(),
    };

    onSubmit(newData);
    message.success("Income Added!");
    form.resetFields();
  };

  return (
    <Modal
      title="Add Income"
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select category">
            <Option value="Salary">Salary</Option>
            <Option value="Freelance">Freelance</Option>
            <Option value="Business">Business</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item name="desc" label="Description">
          <Input.TextArea />
        </Form.Item>

      </Form>
    </Modal>
  );
}

export default IncomeForm;