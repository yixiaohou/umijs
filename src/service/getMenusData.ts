import request from 'umi-request';
export async function getMenusData() {
  const options = {
    method: 'get', // HTTP请求方法，默认为GET
    headers: {
      // HTTP的请求头，默认为{}
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 是否携带cookie，默认为omit,不携带; same-origi,同源携带; include,同源跨域都携带
  };
  return request.get('http://127.0.0.1:9124/menus.json').then(data => data);
}
