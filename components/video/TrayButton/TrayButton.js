import React from 'react';
import styles from './TrayButton.module.css';
import Icon, {
  TYPE_MUTE_CAMERA,
  TYPE_MUTE_MIC,
  TYPE_SCREEN,
  TYPE_LEAVE,
  TYPE_CHAT,
} from '../Icon/Icon';

/**
 * Props:
 * - type: string
 * - disabled: boolean
 * - highlighted: boolean
 * - onClick: () => ()
 * - newButtonGroup: boolean
 */
export default function TrayButton(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={'tray-button' + (props.newButtonGroup ? ' new-group' : '')}
      style={
        props.newButtonGroup 
          ? {
            marginLeft: "auto",
          } : {
            width: "44px",
            height: "44px",
            border: "none",
            backgroundColor: "transparent",
            margin: "0 5px",
          }
      }
    >
      <Icon type={props.type} highlighted={props.highlighted} />
    </button>
  );
}

export { TYPE_MUTE_CAMERA, TYPE_MUTE_MIC, TYPE_SCREEN, TYPE_LEAVE, TYPE_CHAT };