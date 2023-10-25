import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  MenuFoldOutlined, MenuUnfoldOutlined, CompassOutlined, UserOutlined, VideoCameraOutlined,
  LogoutOutlined, FormOutlined
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom'; // Import React Router components
const { Sider, Content, Header } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ paddingTop: '65px' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/login">Profile</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FormOutlined />}>
            <Link to="/admin/forgot-password">Upload Form</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CompassOutlined />}>
            <Link to="/admin/forgot-password">Change Password</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link to="/admin/forgot-password">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#001529' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#fff',
              float: 'left'
            }}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
