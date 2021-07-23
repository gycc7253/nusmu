import Link from 'next/link'
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import MyLayout from '../components/layout'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Card, Carousel, Radio, Divider, Progress, Popover } from 'antd';
import { grey } from '@ant-design/colors';
import { StarOutlined, FormOutlined, TeamOutlined, UnlockOutlined, 
    HistoryOutlined, MailOutlined, MessageOutlined, RiseOutlined, ContactsOutlined, PayCircleOutlined } from '@ant-design/icons';


export default function Info() {

    const contentStyle = {
        color: '#fff',
        width: '1200px',
        display: 'table-cell',
        height: '500px',
        verticalAlign: 'middle',
        textAlign: 'center',
        background: '#364d79',
        fontFamily: 'Helvetica',
    };


    return (
        <>
        <Carousel dotPosition='left' >
            <div>
            <h2 style={contentStyle}>This is a multi-user online study lounge that allows you to not only study in peace,<br/> but also interact with friends and make new friends.</h2>
            </div>
            <div>
            <h2 style={contentStyle}>Each day you log in to study, you earn 1-2 coins depending on how long you study. <br/> And you can tip others using the coins you earn to raise their star.</h2>
            </div>
            <div>
            <h2 style={contentStyle}>Experience is required to up your level. <br/> With higher levels, you can unlock more advanced functions of study lounge.</h2>
            </div>
            <div>
            <h2 style={contentStyle}>You can customize your own study room, making it private or public. <br/> You can also choose the subjects or categories to tag your study room.</h2>
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