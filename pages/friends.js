import Link from 'next/link'
import MyLayout from '../components/layout'
import { Table, Avatar } from 'antd';

const columns = [
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      render: text => text === 1 ? 
      <div>
      <Avatar src="medal1.png" size="large" style={{marginRight:"20px"}}></Avatar>
      </div>
      : text === 2 ? 
      <div>
      <Avatar src="medal2.png" size="large" style={{marginRight:"20px"}}></Avatar>
      </div>
      : text === 3 ? 
      <div>
      <Avatar src="medal3.png" size="large" style={{marginRight:"20px"}}></Avatar>
      </div>
      : <div style={{marginLeft:"20px"}}>{text}</div>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => text === "Li Beining" ? 
        <div>
        <Avatar src="1.png" size="large" style={{marginRight:"20px"}}></Avatar>
        {text} 
        </div>
        : text === "Meng Jiayu" ? 
        <div>
        <Avatar src="2.png" size="large" style={{marginRight:"20px"}}></Avatar>
        {text} 
        </div>
        : text === "Guo Yichao" ? 
        <div>
        <Avatar src="3.png" size="large" style={{marginRight:"20px"}}></Avatar>
        {text} 
        </div>
        : 
        <div>
        <Avatar src="4.png" size="large" style={{marginRight:"20px"}}></Avatar>
        {text} 
        </div>
    },
    {
      title: 'Total hours spent on study last week',
      dataIndex: 'hours',
    },
  ];

  const data = [
    {
      key: '1',
      ranking: 1,
      name: 'Li Beining',
      hours: 99,
    },
    {
        key: '2',
        ranking: 2,
        name: 'Meng Jiayu',
        hours: 88,
    },
    {
        key: '3',
        ranking: 3,
        name: 'Guo Yichao',
        hours: 77,
    },
    {
        key: '4',
        ranking: 4,
        name: 'Li Gangwei',
        hours: 1,
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export default function Friends() {
    return (
        <>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
  }

  Friends.getLayout = (friends) => (
    <MyLayout number='4'>
      {friends}
    </MyLayout>
  )