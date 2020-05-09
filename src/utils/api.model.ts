import { extend } from 'umi-request';
import { LocalStorageService } from './localStorage';
import { message } from 'antd';
import { history } from 'umi';
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
      let codeMessage: { [key: number]: string } = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
      };
      if (error.response.status === 401) {
        message.error('用户身份已过期');
        history.push('/login');
      }
      if (error.response.status > 300 && error.response.status !== 401) {
        message.error(codeMessage[error.response.status]);
      }

      /* 异常处理 */
    },
  });

  requset = (data: Object) => {
    if (this.apidic.method === 'post') {
      return this.requestOner
        .post(this.apidic.url, { data: data })
        .then(res => (res ? res.data : {}));
    }
    if (this.apidic.method === 'get') {
      return this.requestOner.get(this.apidic.url).then(res => res?.data);
    }
  };
}
