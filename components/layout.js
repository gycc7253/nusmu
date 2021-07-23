import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';

import {
  SettingOutlined,
  DesktopOutlined,
  PieChartOutlined,
  CalendarOutlined,
  TeamOutlined,
  UserOutlined,
  ClusterOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MyLayout({ number, children }) {
    const [collapsed, setCollapsed] = useState(false);
    console.log(number)
  return (  
    <>  
  <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div style={{
          height: '40px',
          margin: '16px',
          textAlign: 'center'}}>
          <Avatar src="747086.png" size="large"></Avatar>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[number]} mode="inline">
          <Menu.Item key="1" icon={<ClusterOutlined />}>
            <Link href="/">
              <a>Lobby</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link href="/profile">
              <a>My Profile</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            <Link href="/friends">
              <a>Friends</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
       <Layout className="site-layout">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <main>{children}</main>
        </div>
      </Layout>
    </Layout>
    </>
  )
}