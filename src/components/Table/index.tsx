import React, { Component } from 'react';
import { Table } from 'antd';
const { Column } = Table;

interface Props {
  data: Array<any>;
  collumns: Array<any>;
}
export default class index extends Component<Props> {
  render() {
    const { data, collumns } = this.props;

    return (
      <Table dataSource={data} columns={collumns} pagination={false}></Table>
    );
  }
}
