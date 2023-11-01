import { showNotification } from './NotificationComponent';
import React from 'react';
import { Card, Button, Form, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import CommonInput from './common components/CommonInput';


const ForgotPasswordPage = () => {
    // submit the forgot password form
    const onFinish = (values) => {
        showNotification('', 'success', 'Please check your email for reset password link')
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
                <Card title="Forgot Password" >
                    <Form
                        name="basic"
                        style={{
                            minWidth: 300,
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

                        <Form.Item
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                'display': 'flex',
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <Form.Item style={{ justifyContent: 'center', display: 'flex', marginBottom: '24px', whiteSpace: 'nowrap' }}>
                            <Tooltip>
                                Go back to <Link to="/">Sign In</Link>
                            </Tooltip>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div>
    )
}

export default ForgotPasswordPage;