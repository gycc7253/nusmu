import Link from 'next/link'
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import MyLayout from '../components/layout'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Card, Carousel, Radio, Progress, Popover } from 'antd';
import { grey } from '@ant-design/colors';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, 
    HistoryOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined, PayCircleOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function Info() {

    const contentStyle1 = {
        color: '#fff',
        // width: 'fill',
        display: 'table-cell',
        height: '700px',
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundImage: 'url(sr6.jpg)',
        fontFamily: 'Helvetica',
        backgroundSize: 'cover'
    };
    
    const contentStyle2 = {
        color: '#fff',
        // width: 'fill',
        display: 'table-cell',
        height: '700px',
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundImage: 'url(sr7.jpg)',
        fontFamily: 'Helvetica',
        backgroundSize: 'cover'
    };
    
    const contentStyle3 = {
        color: '#fff',
        // width: 'fill',
        display: 'table-cell',
        height: '700px',
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundImage: 'url(sr8.jpg)',
        fontFamily: 'Helvetica',
        backgroundSize: 'cover'

    };
    
    const contentStyle4 = {
        color: '#fff',
        // width: 'fill',
        display: 'table-cell',
        height: '700px',
        verticalAlign: 'middle',
        textAlign: 'center',
        fontFamily: 'helvetica',
        backgroundImage: 'url(sr9.jpg)',
        backgroundSize: 'cover'
    };


    return (
        <>
        <Carousel dotPosition='left' autoplay>
            <div>
            <Paragraph style={contentStyle1}><pre style={{fontSize: '20px', width: '1200px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                The Online Study Group is a multi-user online study platform that allows you to not only study comfortably,<br/>
                 but also interact with friends and make new friends.
                 </pre></Paragraph>
            </div>
            <div>
            <Paragraph style={contentStyle2}><pre style={{fontSize: '20px', width: '1200px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                Each day you log in to study, you earn 1-2 coins depending on the duration. 
                <br/> And you can star others using the coins you earned.
                 </pre></Paragraph>
            </div>
            <div>
            <Paragraph style={contentStyle3}><pre style={{fontSize: '20px', width: '1200px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                Experience is required to up your level. 
                <br/> With higher levels, you can unlock more advanced functions of the Online Study Group.
                 </pre></Paragraph>
            </div>
            <div>
            <Paragraph style={contentStyle4}><pre style={{fontSize: '20px', width: '1200px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                You can customize your own study room, making it private or public. 
                <br/> You can also choose the subjects or categories to tag your own study room.
                 </pre></Paragraph>
            </div>
        </Carousel>
        </>
    )

    Info.getLayout = (info) => (
    <MyLayout>
        {info}
    </MyLayout>
    )
}


Info.getLayout = (info) => (
    <MyLayout number={'5'}>
      {info}
    </MyLayout>
  )