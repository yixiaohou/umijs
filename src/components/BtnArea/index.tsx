import React, { Component } from 'react';
import style from './index.less';

export default class index extends Component {
  render() {
    return <div className={style.btnlist}>{this.props.children}</div>;
  }
}
