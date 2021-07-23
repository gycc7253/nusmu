import Link from 'next/link';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  notification,
  Space,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Registered Successfully',
      description:
        'Welcome to XXXX, we hope you enjoy studying on our platform and wish you can make more new friends',
    });
  };

  export default function SignUp() {

  return (
    <div>
        <h1 style ={{textAlign:'center',margin:'2em'}}>Registration</h1>
        <div >
            <Form
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 8,
                }}
                layout="horizontal"
            >
                <Form.Item label="Username">
                <Input />
                </Form.Item>
                <Form.Item label="Email Address">
                <Input />
                </Form.Item>
                <Form.Item label="Motto">
                <Input />
                </Form.Item>

                <Form.Item label="Birth Date">
                <DatePicker />
                </Form.Item>
                <Form.Item label="Gender">
                <Select>
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Prefer not to say">Prefer not to say</Select.Option>
                </Select>
                </Form.Item>
  

                <Form.Item label="School">
                <Cascader
                    options={[
                    {
                        value: 'junior college',
                        label: 'Junior College',
                        children: [
                        {
                            value: 'ANDERSON SERANGOOON JUNIOR COLLEGE',
                            label: 'ANDERSON SERANGOOON JUNIOR COLLEGE',
                        },
                        {
                            value: 'ANGLO-CHINESE JUNIOR COLLEGE',
                            label: 'ANGLO-CHINESE JUNIOR COLLEGE',
                        },
                        {
                            value: 'CATHOLIC JUNIOR COLLEGE',
                            label: 'CATHOLIC JUNIOR COLLEGE',
                        },
                        {
                            value: 'HWA CHONG INSTITUTION',
                            label: 'HWA CHONG INSTITUTION',
                        },
                        {
                            value: 'TAMPINES MERIDIAN JUNIOR COLLEGE',
                            label: 'TAMPINES MERIDIAN JUNIOR COLLEGE',
                        },
                        {
                            value: 'MILLENNIA INSTITUTE',
                            label: 'MILLENNIA INSTITUTE',
                        },
                        {
                            value: 'NANYANG JUNIOR COLLEGE',
                            label: 'NANYANG JUNIOR COLLEGE',
                        },
                        {
                            value: 'NATIONAL JUNIOR COLLEGE',
                            label: 'NATIONAL JUNIOR COLLEGE',
                        },
                        {
                            value: 'JURONG PIONEER JUNIOR COLLEGE',
                            label: 'JURONG PIONEER JUNIOR COLLEGE',
                        },
                        {
                            value: 'ST. ANDREWS JUNIOR COLLEGE',
                            label: 'ST. ANDREWS JUNIOR COLLEGE',
                        },
                        {
                            value: 'TEMASEK JUNIOR COLLEGE',
                            label: 'TEMASEK JUNIOR COLLEGE',
                        },
                        {
                            value: 'VICTORIA JUNIOR COLLEGE',
                            label: 'VICTORIA JUNIOR COLLEGE',
                        },
                        {
                            value: 'YISHUN INNOVA JUNIOR COLLEGE',
                            label: 'YISHUN INNOVA JUNIOR COLLEGE',
                        },
                        ],
                    },
                    {
                        value: 'polytechnic',
                        label: 'Polytechnic',
                        children: [
                        {
                            value: 'Singapore Polytechnic',
                            label: 'Singapore Polytechnic',
                        },
                        {
                            value: 'Ngee Ann Polytechnic',
                            label: 'Ngee Ann Polytechnic',
                        },
                        {
                            value: 'Nanyang Polytechnic',
                            label: 'Nanyang Polytechnic',
                        },
                        {
                            value: 'Temasek Polytechnic',
                            label: 'Temasek Polytechnic',
                        },
                        {
                            value: 'Republic Polytechnic',
                            label: 'Republic Polytechnic',
                        },
                        ],
                    },
                    {
                        value: 'university',
                        label: 'University',
                        children: [
                        {
                            value: 'National University of Singapore',
                            label: 'National University of Singapore',
                        },
                        {
                            value: 'Nanyang Technological University',
                            label: 'Nanyang Technological University',
                        },
                        {
                            value: 'Singapore Management University',
                            label: 'Singapore Management University',
                        },
                        {
                            value: 'Singapore University of Technology and Design',
                            label: 'Singapore University of Technology and Design',
                        },
                        {
                            value: 'Singapore Institute of Technology',
                            label: 'Singapore Institute of Technology',
                        },
                        {
                            value: 'Singapore University of Social Sciences',
                            label: 'Singapore University of Social Sciences',
                        },
                        ],
                    },
                    ]}
                />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password again!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 10,
                    span: 6,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'create succesfully!',
                        },
                        ]}
                >
                    <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{margin:'4em '}}
                    onClick={() => openNotificationWithIcon('success')}
                    >
                         <Link href="/preference/preference">
                        <a>Sign Up</a>
                        </Link>
                    </Button>
            
                </Form.Item>
                
            </Form>
        </div>

      </div>
  );
};
