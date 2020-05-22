import React, { Component, Fragment } from 'react';
import { Button, notification, Modal, Space, Table } from 'antd';
// import Searchbar from 'components/searchbar/Searchbar';
import Searchbar from '@/components/Searchbar/index';
import Btnbar from '@/components/BtnArea/index';
import { HttpService } from '@/utils/httpService';
import Pagination from '@/components/Pagination';
import { SearchType, SearchItemWithDatasource } from '@/components/Searchbar';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
export default class index extends React.Component {
  componentDidMount() {}

  selectRows = [];
  state = {
    data: [],
    page_no: 1,
    page_size: 20,
    count: 0,
    selectedRowKeys: [],
  };
  private usertype = [
    { name: '牵牛花运营', code: '1' },
    { name: '总部用户', code: '2' },
    { name: '门店用户', code: '3' },
    { name: '牵牛花开发', code: '4' },
    { name: '拣货助手', code: '-10000' },
    { name: '数据大盘', code: '-20000' },
  ];
  private status = [
    { name: '启用', code: '1' },
    { name: '停用', code: '-1' },
  ];

  private option: SearchItemWithDatasource[] = [
    {
      label: '用户名',
      type: SearchType.input,
      nameKey: 'code',
      valueKey: '',
      placeholder: '请输入用户名OK?',
    },
    { label: '姓名', type: SearchType.input, nameKey: 'name', valueKey: '' },
    {
      label: '用户类型',
      type: SearchType.select,
      nameKey: 'usertype',
      initList: JSON.parse(JSON.stringify(this.usertype)),
    },
    {
      label: '状态',
      type: SearchType.select,
      nameKey: 'status',
      initList: JSON.parse(JSON.stringify(this.status)),
    },
  ];

  private parmes = {
    page_no: 1,
    page_size: 20,
    sortDirKey: 'DESC',
    sort: 'code',
    search: { code: '', name: '', usertype: '', status: '', rolecode: '' },
  };
  private collumns = [
    { key: 'code', title: '用户名', dataIndex: 'code' },
    { key: 'name', title: '姓名', dataIndex: 'name' },
    {
      key: 'status',
      title: '状态',
      dataIndex: 'status',
      render: r => (r === '1' ? '启用' : '禁用'),
    },
    { key: 'mobileNo', dataIndex: 'mobileNo', title: '手机号' },
    {
      key: 'usertype',
      dataIndex: 'usertype',
      title: '用户类型',
      render: r => this.usertype.filter(item => item.code === r)[0].name,
    },
    {
      key: 'userstores',
      dataIndex: 'userstores',
      title: '管理门店',
      width: 100,
      ellipsis: true,
    },
    { key: 'rolename', dataIndex: 'rolename', title: '用户角色' },
    {
      key: 'action',
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => this.delUser(text, record)}>删除</a>
        </Space>
      ),
    },
  ];

  delUser(text, record) {
    console.log(text);

    console.log(record);
  }

  search = (ref: any) => {
    console.log(ref);
    this.parmes.search = ref || {};
    this.getUserInfo();
  };

  paginChange = (page: number, pageSize: number) => {
    this.parmes.page_no = page;
    this.parmes.page_size = pageSize;
    this.getUserInfo();
  };

  getUserInfo() {
    HttpService.getUser?.requset(this.parmes)?.then(res => {
      this.setState({
        data: res.rows.map((item, index) => {
          item['key'] = index;
          return item;
        }),
        count: res.count,
        pageSize: this.parmes.page_size,
      });
    });
  }
  betch() {
    console.log(this.selectRows);
    confirm({
      title: '修改选中的用户?',
      icon: <ExclamationCircleOutlined />,
      content: this.selectRows.map(item => `${item.name},`),
      onOk: () => {
        return new Promise((resolve, reject) => {
          HttpService['updateBatchUser'].requset(this.selectRows).then(res => {
            this.getUserInfo();
            notification.success({ message: res });
            resolve(true);
          });
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  onSelectChange = (selectedRowKeys, selectRows) => {
    this.selectRows = selectRows;
    this.setState({ selectedRowKeys });
  };

  render() {
    const { data, count, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const btn = <Button onClick={() => this.betch()}>修改用户状态</Button>;
    return (
      <Fragment>
        <Searchbar parent={this.search} option={this.option}></Searchbar>
        <Btnbar children={btn}></Btnbar>
        <Table
          rowSelection={rowSelection}
          dataSource={data}
          columns={this.collumns}
          pagination={false}
        ></Table>

        <Pagination count={count} child={this.paginChange}></Pagination>
      </Fragment>
    );
  }
}
