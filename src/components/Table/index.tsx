import React, { Component } from 'react';
import { Table } from 'antd';
const { Column } = Table;

interface Props {
  data: Array<any>;
}
export default class index extends Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <Table dataSource={data} pagination={false}>
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
