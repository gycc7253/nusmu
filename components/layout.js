import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import Link from 'next/link'
import {
  SettingOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ClusterOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MyLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="2" icon={<ClusterOutlined />}>
            <Link href="/">
              <a>Lobby</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link href="/rooms/room">
              <a>My Room</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link href="/profile">
              <a>My Profile</a>
            </Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
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