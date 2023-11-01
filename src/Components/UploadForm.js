import { PlusOutlined } from '@ant-design/icons';
import { showNotification } from './NotificationComponent';
import moment from "moment";
import React, { useState } from "react";
import {
    Card, Button, Form, Space, Radio, Select, Upload, Modal,
} from "antd";
import CommonInput from './common components/CommonInput';
import DateInput from './common components/CommonDateInput';
import CommonTextAreaInput from './common components/CommonTextAreaInput';
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

const FormPage = () => {
    // preview of the image
    const [inputValue, setInputValue] = useState(''); // To store the input value
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handleKeyPress = (e) => {
        // Allow only numeric key presses (0-9) and prevent others
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    };

    const handleInput = (e) => {
        const inputText = e.target.value;
        // Use a regular expression to remove any non-numeric characters
        const numericValue = inputText.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    // submit the registration form
    const onFinish = (values) => {
        showNotification('', 'success', 'Successfully added form data')
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
                reject('Please select your date of birth');
            }
        });
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || (file.preview));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
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
            <Space direction="vertical" size={16} style={{ marginTop: 30 }}>
                <Card title="Form">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        style={{
                            minWidth: 500,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <CommonInput
                            label="Username"
                            name="username"
                            placeholder="Enter your Username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        />

                        <CommonTextAreaInput
                            label="Description"
                            name="desc"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Description!",
                                },
                            ]}
                            rows={4}
                        />

                        <DateInput
                            label="Date of Birth"
                            name="Dob"
                            rules={[
                                { validator: validateDateOfBirth },
                            ]} />

                        <CommonInput
                            label="phoneNumber"
                            name="Phone Number"
                            placeholder="Enter your 10-digit phone number"
                            rules={[
                                { required: true, message: 'Please enter your phone number.' },
                            ]}
                            value={inputValue}
                            onKeyPress={handleKeyPress} // Handle key presses to allow only numeric characters
                            onInput={handleInput} // Handle input changes
                            maxLength={10}
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

                        <Form.Item label="Radio">
                            <Radio.Group>
                                <Radio value="Male"> Male </Radio>
                                <Radio value="Female"> Female </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required' }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload onPreview={handlePreview} action="/upload.do" listType="picture-circle">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
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

export default FormPage;
