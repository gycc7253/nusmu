import React, { useEffect, useMemo, useRef } from 'react';
import styles from './Tile.module.css';

function getTrackUnavailableMessage(kind, trackState) {
  if (!trackState) return;
  switch (trackState.state) {
    case 'blocked':
      if (trackState.blocked.byPermissions) {
        return `${kind} permission denied`;
      } else if (trackState.blocked.byDeviceMissing) {
        return `${kind} device missing`;
      }
      return `${kind} blocked`;
    case 'off':
      if (trackState.off.byUser) {
        return `${kind} muted`;
      } else if (trackState.off.byBandwidth) {
        return `${kind} muted to save bandwidth`;
      }
      return `${kind} off`;
    case 'sendable':
      return `${kind} not subscribed`;
    case 'loading':
      return `${kind} loading...`;
    case 'interrupted':
      return `${kind} interrupted`;
    case 'playable':
      return null;
  }
}

/**
 * Props
 * - videoTrackState: DailyTrackState?
 * - audioTrackState: DailyTrackState?
 * - isLocalPerson: boolean
 * - isLarge: boolean
 * - disableCornerMessage: boolean
 * - onClick: Function
 */
export default function Tile(props) {
  const videoEl = useRef(null);
  const audioEl = useRef(null);

  const videoTrack = useMemo(() => {
    return props.videoTrackState && props.videoTrackState.state === 'playable'
      ? props.videoTrackState.track
      : null;
  }, [props.videoTrackState]);

  const audioTrack = useMemo(() => {
    return props.audioTrackState && props.audioTrackState.state === 'playable'
      ? props.audioTrackState.track
      : null;
  }, [props.audioTrackState]);

  const videoUnavailableMessage = useMemo(() => {
    return getTrackUnavailableMessage('video', props.videoTrackState);
  }, [props.videoTrackState]);

  const audioUnavailableMessage = useMemo(() => {
    return getTrackUnavailableMessage('audio', props.audioTrackState);
  }, [props.audioTrackState]);

  /**
   * When video track changes, update video srcObject
   */
  useEffect(() => {
    videoEl.current &&
      (videoEl.current.srcObject = new MediaStream([videoTrack]));
  }, [videoTrack]);

  /**
   * When audio track changes, update audio srcObject
   */
  useEffect(() => {
    audioEl.current &&
      (audioEl.current.srcObject = new MediaStream([audioTrack]));
  }, [audioTrack]);

  function getVideoComponent() {
    return videoTrack && <video autoPlay muted playsInline ref={videoEl} />;
  }

  function getAudioComponent() {
    return (
      !props.isLocalPerson &&
      audioTrack && <audio autoPlay playsInline ref={audioEl} />
    );
  }

  function getOverlayComponent() {
    // Show overlay when video is unavailable. Audio may be unavailable too.
    return (
      videoUnavailableMessage && (
        <p className={styles.tile.overlay} style={{
          position: "absolute",
          color: "#ffffff",
          top: "50%",
          left: "50%",
          margin: "0",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          lineHeight: "17px",
        }}>
          {videoUnavailableMessage}
          {audioUnavailableMessage && (
            <>
              <br />
              {audioUnavailableMessage}
            </>
          )}
        </p>
      )
    );
  }

  function getCornerMessageComponent() {
    // Show corner message when only audio is unavailable.
    return (
      !props.disableCornerMessage &&
      audioUnavailableMessage &&
      !videoUnavailableMessage && (
        <p className={styles.tile.corner} style={{
          position: "absolute",
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: "10px",
          margin: "0",
          bottom: "0",
          left: "0",
          fontSize: "14px",
          lineHeight: "17px",
        }}>{audioUnavailableMessage}</p>
      )
    );
  }

  function getClassNames() {
    let classNames = 'tile';
    classNames += props.isLarge ? ' large' : ' small';
    props.isLocalPerson && (classNames += ' local');
    return classNames;
  }

  return (
    <div className={getClassNames()} onClick={props.onClick} style={
      props.isLarge 
        ? {
          position: "relative",
          margin: "2px",
        } : {
          width: "200px",
          margin: "0 10px",
          position: "relative",
        }
    }>
      <div className={styles.tile.background} style={
        props.isLarge 
          ? {
            backgroundColor: "#000000",
            width: "100%",
            paddingTop: "56.25%", /* Hard-coded 16:9 aspect ratio */
          } : {
            borderRadius: "4px",
          }
      }/>
      {getOverlayComponent()}
      {getVideoComponent()}
      {getAudioComponent()}
      {getCornerMessageComponent()}
    </div>
  );
}