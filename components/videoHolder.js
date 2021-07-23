import Link from 'next/link'
import DailyIframe from '@daily-co/daily-js';
import React from 'react';


export default function videoHolder() {
    React.useEffect(() => {
        let callFrame = DailyIframe.createFrame({
            showLeaveButton: true,
            iframeStyle: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }
        });
        callFrame.join({ url: 'https://nuovonatura.daily.co/dev-Test' });
    });

    return null;
  }