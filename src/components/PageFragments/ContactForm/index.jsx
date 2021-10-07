import {
  Col, Form, Input, Button, message,
} from 'antd';
import React from 'react';
import Config from '../../../../config';

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a valid email!',
  },
};

export default () => {
  const [form] = Form.useForm();
  const onFinish = (data) => {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    fetch(Config.contactFormUrl, { method: 'POST', body: formData })
      .then(() => {
        message.success('Thank you for your kind response 🙂. Will get back to you.');
        form.resetFields();
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['name']} rules={[{ required: true }]}>
          <Input size="default" placeholder="Full Name *" />
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="default" placeholder="Email" />
        </Form.Item>
        <Form.Item name={['message']} rules={[{ required: true }]}>
          <Input.TextArea size="default" rows={18} placeholder="Message *" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#2c87e8' }}>
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
