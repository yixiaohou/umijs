import React, { Children, Fragment } from 'react';
import styles from './index.less';

export default function index(props) {
  const { children } = props;
  console.log('!!!!');

  return <Fragment>{children}</Fragment>;
}
