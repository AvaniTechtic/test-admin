// DateInput.js
import React from 'react';
import { Form, DatePicker } from 'antd';
const dateFormat = "YYYY/MM/DD";

const DateInput = ({ label, name, value, onChange, rules }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <DatePicker
                value={value}
                onChange={onChange}
                style={{ justifyContent: "left", display: "flex" }}
                format={dateFormat}
            />
        </Form.Item>
    );
};

export default DateInput;
