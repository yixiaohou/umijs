import request from 'umi-request';
class APIDic {
  code?: string;
  url!: string;
  method!: string;
}

export default class API {
  constructor(public apidic: APIDic) {}
  requset = (data: Object) => {
    if (this.apidic.method === 'post') {
      return request.post(this.apidic.url, { data: data }).then(res => res);
    }
    if (this.apidic.method === 'get') {
      return request.get(this.apidic.url).then(res => res);
    }
  };
}
