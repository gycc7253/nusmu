import Link from 'next/link'
import MyLayout from '../components/layout'
import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { StarOutlined, ArrowUpOutlined} from '@ant-design/icons';


export default function Dashboard() {

    return (
    <Row gutter={16}>
        <Col span={12}>
        <Card>
          <Statistic
            title="Time Spend on Study"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        </Col>
        <Col span={12}>
        <Card>
        <Statistic title="Stars received" value={1128} prefix={<StarOutlined />} />
        </Card>
        </Col>

    </Row>
    );
}
  

Dashboard.getLayout = (dashboard) => (
    <MyLayout number='2'>
      {dashboard}
    </MyLayout>
  )