import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  changeNum = (page, pageSize) => {
    // console.log(res);
    console.log(page, pageSize);
    this.props.child(page, pageSize);
  };
  changeSize = (current, size) => {
    console.log(current, size);
  };
  render() {
    const { count } = this.props;
    return (
      <Pagination
        total={count}
        defaultPageSize={20}
        showSizeChanger
        showQuickJumper
        onChange={(page, pageSize) => this.changeNum(page, pageSize)}
        onShowSizeChange={(current, size) => this.changeSize(current, size)}
        showTotal={total => `Total ${count} items`}
      />
    );
  }
}
