import Link from 'next/link'
import Router from 'next/router'
import DailyIframe from '@daily-co/daily-js';
import MyLayout from '../../components/layout'
import React,{useState} from 'react';
import { Row, Col, Tag, Modal, Radio, Avatar, Button} from 'antd';
import { UserAddOutlined,  StarOutlined } from '@ant-design/icons';

const style = { background: 'transparent', padding: '5px'};

let callFrame;

export default function Room() {
  
    React.useEffect(() => {
        callFrame = DailyIframe.createFrame({
            showLeaveButton: false,
            iframeStyle: {
                position: 'absolute',
                top: '13%',
                left: '20%',
                bottom: '10%',
                right: '20%',
                width: '75%',
                height: '75%'
            }
        });
        callFrame.join({ url: 'https://nuovonatura.daily.co/dev-Test' });
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLeave = () => {
      callFrame.destroy();
      Router.push('/');
    }

    const showModal = () => {
      setIsModalVisible(true);
    };
    
    const handleOk = () => {
      setIsModalVisible(false);
    };
    
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <div>
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Room Id:1001</h1> 
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Title: CS1101S is hard!!</h1>
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <Button type="primary" danger onClick={handleLeave}>Leave Meeting!</Button>
                </div>
              </Col>
            </Row>
        </div>
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <span style={style}>
                  <Avatar src="/3.png" size="large" ></Avatar>
                  <h1 style={{display:'inline', margin:'10px'}}>Owner: Cliffen Lee</h1>
                </span>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <h1>Topic: Computer Science</h1>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <span style={style}>
                  <h1 style={{display:'inline', margin:'5px'}}>Tags: </h1>
                  <Tag style={{display:'inline', margin:'5px'}}  color="yellow">SEEKING HELP</Tag> 
                  <Tag style={{display:'inline', margin:'5px'}}  color="green">OPEN</Tag>
                </span>
              </Col>

          </Row>
        </div>

        <div style={{margin:'580px'}}></div>

        <div style={{margin:'10px 70px'}}>
          <h1>Participants: </h1>
          <Avatar src="/1.png" size="large" style={{marginRight:"20px"}} onClick={showModal}></Avatar>
          <Modal title="Li Beining" okText="Confirm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a"> <UserAddOutlined />
                <label for="addFriend"> Add Friend</label><br></br></Radio.Button>
              <Radio.Button value="b"> <StarOutlined />
                <label for="star"> Buy him a Star</label><br></br></Radio.Button>
     
            </Radio.Group>
            </div>
          </Modal>

          <Avatar src="/2.png" size="large" style={{marginRight:"20px"}} onClick={showModal}></Avatar>
          <Modal title="Meng Jiayu" okText="Confirm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a"> <UserAddOutlined />
                <label for="addFriend"> Add Friend</label><br></br></Radio.Button>
              <Radio.Button value="b"> <StarOutlined />
                <label for="star"> Buy him a Star</label><br></br></Radio.Button>
     
            </Radio.Group>
            </div>
          </Modal>

        </div>
      </div>
    );
}
  

  Room.getLayout = (home) => (
    <MyLayout>
      {home}
    </MyLayout>
  )