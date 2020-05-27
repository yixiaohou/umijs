import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { HttpService } from '@/utils/httpService';
import { history } from 'umi';
import { setToken } from '@/utils/localStorage';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function index(props: { children: any }) {
  const onFinish: any = async (values: { username: any; password: any }) => {
    let opt = {
      code: values.username,
      pwd: values.password,
      remember: true,
      system: 'bsp2-ng',
    };
    let res = await getToken(opt);

    if (res['code'] === 1) {
      setToken(res.data.token);
      history.push('/');
    }
  };

  const getToken = opt => {
    return new Promise((resolve, reject) => {
      HttpService.getToken(opt)?.then(res => {
        resolve(res);
      });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Faile2222d:', errorInfo);
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
        label="用户名"
        name="username"
        rules={[
          { required: true, message: 'Please1111 input your usern22222ame!' },
        ]}
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
