import Link from 'next/link'
import DailyIframe from '@daily-co/daily-js';
import MyLayout from '../../components/layout'
import React from 'react';


export default function Room() {
    React.useEffect(() => {
        let callFrame = DailyIframe.createFrame({
            showLeaveButton: true,
            iframeStyle: {
                position: 'fixed',
                top: '10%',
                left: '20%',
                bottom: '10%',
                right: '20%',
                width: '75%',
                height: '75%'
            }
        });
        callFrame.join({ url: 'https://nuovonatura.daily.co/dev-Test' });
    });

    return (
        <>
        </>
    );
}
  

  Room.getLayout = (home) => (
    <MyLayout>
      {home}
    </MyLayout>
  )