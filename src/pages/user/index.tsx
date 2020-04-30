import React, { Fragment } from 'react';
import styles from './index.less';
import { Link, NavLink } from 'umi';

export default function index(props) {
  const { children } = props;
  console.log(children);
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
