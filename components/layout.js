import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react';
import { Layout, Menu, Tooltip, Avatar } from 'antd';

import {
  SettingOutlined,
  DesktopOutlined,
  PieChartOutlined,
  CalendarOutlined,
  TeamOutlined,
  UserOutlined,
  ClusterOutlined,
  InfoCircleOutlined,
  LogoutOutlined
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
          <Avatar src="147144.png" size="large"></Avatar>
        </div>
        <div style={{
          height: '40px',
          margin: '16px',
          color: '#fff',
          paddingLeft: '7px'}}>
         Good Afternoon, Atlantica!
        </div>
        <Menu theme="dark" defaultSelectedKeys={[number]} mode="inline">
          <Menu.Item key="1" icon={<ClusterOutlined />}>
           <Link href="/">
           <Tooltip placement="topRight" title="Find a room you interested to join at Lobby" arrowPointAtCenter>
          
              <a>Lobby</a>
              </Tooltip>
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
          <Menu.Item key="5" icon={<InfoCircleOutlined />}>
            <Link href="/info">
              <a>Info</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<LogoutOutlined />} style={{ position: 'absolute', bottom: '200px;'}}>
            <Link href="/login/login">
              <a>Sign Out</a>
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