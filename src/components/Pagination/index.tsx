import React, { Component } from 'react';
import { Pagination } from 'antd';

interface Props {
  count: number;
  child: any;
}
export default class index extends Component<Props> {
  changeNum = (page: number, pageSize: number | undefined) => {
    this.props.child(page, pageSize);
  };
  changeSize = (current: number, size: number) => {
    this.props.child(current, size);
  };
  render() {
    const { count } = this.props;
    return (
      <Pagination
        total={count}
        defaultPageSize={20}
        defaultCurrent={1}
        showSizeChanger
        showQuickJumper
        onChange={(page, pageSize) => this.changeNum(page, pageSize)}
        onShowSizeChange={(current, size) => this.changeSize(current, size)}
        showTotal={total => `Total ${count} items`}
      />
    );
  }
}
