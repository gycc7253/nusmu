import { message } from 'antd';
import React from 'react';
import styles from './CallMessage.module.css';

/**
 * Props:
 * - header: string
 * - detail: string
 * - isError: boolean
 */
export default function CallMessage(props) {
  return (
    <div className={(props.isError ? styles.call-message : styles.call-message.error)}
    style={props.isError ? {
      width: "auto",
      padding: "20px 30px",
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      color: "#ffffff",
      textAlign: "center",
      fontSize: "14px",
      lineHeight: "17px",
    } : {
      color: "#d81a1a",
      backgroundColor: "#ffffff",
    }}>
      <p className={styles.call-message.header} style={{
        fontWeight: "bold",
      }}>{props.header}</p>
      <p>{props.detail}</p>
    </div>
  );
}