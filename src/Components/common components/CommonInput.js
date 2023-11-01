import React from 'react';
import { Input, Form } from 'antd';

const CommonInput = ({ label, name, value, onChange, placeholder, rules, onKeyPress, onInput, maxLength }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <Input
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                onInput={onInput}
                maxLength={maxLength}
            />
        </Form.Item>
    );
};

export default CommonInput;
