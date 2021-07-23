import Link from 'next/link'
import 'antd/dist/antd.css';
import MyLayout from '../components/layout'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Card, Space, Divider, Progress, Popover } from 'antd';
import { grey } from '@ant-design/colors';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, SafetyCertificateOutlined, FilePptOutlined, NotificationOutlined,
    ReconciliationOutlined, CloudSyncOutlined,
    HistoryOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined, PayCircleOutlined } from '@ant-design/icons';


export default function Settings() {
    return (
        <>
        <div style={{
            background: "#f2f2f2",
            padding: "30px"}}>
            <Row gutter={8} style={{ marginBottom: 8 }}>
                <Col span={8}>
                    <Card title="Account" bordered={false} extra={<Popover content="Edit"><ContactsOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Atlantica <span style={{float: 'right'}}>1284293</span>
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Basic" bordered={false} extra={<Popover content="Edit"><FormOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Basic application settings
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Security" bordered={false} extra={<Popover content="Edit"><SafetyCertificateOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Change security settings
                        </span>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8} style={{ marginBottom: 8 }}>
                <Col span={8}>
                    <Card title="Privacy" bordered={false} extra={<Popover content="Edit"><FilePptOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Review the privacy rules
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Notification" bordered={false} extra={<Popover content="Edit"><NotificationOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Change how you are notified
                        </span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Feedback" bordered={false} extra={<Popover content="Edit"><ReconciliationOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Submit feedbacks
                        </span>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={8}>
                    <Card title="Update" bordered={false} extra={<Popover content="Edit"><CloudSyncOutlined style={{ cursor: 'pointer'}} /></Popover>}>
                        <span>
                            Check for udpates
                        </span>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    )
  }

  Settings.getLayout = (settings) => (
    <MyLayout number="5">
      {settings}
    </MyLayout>
  )