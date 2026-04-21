import { Modal, Form, Input, DatePicker, Select, message, Row, Col } from "antd";

function ExpenseForm({ open, onCancel, onSubmit }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  const handleFinishFailed = () => {
    message.error("Please fill all required fields!");
  };

  return (
    <Modal
      title="Add Expense"
      open={open}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={() => form.submit()}
      okText="Add Expense"
      cancelText="Cancel"
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: "Enter category" }]}
            >
              <Input placeholder="e.g Food, Travel" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="amount"
              label="Amount"
              rules={[
                { required: true, message: "Enter amount" },
                { pattern: /^[0-9]+$/, message: "Only numbers allowed" },
              ]}
            >
              <Input placeholder="Enter amount" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Select date" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="method"
              label="Payment Method"
              rules={[{ required: true, message: "Select method" }]}
            >
              <Select
                placeholder="Select method"
                options={[
                  { value: "Cash", label: "Cash" },
                  { value: "Card", label: "Card" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="desc" label="Description">
          <Input.TextArea
            rows={3}
            placeholder="Optional note..."
            style={{ resize: "none" }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ExpenseForm;