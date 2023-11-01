import React from 'react';
import { Input, Form } from 'antd';

const CommonPasswordInput = ({ label, name, value, onChange, placeholder, rules }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <Input.Password
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};

export default CommonPasswordInput;
