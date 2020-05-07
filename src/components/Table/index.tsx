import React, { Component } from 'react';
import { Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;
export default class index extends Component {
  render() {
    console.log(this.props);
    const { data } = this.props;

    return (
      <Table
        dataSource={data}
        pagination={false}
        onChange={e => {
          console.log(e);
          // this.setState({ bottom: e.target.value });
        }}
      >
        <Column title="用户名" dataIndex="code" key="code" />
        <Column title="姓名" dataIndex="name" key="name" />
        <Column title="状态" dataIndex="status" key="status" />
        <Column title="手机号" dataIndex="password" key="password" />
        <Column title="用户类型" dataIndex="usertype" key="usertype" />
        <Column title="管理门店" dataIndex="userstores" key="userstores" />
        <Column title="用户角色" dataIndex="rolename" key="rolename" />
        {/* <Column
                    title="Action"
                    render={(text, record) => (
                        <span>
                            <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </span>
                    )}
                /> */}
      </Table>
    );
  }
}
