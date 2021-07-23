import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import MyLayout from '../components/layout'
import Room from './room/room'
import { Table, Input, Button, Space, Tag } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    id: '1001',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '2',
    id: '1002',
    title: 'CS3230 is fun!!',
    tag: ['someone is teaching', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '3',
    id: '1003',
    title: 'Quiet self study room',
    tag: ['do not disturb'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '4',
    id: '1004',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '5',
    id: '1005',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '6',
    id: '1006',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '7',
    id: '1007',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
  {
    key: '8',
    id: '1008',
    title: 'CS1101S is hard!!',
    tag: ['seeking help', 'open'],
    topic: 'computer science',
    owner: 'Cliffen Lee',
  },
];

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            setSearchInput(node);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    // onFilterDropdownVisibleChange: visible => {
    //   if (visible) {
    //     setTimeout(() => this.searchInput.select(), 100);
    //   }
    // },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
      filters: [
        {
          text: 'do not disturb',
          value: 'do not disturb',
        },
        {
          text: 'open',
          value: 'open',
        },
        {
          text: 'seeking help',
          value: 'seeking help',
        },
        {
          text: 'someone is teaching',
          value: 'someone is teaching',
        },
      ],
      onFilter: (value, record) => record.tag.includes(value),
      render: tags => (
        <>
        
          {tags.map(tag => {
             let color = 'green';
            if (tag === 'do not disturb') {
              color = 'volcano';
            }
            if (tag === 'seeking help') {
              color = 'yellow';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
      width: '20%',
      ...getColumnSearchProps('topic'),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: '20%',
      ...getColumnSearchProps('owner'),
    },
    {
      title: 'Action',
      key: 'go',
      fixed: 'right',
      width: 100,
      render: () => <Link href="/room/room"><RightOutlined /></Link>,
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
    )
}


Home.getLayout = (home) => (
  <Room>
    {home}
  </Room>
)