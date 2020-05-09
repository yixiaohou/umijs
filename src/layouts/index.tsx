import { render } from 'react-dom';
import BaseLayout from './BaseLayout';
import React, { Component } from 'react';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function Index(props) {
  return (
    <ConfigProvider locale={zhCN}>
      <BaseLayout {...props}></BaseLayout>
    </ConfigProvider>
  );
}
