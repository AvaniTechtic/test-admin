import CommonInput from './common components/CommonInput';
import DateInput from './common components/CommonDateInput';
import CommonPasswordInput from './common components/CommonPasswordInput';
import { showNotification } from './NotificationComponent';
import moment from "moment";
import React from "react";
import { Card, Button, Form, Space, Tooltip } from "antd";
import { Link } from 'react-router-dom';
const dateFormat = "YYYY/MM/DD";

const RegistrationPage = () => {
    // submit the registration form
    const onFinish = (values) => {
        showNotification('', 'success', 'Successfully Registered your account')
    };

    // throws the error if any in form
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    // validate the dob which should be above 18 years
    const validateDateOfBirth = (rule, value) => {
        return new Promise((resolve, reject) => {
            if (value) {
                // Parse the date using the specified format
                const dateOfBirth = moment(new Date(value), dateFormat);
                const currentDate = moment();
                const age = currentDate.diff(dateOfBirth, 'years');
                if (age >= 18) {
                    resolve();
                } else {
                    reject('You must be at least 18 years old to register.');
                }
            } else {
                reject('Date of birth is required');
            }
        });
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
                <Card title="Registration">
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

                        <CommonInput
                            label="First Name"
                            name="firstname"
                            required="true"
                            placeholder="Enter your First Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter your First Name",
                                },
                            ]}
                        />

                        <CommonInput
                            label="Last Name"
                            name="lastname"
                            required="true"
                            placeholder="Enter your Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter your Last Name",
                                },
                            ]}
                        />

                        <CommonInput
                            label="Email"
                            name="email"
                            placeholder="Enter your Email"
                            rules={[
                                { required: true, message: "Please input your email!" },
                                { type: "email", message: "Please enter a valid email address!" },
                            ]}
                        />

                        <DateInput label="Date of Birth" name="Dob" rules={[
                            { validator: validateDateOfBirth },
                        ]} />

                        <CommonPasswordInput
                            label="Password"
                            name="password"
                            placeholder="Enter your Password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                                {
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                                    message: `Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters`,
                                },
                            ]}
                        />

                        <CommonPasswordInput
                            label="Confirm Password"
                            name="confPassword"
                            placeholder="Enter your Confirm Password"
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
                        />

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
                        <Form.Item style={{ justifyContent: 'center', display: 'flex', marginBottom: '24px', whiteSpace: 'nowrap' }}>
                            <Tooltip>
                                Already have an account? <Link to="/">Sign In</Link>
                            </Tooltip>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div >
    );
};

export default RegistrationPage;
