import React, { Component } from 'react';
import { HttpService } from '@/utils/httpService';
import { ParamsBody } from '@/components/BaseModel';
import { Table, Space, Tag } from 'antd';
interface MenusItem {
  menuname: string;
  menucode: number;
  menuurl: string;
  state: number | string;
  remarks: string;
}
export default class index extends Component {
  state = {
    data: [],
  };
  columns = [
    { title: '菜单名称', dataIndex: 'menuname', key: 'menuname' },
    { title: '菜单编号', dataIndex: 'menucode', key: 'menucode' },
    { title: '链接地址', dataIndex: 'menuurl', key: 'menuurl' },
    {
      title: '类型',
      dataIndex: 'menuname',
      key: 'ID',
      render: (text, record) => {
        console.log(record);
        if (record.menuurl) {
          return <Tag color="#87d068">菜单</Tag>;
        } else {
          return <Tag color="#108ee9">目录</Tag>;
        }
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render: (text, item: MenusItem) =>
        item.state === 0 ? (
          <Tag color="success">启用</Tag>
        ) : (
          <Tag color="error">禁用</Tag>
        ),
    },
    { title: '描述', dataIndex: 'remarks', key: 'remarks' },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record: MenusItem) => (
        <Space size="middle">
          <a>编辑</a>
          <a>{record.menuurl ? '添加按钮' : '添加菜单'}</a>
          <a onClick={() => this.del(record)}>删除</a>
        </Space>
      ),
    },
  ];
  componentDidMount() {
    this.getMenusData();
  }
  del(record) {
    console.log(record);
  }
  getMenusData() {
    const param = new ParamsBody(null, 100);
    HttpService.getMenus?.requset(param)?.then(res => {
      this.setState({
        data: res['rows']
          .sort((a: MenusItem, b: MenusItem) => a.menucode - b.menucode)
          .map((item, index) => {
            item['children'] = item['List'].length !== 0 ? item['List'] : null;
            item['key'] = index;
            return item;
          }),
      });
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <Table columns={this.columns} dataSource={data} pagination={false} />
    );
  }
}
