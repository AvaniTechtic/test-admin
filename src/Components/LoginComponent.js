import CommonInput from './common components/CommonInput';
import CommonPasswordInput from './common components/CommonPasswordInput';
import React, { useState } from 'react';
import { Card, Button, Form, Space, Tooltip } from 'antd';
import { showNotification } from './NotificationComponent';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  // submit the login form
  const onFinish = (values) => {
    setLoggedIn(true);
    // check email id and password are correct then logged in
    if (values.email === 'avani@gmail.com' && values.password === 'Password' && loggedIn) {
      showNotification('', 'success', 'Successfully Logged In')
      navigate('/admin/dashboard'); // Redirect to the dashboard route
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
            <CommonInput
              label="Email"
              name="email"
              placeholder="Enter your Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email address!" },
              ]}
            />

            <CommonPasswordInput
              label="Password"
              name="password"
              placeholder="Enter your Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            />

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