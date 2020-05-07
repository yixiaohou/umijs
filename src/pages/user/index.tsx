import React, { Children } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { Link } from 'umi';
import User from './user';

export default function index(props) {
  const { children } = props;

  return { children };
}
