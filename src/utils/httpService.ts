import { extend } from 'umi-request';
import API from './api.model';
import { LocalStorageService } from './localStorage';

export class HttpService {
  static getUser: API | undefined;
  static getMenus: API | undefined;
  static apiTokenValidate: API | undefined;

  static isinited = true;
  constructor() {}

  static request = extend({
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //
  static getToken(data: Object) {
    return this.request
      .post('http://dev.m-glory.net/third/login', { data: data })
      .then(res => res);
  }

  // 初始化接口
  static getApi() {
    if (this.isinited) {
      this.isinited = false;
      return this.request.get('http://127.0.1:9124/apis.json').then(res => {
        if (res.code === '0') {
          this.initAPIS(res.apis);
        }
        return true;
      });
    }
  }

  static initAPIS = (apis: Array<any>) => {
    for (const key in apis) {
      if (apis.hasOwnProperty(key)) {
        HttpService[key] = new API(apis[key]);
      }
    }
  };
}
