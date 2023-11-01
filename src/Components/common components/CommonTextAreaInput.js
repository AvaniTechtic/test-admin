import React from 'react';
import { Input, Form } from 'antd';
const { TextArea } = Input;

const CommonTextAreaInput = ({ label, name, rules, rows }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <TextArea rows={rows} />
        </Form.Item>
    );
};

export default CommonTextAreaInput;
