import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState, useCallback } from 'react';
import MyLayout from '../components/layout'
import { Table, Input, Button, Space, Tag, Modal, Select, Switch } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, RightOutlined, PlusOutlined, ThunderboltOutlined, CloseOutlined, CheckOutlined} from '@ant-design/icons';

import Call from '../components/video/Call/Call';
import { createRoom, getList } from '../utils/api';
// import styles from './App.module.css';
import Tray from '../components/video/Tray/Tray';
import CallObjectContext from '../utils/CallObjectContext';
import { roomUrlFromPageUrl, pageUrlFromRoomUrl } from '../utils/urlUtils';
import { logDailyEvent } from '../utils/logUtils';
import DailyIframe from '@daily-co/daily-js';

const STATE_IDLE = 'STATE_IDLE';
const STATE_CREATING = 'STATE_CREATING';
const STATE_JOINING = 'STATE_JOINING';
const STATE_JOINED = 'STATE_JOINED';
const STATE_LEAVING = 'STATE_LEAVING';
const STATE_ERROR = 'STATE_ERROR';

const { Option } = Select;
let data;
// const data = [
//   {
//     key: '1',
//     id: '1001',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '2',
//     id: '1002',
//     title: 'CS3230 is fun!!',
//     tag: ['someone is teaching', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '3',
//     id: '1003',
//     title: 'Quiet self study room',
//     tag: ['do not disturb'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '4',
//     id: '1004',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '5',
//     id: '1005',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '6',
//     id: '1006',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '7',
//     id: '1007',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
//   {
//     key: '8',
//     id: '1008',
//     title: 'CS1101S is hard!!',
//     tag: ['seeking help', 'open'],
//     topic: 'computer science',
//     owner: 'Cliffen Lee',
//   },
// ];

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const [isMatchModalVisible, setIsMatchModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const showMatchModal = () => {
    setIsMatchModalVisible(true);
  };

  const handleMatchOk = () => {
    setIsMatchModalVisible(false);
    createCall().then((url) => startJoiningCall(url));
  };

  const handleMatchCancel = () => {
    setIsMatchModalVisible(false);
  };

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
    createCall().then((url) => startJoiningCall(url));
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };

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
      width: '15%',
      ...getColumnSearchProps('owner'),
    },
    {
      title: 'Action',
      key: 'go',
      fixed: 'right',
      width: 100,
      render: () => <Link href="/rooms/room">Join</Link>,
    },
  ];

  const [appState, setAppState] = useState(STATE_IDLE);
  const [roomUrl, setRoomUrl] = useState(null);
  const [callObject, setCallObject] = useState(null);

  /**
   * Get list of rooms
   */
  const getRooms = useCallback(() => {
    setAppState(STATE_IDLE);
    return getList()
      .then((result) => result.data)
      .catch((error) => {
        console.log('Error getting room list', error);
      });
  }, []);

  const convertData = useCallback((list) => {
    let id = 1;
    for (const item of list) {
      data.push({
        key: id,
        id: id,
        title: item.name,
        tag: ['seeking help', 'open'],
        topic: 'computer science',
        owner: 'Cliffen Lee',
      });
      id += 1;
    }
  });

  /**
   * Creates a new call room.
   */
  const createCall = useCallback(() => {
    setAppState(STATE_CREATING);
    return createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.log('Error creating room', error);
        setRoomUrl(null);
        setAppState(STATE_IDLE);
      });
  }, []);

  /**
   * Starts joining an existing call.
   *
   * NOTE: In this demo we show how to completely clean up a call with destroy(),
   * which requires creating a new call object before you can join() again.
   * This isn't strictly necessary, but is good practice when you know you'll
   * be done with the call object for a while and you're no longer listening to its
   * events.
   */
  const startJoiningCall = useCallback((url) => {
    const newCallObject = DailyIframe.createCallObject();
    setRoomUrl(url);
    setCallObject(newCallObject);
    setAppState(STATE_JOINING);
    newCallObject.join({ url });
  }, []);

  /**
   * Starts leaving the current call.
   */
  const startLeavingCall = useCallback(() => {
    if (!callObject) return;
    // If we're in the error state, we've already "left", so just clean up
    if (appState === STATE_ERROR) {
      callObject.destroy().then(() => {
        setRoomUrl(null);
        setCallObject(null);
        setAppState(STATE_IDLE);
      });
    } else {
      setAppState(STATE_LEAVING);
      callObject.leave();
    }
  }, [callObject, appState]);

  /**
   * If a room's already specified in the page's URL when the component mounts,
   * join the room.
   */
  useEffect(() => {
    const url = roomUrlFromPageUrl();
    url && startJoiningCall(url);
  }, [startJoiningCall]);

  /**
   * Update the page's URL to reflect the active call when roomUrl changes.
   *
   * This demo uses replaceState rather than pushState in order to avoid a bit
   * of state-management complexity. See the comments around enableCallButtons
   * and enableStartButton for more information.
   */
  useEffect(() => {
    const pageUrl = pageUrlFromRoomUrl(roomUrl);
    if (pageUrl === window.location.href) return;
    window.history.replaceState(null, null, pageUrl);
  }, [roomUrl]);

  /**
   * Uncomment to attach call object to window for debugging purposes.
   */
  // useEffect(() => {
  //   window.callObject = callObject;
  // }, [callObject]);

  /**
   * Update app state based on reported meeting state changes.
   *
   * NOTE: Here we're showing how to completely clean up a call with destroy().
   * This isn't strictly necessary between join()s, but is good practice when
   * you know you'll be done with the call object for a while and you're no
   * longer listening to its events.
   */
  useEffect(() => {
    if (!callObject) return;

    const events = ['joined-meeting', 'left-meeting', 'error'];

    function handleNewMeetingState(event) {
      event && logDailyEvent(event);
      switch (callObject.meetingState()) {
        case 'joined-meeting':
          setAppState(STATE_JOINED);
          break;
        case 'left-meeting':
          callObject.destroy().then(() => {
            setRoomUrl(null);
            setCallObject(null);
            setAppState(STATE_IDLE);
          });
          break;
        case 'error':
          setAppState(STATE_ERROR);
          break;
        default:
          break;
      }
    }

    // Use initial state
    handleNewMeetingState();

    // Listen for changes in state
    for (const event of events) {
      callObject.on(event, handleNewMeetingState);
    }

    // Stop listening for changes in state
    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewMeetingState);
      }
    };
  }, [callObject]);

  /**
   * Listen for app messages from other call participants.
   */
  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleAppMessage(event) {
      if (event) {
        logDailyEvent(event);
        console.log(`received app message from ${event.fromId}: `, event.data);
      }
    }

    callObject.on('app-message', handleAppMessage);

    return function cleanup() {
      callObject.off('app-message', handleAppMessage);
    };
  }, [callObject]);

  /**
   * Show the call UI if we're either joining, already joined, or are showing
   * an error.
   */
  const showCall = [STATE_JOINING, STATE_JOINED, STATE_ERROR].includes(
    appState
  );

  /**
   * Only enable the call buttons (camera toggle, leave call, etc.) if we're joined
   * or if we've errored out.
   *
   * !!!
   * IMPORTANT: calling callObject.destroy() *before* we get the "joined-meeting"
   * can result in unexpected behavior. Disabling the leave call button
   * until then avoids this scenario.
   * !!!
   */
  const enableCallButtons = [STATE_JOINED, STATE_ERROR].includes(appState);

  /**
   * Only enable the start button if we're in an idle state (i.e. not creating,
   * joining, etc.).
   *
   * !!!
   * IMPORTANT: only one call object is meant to be used at a time. Creating a
   * new call object with DailyIframe.createCallObject() *before* your previous
   * callObject.destroy() completely finishes can result in unexpected behavior.
   * Disabling the start button until then avoids that scenario.
   * !!!
   */
  const enableStartButton = appState === STATE_IDLE;

  // useEffect(() => {
  //   data = [];
  //   getRooms().then((list) => convertData(list));
  // })

  return (
    <div className="app" >
      {showCall ? (
        // NOTE: for an app this size, it's not obvious that using a Context
        // is the best choice. But for larger apps with deeply-nested components
        // that want to access call object state and bind event listeners to the
        // call object, this can be a helpful pattern.
        <div style={{
          backgroundColor: "#4a4a4a",
          position: "absolute",
          width: "80%",
          height: "95%",
        }}>
        <CallObjectContext.Provider value={callObject}>
          <Call roomUrl={roomUrl} />
          <Tray
            disabled={!enableCallButtons}
            onClickLeaveCall={startLeavingCall}
          />
        </CallObjectContext.Provider>
        </div>
      ) : (
        <>
        <Table columns={columns} dataSource={data}/>
        <Modal title="Quick Match" visible={isMatchModalVisible} 
        okText="Join Room"
        cancelText="Cancel"
        onOk={handleMatchOk} onCancel={handleMatchCancel}>
          <p>We will place you into a room with your interest</p>
          <p>Please select the topics you are interested</p>
          <Select defaultValue="Information Technology" style={{ width: 240 }}>
            <Option value="Information Technology">Information Technology</Option>
            <Option value="Business">Business</Option> 
            <Option value="Accountancy">Accountancy</Option>
            <Option value="Economics">Economics</Option> 
            <Option value="Social Science">Social Science</Option> 
            <Option value="Law">Law</Option> 
            <Option value="Others">Others</Option> 
          </Select>
        </Modal>
        <Modal title="Create a Room" visible={isCreateModalVisible} 
        okText="Create"
        cancelText="Cancel"
        onOk={handleCreateOk} onCancel={handleCreateCancel}>
          <Switch style={{float:"right"}} checkedChildren="Public" unCheckedChildren="Private" defaultChecked />
          <p>Please select the topics you are interested</p>
          <Input placeholder="What do you want to call your room?" />
          <p> </p>
          <Select defaultValue="Information Technology" style={{ width: 240 }}>
            <Option value="Information Technology">Information Technology</Option>
            <Option value="Business">Business</Option> 
            <Option value="Accountancy">Accountancy</Option>
            <Option value="Economics">Economics</Option> 
            <Option value="Social Science">Social Science</Option> 
            <Option value="Law">Law</Option> 
            <Option value="Others">Others</Option> 
          </Select>
          <p> </p>
          <Select
            mode="multiple"
            showArrow
            placeholder="Please tag your room"
            tagRender={tagRender}
            style={{ width: '100%' }}
            options={options}
          />

        </Modal>
        <a href="#" style={{position:"fixed",
                            width:"60px",
                            height:"60px",
                            bottom:"195px",
                            right:"140px",
                            backgroundColor:"#c75724",
                            fontSize:"30px",
                            color:"#FFF",
                            borderRadius:"50px",
                            textAlign:"center",
                            boxShadow: "2px 2px 3px #999"}}>
          <ThunderboltOutlined style={{marginTop:"15px", width:"100%"}} onClick={showMatchModal}/>
        </a>
        <a href="#" style={{position:"fixed",
                            width:"60px",
                            height:"60px",
                            bottom:"120px",
                            right:"140px",
                            backgroundColor:"#0C9",
                            fontSize:"30px",
                            color:"#FFF",
                            borderRadius:"50px",
                            textAlign:"center",
                            boxShadow: "2px 2px 3px #999"}}>
          <PlusOutlined style={{marginTop:"15px", width:"100%"}} onClick={showCreateModal}/>
        </a>
      </>
      )}
    </div>
      
    )
}
const options = [{ value: 'seeking help' }, { value: 'open' }, { value: 'do not disturb' }, { value: 'someone is teaching' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value === 'do not disturb' ? 'red' : value === 'seeking help' ? 'yellow' : 'green'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

Home.getLayout = (home) => (
  <MyLayout number="2">
    {home}
  </MyLayout>
)