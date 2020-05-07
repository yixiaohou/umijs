import { extend } from 'umi-request';
import { LocalStorageService } from './localStorage';
class APIDic {
  code?: string;
  url!: string;
  method!: string;
}

export default class API {
  private localStorage = new LocalStorageService();
  constructor(public apidic: APIDic) {}

  requestOner = extend({
    // prefix: "http://test.m-glory.net",
    timeout: 1000,
    headers: {
      'Content-Type': ' application/json;charset=UTF-8',
      Authorization: this.localStorage.getToken() || '',
    },
    errorHandler: function(error) {
      /* 异常处理 */
    },
  });

  requset = (data: Object) => {
    if (this.apidic.method === 'post') {
      return this.requestOner
        .post(this.apidic.url, { data: data })
        .then(res => res?.data);
    }
    if (this.apidic.method === 'get') {
      return this.requestOner.get(this.apidic.url).then(res => res?.data);
    }
  };
}
