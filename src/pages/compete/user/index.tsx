import React, { Component, Fragment } from 'react';
import { message, Button, notification } from 'antd';
// import Searchbar from 'components/searchbar/Searchbar';
import Searchbar from '@/components/Searchbar';
import { HttpService } from '@/utils/httpService';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';

export default class index extends React.Component<any, any> {
  componentDidMount() {}

  state = {
    data: [],
    page_no: 1,
    page_size: 20,
    count: 0,
  };

  private parmes = {
    page_no: 1,
    page_size: 20,
    sortDirKey: 'DESC',
    sort: 'code',
    search: { code: '', name: '', usertype: '', status: '', rolecode: '' },
  };

  search = ref => {
    console.log('父组件');
    console.log(ref);
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
        <Searchbar parent={this.search}></Searchbar>
        <Table data={data}></Table>
        <Pagination count={count} child={this.paginChange}></Pagination>
      </Fragment>
    );
  }
}
