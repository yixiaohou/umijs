import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { getUser } from '@/service/getUser';
import httpService from '@/utils/httpService';
import { history } from 'umi';
import { LocalStorageService } from '@/utils/localStorage';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function index(props) {
  const http = new httpService();
  const localStorage = new LocalStorageService();
  const { children } = props;
  const onFinish = values => {
    console.log('Success:', values);

    let opt = {
      code: values.username,
      pwd: values.password,
      remember: true,
      system: 'bsp2-ng',
    };
    http.getToken(opt)?.then(res => {
      if (res.code === 1) {
        localStorage.setToken(res.data.token);
        history.push('/');
      }
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
