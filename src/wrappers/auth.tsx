import React, { Children } from 'react';
import { Button } from 'antd';
import { Link, history, Redirect } from 'umi';
import { getToken } from '@/utils/localStorage';

export default function index(props) {
  const { children } = props;
  console.log(children);
  if (getToken()) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}
