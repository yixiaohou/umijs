import styles from './index.css';
import React, { Component } from 'react';
import { message, Button, notification } from 'antd';

export default class index extends Component {
  openNotification = str => {
    notification.open({
      message: str,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  render() {
    const info = (str: string) => {
      message.info('This is a normal message' + str);
    };

    return (
      <div>
        <Button type="primary" onClick={() => info('11111')}>
          Display normal message
        </Button>
        <Button type="primary" onClick={() => this.openNotification('111')}>
          Open the notification box
        </Button>
      </div>
    );
  }
}
