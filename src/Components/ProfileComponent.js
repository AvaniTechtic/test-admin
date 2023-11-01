import { showNotification } from './NotificationComponent';
import CommonInput from './common components/CommonInput';
import moment from "moment";
import React from "react";
import { Card, Button, Form, Space } from "antd";
import DateInput from './common components/CommonDateInput';
const dateFormat = "YYYY/MM/DD";

const ProfilePage = () => {
    // assign intial values to a form
    const fields = [
        {
            name: ['firstname'],
            value: 'Avani',
        },
        {
            name: ['lastname'],
            value: 'Dalal',
        },
        {
            name: ['email'],
            value: 'avani@gmail.com'
        },
        {
            name: ['Dob'],
            value: moment('2000-06-09T12:40:14+0000')
        }
    ];

    // submit the registration form
    const onFinish = (values) => {
        showNotification('', 'success', 'Successfully Updated your profile')
    };

    // throws the error if any in form
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    // validate date of birth 
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
                reject('Please select your date of birth');
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
                <Card title="Profile">
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
                        fields={fields}
                    >

                        <CommonInput
                            placeholder="Enter your First Name"
                            label="First Name"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your First Name!",
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

                        <DateInput
                            label="Date of Birth"
                            name="Dob"
                            rules={[
                                { validator: validateDateOfBirth },
                            ]} />

                        <Form.Item
                            style={{
                                textAlign: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div >
    );
};

export default ProfilePage;
