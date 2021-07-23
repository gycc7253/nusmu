import Link from 'next/link'
import MyLayout from '../components/layout'
import { Table, Avatar } from 'antd';

const columns = [
    {
      title: 'Index',
      dataIndex: 'index',
      render: index => 
      <div>
        {index}
      </div>
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      render: text => 
      <div>
        {text}
      </div>
    },
    {
      title: 'Description',
      dataIndex: 'desc',
    },
  ];

  const data = [
    {
      index: 1,
      subject: 'Econs',
      desc: 'Study Econs for 2 hours'
    },
    {
      index: 2,
      subject: 'Math',
      desc: 'Study Math for 1 hour'
    },
    {
      index: 3,
      subject: 'History',
      desc: 'Study History for 2 hours'
    }
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export default function Tasks() {
    return (
        <>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
  }

  Tasks.getLayout = (tasks) => (
    <MyLayout number='4'>
      {tasks}
    </MyLayout>
  )