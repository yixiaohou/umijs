import React, { Component, Fragment } from 'react';
import { message, Button, Input, Row, Col, Select } from 'antd';
import style from './index.less';

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
const { Option } = Select;
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
  placeholder?: string;
}

export default class index extends Component<any> {
  componentDidMount() {
    this.query();
  }

  reset(option: Array<any> = []) {
    console.log(option);
  }

  query(option: Array<any> = []) {
    if (option.length === 0) {
      this.props.parent();
      return;
    }

    let emitObj: any = {};
    option.forEach(item => {
      switch (item.type) {
        case SearchType.input:
          emitObj[item.nameKey] = item.valueKey.state.value;
          break;
        case SearchType.select:
          emitObj[item.nameKey] = item.valueKey;
          break;
        case SearchType.doubleSelect:
          emitObj[item.doubleSelectList[0].name] =
            item.doubleSelectList[0].valueKey;
          emitObj[item.doubleSelectList[1].name] =
            item.doubleSelectList[1].valueKey;
          break;
        case SearchType.selectCheck:
          emitObj[item.selectCheckList[0].name] =
            item.selectCheckList[0].valueKey;
          emitObj[item.selectCheckList[1].name] =
            item.selectCheckList[1].valueKey;
          break;
        case SearchType.doubleInput:
          emitObj[item.doubleInput[0].name] = item.doubleInput[0].valueKey;
          emitObj[item.doubleInput[1].name] = item.doubleInput[1].valueKey;
          break;
        case SearchType.singleDate:
          let time = new Date(item.valueKey);
          let month = `${time.getMonth() + 1}`.padStart(2, '0');
          let date = `${time.getDate()}`.padStart(2, '0');
          emitObj[item.nameKey] = `${time.getFullYear()}-${month}-${date}`;
          break;
        case SearchType.monthPicker:
          if (item.valueKey) {
            let monthPicker =
              item.valueKey.getMonth() + 1 < 10
                ? '0' + (item.valueKey.getMonth() + 1)
                : item.valueKey.getMonth() + 1;
            emitObj[
              item.nameKey
            ] = `${item.valueKey.getFullYear()}-${monthPicker}`;
          }
          break;
        case SearchType.datePicker:
          if (item['date'] && item['date'].length !== 0) {
            let starTime = new Date(item['date'][0]);
            let endTime = new Date(item['date'][1]);
            let startMonth = `${starTime.getMonth() + 1}`.padStart(2, '0');
            let endMonth = `${endTime.getMonth() + 1}`.padStart(2, '0');
            let startDate = `${starTime.getDate()}`.padStart(2, '0');
            let endDate = `${endTime.getDate()}`.padStart(2, '0');
            emitObj[
              item.datePicker[0].name
            ] = `${starTime.getFullYear()}-${startMonth}-${startDate} 00:00:00`;
            emitObj[
              item.datePicker[1].name
            ] = `${endTime.getFullYear()}-${endMonth}-${endDate} 23:59:59`;
          }
          break;
        case SearchType.radio:
          emitObj[item.nameKey] = item.valueKey;
          break;
        case SearchType.checkbox:
          emitObj[item.nameKey] = item.valueKey;
          break;
      }
    });
    console.log(emitObj);
    this.props.parent(emitObj);
  }

  render() {
    let { option } = this.props;

    return (
      <Fragment>
        {
          <Row className={style.searchBox}>
            <Col span="20">
              <Row>
                {option.map((item: SearchItemWithDatasource, index) => {
                  return (
                    <Col span="8" key={index}>
                      <label className={style.label}>{item.label}</label>
                      {item.type === 0 ? (
                        <Input
                          className={style.searchItem}
                          ref={input => (item.valueKey = input)}
                          placeholder={
                            item.placeholder
                              ? item.placeholder
                              : `请输入${item.label}`
                          }
                        />
                      ) : item.type === 1 ? (
                        <Select
                          className={style.searchItem}
                          onChange={event => (item.valueKey = event)}
                        >
                          {item.initList
                            ? item.initList.map((item2, index) => (
                                <Option key={index} value={item2.code}>
                                  {item2.name}
                                </Option>
                              ))
                            : null}
                        </Select>
                      ) : null}
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col span="4">
              <Button type="primary" onClick={() => this.query(option)}>
                查询
              </Button>
              <Button type="default" onClick={() => this.reset(option)}>
                重置
              </Button>
            </Col>
          </Row>
        }
      </Fragment>
    );
  }
}
