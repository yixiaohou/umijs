import React, { Component, Fragment } from 'react';
import { message, Button, notification } from 'antd';
// import Searchbar from 'components/searchbar/Searchbar';
import Searchbar from '@/components/Searchbar/index';
import { HttpService } from '@/utils/httpService';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import { SearchType, SearchItemWithDatasource } from '@/components/Searchbar';
export default class index extends React.Component {
  componentDidMount() {}
  state = {
    data: [],
    page_no: 1,
    page_size: 20,
    count: 0,
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

  search = (ref: any) => {
    console.log(ref);
    console.log(this.option);
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
        data: res.rows,
        count: res.count,
        pageSize: this.parmes.page_size,
      });
    });
  }

  render() {
    const { data, count } = this.state;
    return (
      <Fragment>
        <Searchbar parent={this.search} option={this.option}></Searchbar>
        <Table data={data}></Table>
        <Pagination count={count} child={this.paginChange}></Pagination>
      </Fragment>
    );
  }
}
