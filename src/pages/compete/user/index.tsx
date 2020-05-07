import styles from './index.css';
import React, { Component, Fragment } from 'react';
import { message, Button, notification } from 'antd';
// import Searchbar from 'components/searchbar/Searchbar';
import Searchbar from '@/components/Searchbar';
import httpService from '@/utils/httpService';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';

export default class index extends Component {
  private http = new httpService();
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
  paginChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.parmes.page_no = page;
    this.getUserInfo();
  };

  getUserInfo() {
    this.http.getUser?.requset(this.parmes)?.then(res => {
      console.log(res);
      this.setState({
        data: res.rows,
        count: res.count,
      });
    });
  }

  render() {
    const { data, count } = this.state;
    return (
      <Fragment>
        <Searchbar parent={this.search}></Searchbar>
        <Table data={data}></Table>
        <Pagination
          parent={this.search}
          count={count}
          child={this.paginChange}
        ></Pagination>
      </Fragment>
    );
  }
}
