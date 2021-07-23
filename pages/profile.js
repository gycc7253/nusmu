import Link from 'next/link'
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Card, Space, Divider, Progress } from 'antd';
import { grey } from '@ant-design/colors';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined } from '@ant-design/icons';

export default function Profile() {
    return (
        <>
        <div style={{
            background: "#ececec",
            padding: "30px"}}>
        <h1>
        Profile
        </h1>
        <Row gutter={8}>
            <Col span={8}>
                <Card title={<Avatar
                        src="147144.png"
                        shape="square"
                        size="64"
                        style={{verticalAlign: 'middle'}}
                    />} extra="level 5" bordered={false}>
                    <Row>
                        <Col span={12}>
                        <b>Atlantica</b>
                        </Col>
                        <Col span={12}>
                        <ContactsOutlined style={{margin: '4px'}}/> UserID:
                        <br/>1284293
                        </Col>
                    </Row>
                    <Divider />
                    <span>
                        <MailOutlined style={{margin: '4px'}}/> Mail:
                        <br/>e0424654@u.nus.edu
                    </span>
                    <Divider />
                    <span>
                        <MessageOutlined  style={{margin: '4px'}}/> Motto:
                        <br/>Never stop until you reach the destination.
                    </span>
                    <Divider />
                        <RiseOutlined style={{margin: '4px'}}/> 
                    <span>
                        Experience:
                    </span>
                    <Progress percent={80} size="small" />
                </Card>
            </Col>

            <Col span={16}>
                <Row gutter={4} style={{ marginBottom: 4 }}>
                    <Col span={8}>
                        <Card title="Basic" bordered={false} extra={<FormOutlined />}>
                            <span>
                                Edit personal information.
                            </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Star" bordered={false} extra={<StarOutlined />}>
                            <span>
                                Number of stars received: 15
                            </span>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={4}>
                    <Col span={8}>
                        <Card title="Friends" bordered={false} extra={<TeamOutlined />}>
                            <span>
                                Click to view friends.
                            </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Password" bordered={false} extra={<UnlockOutlined />}>
                            <span>
                                Edit your password.
                            </span>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        </div>  
        </>
    )
  }