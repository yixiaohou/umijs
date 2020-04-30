import React, { Children } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { Link } from 'umi';
import User from './user'

export default function index(props) {
  let res = "1111";
  const { children } = props;
  console.log(children)
  return (
    <div>

      <h1 className={styles.title}>Page index</h1>
      <Link to="/user"><Button type="primary" >Primary</Button></Link>
      {children}
    </div>
  );
}
