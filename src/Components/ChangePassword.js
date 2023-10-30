import { showNotification } from './NotificationComponent';
import React from "react";
import { Card, Button, Form, Input, Space } from "antd";

const ChangePassPage = () => {
    // submit the form
    const onFinish = (values) => {
        showNotification('', 'success', 'Successfully changed your password')
    };

    // throws the error if any in form
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh", // Ensure the container takes up the full viewport height
            }}
        >
            <Space direction="vertical" size={16}>
                <Card title="Change Password">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 10,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            minWidth: 400,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                                {
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                                    message: `Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters`,
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confPassword"
                            rules={[
                                { required: true, message: "Please confirm your password!" },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            "Password and Confirm password does not match!"
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            style={{
                                textAlign: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div >
    );
};

export default ChangePassPage;
