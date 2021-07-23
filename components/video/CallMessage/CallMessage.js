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
    <div className={(props.isError ? styles.call-message : styles.call-message.error)}>
      <p className={styles.call-message.header}>{props.header}</p>
      <p>{props.detail}</p>
    </div>
  );
}