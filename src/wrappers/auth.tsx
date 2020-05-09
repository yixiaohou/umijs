import React, { Children } from 'react';
import { Button } from 'antd';
import { Link, history, Redirect } from 'umi';
import { getToken } from '@/utils/localStorage';
import { HttpService } from '@/utils/httpService';

export default function index(props) {
  const { children } = props;
  if (getToken()) {
    HttpService.getApi();
  }
  if (getToken()) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}
