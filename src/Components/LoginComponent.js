import React from 'react';
import { Card, Button, Form, Input, Space, Tooltip } from 'antd';
import { showNotification } from './NotificationComponent';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // submit the login form
  const onFinish = (values) => {
    // check email id and password are correct then logged in
    if (values.email === 'avani@gmail.com' && values.password === 'Password') {
      showNotification('', 'success', 'Successfully Logged In')
    }
    // check email id and password is exists or not
    if (values.email !== 'avani@gmail.com' || values.password !== 'Password') {
      showNotification('Please check your Email and password once!!', 'error', 'Email or password is incorrect!!')
    }
  };

  // throws the error if any in form
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Ensure the container takes up the full viewport height
    }}>
      <Space direction="vertical" size={16}>
        <Card title="Login" >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              minWidth: 350,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
                { type: "email", message: "Please enter a valid email address!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              style={{ marginBottom: '4px' }}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ justifyContent: 'right', display: 'flex', marginBottom: '24px', whiteSpace: 'nowrap' }}>
              <Tooltip>
                <Link to="/forgot-password">Forgot Password?</Link>
              </Tooltip>
            </Form.Item>

            <Form.Item
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Form.Item style={{ justifyContent: 'center', display: 'flex', marginBottom: '24px', whiteSpace: 'nowrap' }}>
              <Tooltip>
                Don't have an account? <Link to="/register">Create one</Link>
              </Tooltip>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  )
}

export default LoginPage;