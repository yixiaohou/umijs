import React, { Component, useLayoutEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Menus from '@/layouts/menus';
import BreadcrumbUser from '../Breadcrumb';
const { Header, Sider, Content } = Layout;
import Pages from '@/pages';

export default class index extends Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Header className="styles.header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menus></Menus>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <BreadcrumbUser {...this.props}></BreadcrumbUser>
            {this.props.children}
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
