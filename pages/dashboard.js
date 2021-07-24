import Link from 'next/link'
import MyLayout from '../components/layout'
import React, { useState, useEffect } from 'react';
import { Statistic, Card, Row, Col, Calendar, Progress } from 'antd';
import { StarOutlined, ArrowUpOutlined, CheckSquareTwoTone} from '@ant-design/icons';
import dynamic from "next/dynamic";
const Area = dynamic(
  () => import("@ant-design/charts").then((mode) => mode.Area),
  { ssr: false }
);
function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
            { done: 'done' },
          ];
        break;
      case 10:
        listData = [
            { done: 'done' },
          ];
        break;
      case 15:
        listData = [
            { done: 'done' },
          ];
        break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
         <CheckSquareTwoTone />
        ))}
      </ul>
    );
  }

  
  

export default function Dashboard() {
    var data = [
        {
         Date: '07-17',
         scales: 1,
        },
        {
            Date: '07-18',
            scales: 2,
        },
        {
            Date: '07-19',
            scales: 3,
        },
        {
            Date: '07-20',
            scales: 5,
        },
        {
           Date: '07-21',
          scales: 2,
        },
        {
            Date: '07-22',
            scales: 0,
        },
        {
            Date: '07-23',
            scales: 3,
        },
        {
            Date: '07-24',
            scales: 1,
        },
      ];
    var config = {
      data: data,
      xField: 'Date',
      yField: 'scales',
    };
    return (
        <>
    <Row >
        <Col span={12}>
        <Card style={{textAlign:"center"}}>
          <Statistic
            title="Time Spend on Study"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <Card style={{textAlign:"center"}}>
        <Statistic title="Stars received" value={1128} prefix={<StarOutlined />} />
        </Card>
        <Card Card title="Target for the day" style={{textAlign:"center"}}>
        <Progress type="circle" percent={75} />
        <br />
        <br />
        Study 30 minutes more to complete your goal for today!
        </Card>
        </Col>
        <Col span={12}>
        <Card title="Study hours over the week" style={{textAlign:"center", height: "497px"}}>
        <Area {...config} />
        </Card>
        </Col>        
    </Row>
   <p> </p>
   <p> </p>
        <p>Your yearly focusing summary:</p>
    <img src="contribution.png" style={{width:"100%"}}></img>
    
       
    {/* <Calendar dateCellRender={dateCellRender} /> */}
    </>
    );
}
  

Dashboard.getLayout = (dashboard) => (
    <MyLayout number='2'>
      {dashboard}
    </MyLayout>
  )