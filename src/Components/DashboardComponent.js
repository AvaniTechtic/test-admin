import React from 'react';
import { Row, Col } from 'antd';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Row gutter={16}>
                <Col span={12}>
                    <BarChart />
                </Col>
                <Col span={12}>
                    <LineChart />
                </Col>
                <Col span={10}>
                    <PieChart />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
