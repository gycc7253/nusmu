import React, { useContext, useState, useEffect } from 'react';
import CallObjectContext from '../../../utils/CallObjectContext';
import styles from './Chat.module.css';

export default function Chat(props) {
  const callObject = useContext(CallObjectContext);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    callObject.sendAppMessage({ message: inputValue }, '*');
    const name = callObject.participants().local.user_name
      ? callObject.participants().local.user_name
      : 'Guest';
    setChatHistory([
      ...chatHistory,
      {
        sender: name,
        message: inputValue,
      },
    ]);
    setInputValue('');
  }

  /**
   * Update chat state based on a message received to all participants.
   *
   */
  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleAppMessage(event) {
      const participants = callObject.participants();
      const name = participants[event.fromId].user_name
        ? participants[event.fromId].user_name
        : 'Guest';
      setChatHistory([
        ...chatHistory,
        {
          sender: name,
          message: event.data.message,
        },
      ]);
      // Make other icons light up
      props.notification();
    }

    callObject.on('app-message', handleAppMessage);

    return function cleanup() {
      callObject.off('app-message', handleAppMessage);
    };
  }, [callObject, chatHistory]);

  useEffect(() => {}, [chatHistory]);

  return props.onClickDisplay ? (
    <div className={styles.chat} style={{
      position: "absolute",
      right: "10px",
      bottom: "75px",
      width: "250px",
      height: "calc(100% - 150px)",
      backgroundColor: "#f2f2f2",
      borderRadius: "4px",
    }}>
      {chatHistory.map((entry, index) => (
        <div key={`entry-${index}`} className={styles.messageList} style={{
          padding: "10px",
        }}>
          <b>{entry.sender}</b>: {entry.message}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="chatInput"></label>
        <input
          id="chatInput"
          className={styles.chat.input}
          style={{
            position: "absolute",
            bottom: "0px",
            width: "200px",
            height: "25px",
          }}
          type="text"
          placeholder="Type your message here.."
          value={inputValue}
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.send.button} style={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
          width: "50px",
          height: "31px",
          backgroundColor: "#f2f2f2",
          fontWeight: "bold",
        }}>
          Send
        </button>
      </form>
    </div>
  ) : null;
}