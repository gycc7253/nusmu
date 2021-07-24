import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';


    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

export default function Login() {
    return (
        <div>
            <h1 style ={{textAlign:'center',margin:'2em'}}>Login</h1>
            <div style ={{textAlign:'center'}}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >

                    <Button type="primary" htmlType="submit">
                         <Link href="/info">
                        <a>Login Now</a>
                        </Link>
                    </Button>
                    
                    <br></br>
                    <br></br>
                    <br></br>

                    <Button style={{backgroundColor:"#afd45b",color:"black"}} htmlType="submit">
                        <Link href="/signup/signup">
                            <a>Sign Up Here</a>
                        </Link> 
                    </Button>
           
     
                </Form.Item>
                </Form>
            </div>
        </div>
    )
  }