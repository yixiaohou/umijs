import React, { Component, Fragment } from 'react';
import { message, Button, Input, Row, Col } from 'antd';

export enum SearchType {
  input = 0,
  select = 1,
  doubleSelect = 2,
  datePicker = 3,
  doubleInput = 4,
  singleDate = 5,
  monthPicker = 6,
  radio = 7,
  selectCheck = 8,
  checkbox = 9,
  template = 10,
}
interface InitList {
  name: string;
  code: string | number | boolean;
}

export class SearchItemWithDatasource {
  type!: SearchType;
  label?: string;
  initList?: InitList[];
  search?: true; // 是否显示搜索
  show?: boolean;
  hidden?: boolean; // 隐藏
  width?: string;
  nameKey?: string;
  valueKey?: any;
  optionCode?: string;
  optionLabel?: string;
  date?: any; // 时间选择器显示
  emitFun?: any;
  importent?: boolean;
  selectedvalue?: any; // 门店稽核专用
}

export default class index extends Component {
  constructor(props) {
    super(props);
  }
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
    { label: '用户名', type: SearchType.input, nameKey: 'code', valueKey: '' },
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

  query() {
    console.log(this.option);
    console.log(this.props);
    this.props.parent(this.option[0].valueKey.state.value);
  }

  render() {
    return (
      <Fragment>
        {
          <Row>
            {this.option.map((item, index) => {
              if (item.type === 0) {
                return (
                  <Col span="8" key={index}>
                    <label>{item.label}</label>
                    <Input
                      ref={input => (item.valueKey = input)}
                      placeholder="Basic usage"
                    />
                  </Col>
                );
              }
            })}
          </Row>
        }
        <Button onClick={() => this.query()}>查询</Button>
      </Fragment>
    );
  }
}
