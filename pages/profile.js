import Link from 'next/link'
import 'antd/dist/antd.css';
import MyLayout from '../components/layout'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Card, Space, Divider, Progress, Popover } from 'antd';
import { grey } from '@ant-design/colors';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, 
    HistoryOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined, PayCircleOutlined } from '@ant-design/icons';


export default function Profile() {
    return (
        <>
        <div style={{
            background: "#f2f2f2",
            padding: "30px"}}>
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
                        <RiseOutlined style={{margin: '4px'}}/> 
                    <span>
                        Experience:
                    </span>
                    <Progress percent={80} size="small" />
                    <Divider />
                    <PayCircleOutlined style={{margin: '4px'}}/> 
                    <span>
                        Coins:
                    </span>
                    <h4>
                        32
                    </h4>
                    <Divider />
                    <span>
                        <HistoryOutlined  style={{margin: '4px'}}/>                           
                        <span>
                            Hours studies this week:
                        </span>
                        <h4>
                            14
                        </h4>
                    </span>
                    <Divider />
                    <span>
                        <MessageOutlined  style={{margin: '4px'}}/> Motto:
                        <br/>Never stop until you reach the destination.
                    </span>
                </Card>
            </Col>

            <Col span={16}>
                <Row gutter={4} style={{ marginBottom: 4 }}>
                    <Col span={8}>
                        <Card title="Basic" bordered={false} extra={<Popover content="Edit"><FormOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                            <span>
                                Edit personal information.
                            </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Star" bordered={false} extra={<Popover content="Edit"><StarOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                            <span>
                                Number of stars received: 15
                            </span>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={4}>
                    <Col span={8}>
                        <Card title="Friends" bordered={false} extra={<Popover content="Edit"><TeamOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                            <span>
                                Click to view friends.
                            </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Password" bordered={false} extra={<Popover content="Edit"><UnlockOutlined style={{ cursor: 'pointer'}}/></Popover>}>
                            <span>
                                Edit your password.
                            </span>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>  
        </>
    )
  }

  Profile.getLayout = (profile) => (
    <MyLayout number={'3'}>
      {profile}
    </MyLayout>
  )