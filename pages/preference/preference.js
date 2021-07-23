import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { List, Card } from 'antd';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

// const options = [
//     { label: 'Business', value: 'Business' },
//     { label: 'Accountancy', value: 'Accountancy' },
//     { label: 'Economics', value: 'Economics' },
//     { label: 'Social Science', value: 'Social Science' },
//     { label: 'Information Technology', value: 'Information Technology' },
//     { label: 'Law', value: 'Law' },
//     { label: 'Others', value: 'Others' },
//   ];

const data = [
    {
        title: 'Business',
        image:'/business.png',
        label: 'Business', 
        value: 'Business' 
    },
    {
        title: 'Accountancy',
        image:'/accounting.png',
        label: 'Accountancy', 
        value: 'Accountancy' 
    },
    {
        title: 'Economics',
        image:'/economics.png',
        label: 'Economics', 
        value: 'Economics' 
    },
    {
        title: 'Social Science',
        image:'/socialScience.png',
        label: 'Social Science', 
        value: 'Social Science'
    },
    {
        title: 'Information Technology',
        image:'/informationTechnology.png',
        label: 'Information Technology', 
        value: 'Information Technology'
    },
    {
        title: 'Law',
        image:'/law.png',
        label: 'Law', 
        value: 'Law'
    },
    {
        title: 'Others',
        image:'/others.png',
        label: 'Others', 
        value: 'Others'
    },
  ];


export default function Preference() {
    return (
        <div style={{margin:'6em'}}>
            <h1 style ={{textAlign:'center',margin:'2em'}}>Select Your Preference!</h1>
            <List
                grid={{ gutter: 20, column: 4 }}
                dataSource={data}
                renderItem={item => (
                <List.Item style={{textAlign:'center'}}>
                    <Card title={item.title} >
                        <img src={item.image} style={{width:'100px'}}></img>    
                    </Card>
                   <input type="checkbox"  style={{size:'large'}}/>
                 
                </List.Item>
                )}
            />
            <div style={{textAlign:'center'}}>
            <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{margin:'4em '}}
                    size='large'
                    >
                         <Link href="/login/login">
                        <a>Confirm</a>
                        </Link>
                    </Button>
            </div>

        </div>
    )
  }