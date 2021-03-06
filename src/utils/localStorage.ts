import { Userinfo } from './user.model';

/**
 * 把项目需要用的localStorage 进行统一管理
 * @param userInfo:用户信息
 * @param apiGroup:接口组信息
 * @param timeout:时间戳
 * @param menus:菜单信息
 * @param token:用户token
 *
 *
 */
const userInfo = 'userInfo';
const apiGroup = 'apiGroup';
const timeoutKey = 'timeout';
const token = 'token';
export function setToken(data: string) {
  localStorage.setItem(token, data);
}
// 获取用户信息
export function getToken() {
  return localStorage.getItem(token);
}
// 设置用户信息
export const setUserInfo = (info: Userinfo) => {
  if (info && info.exp) {
    localStorage.setItem(timeoutKey, info.exp.toString());
    localStorage.setItem(userInfo, JSON.stringify(info));
  }
};

export const getTimeout = () => {
  return Number(localStorage.getItem(timeoutKey)) || 0;
};

export const cleanLoginInfo = () => {
  const keys = [token, userInfo, timeoutKey];
  keys.forEach(key => {
    localStorage.removeItem(key);
  });
};

export class LocalStorageService {
  // 获取用户信息
  public getUserInfo() {
    const info = localStorage.getItem(userInfo);
    if (info && info.startsWith('{')) {
      return JSON.parse(info);
    } else {
      return {};
    }
  }
  // 设置用户信息
  public setToken(data: string) {
    localStorage.setItem(token, data);
  }
  // 获取用户信息
  public getToken = () => localStorage.getItem(token);

  // 设置时间戳
  public setTimeout(time: string) {
    localStorage.setItem(timeoutKey, time);
  }
  // 获取时间戳
  public getTimeout(): number {
    let to = localStorage.getItem(timeoutKey);
    to =
      to ||
      (this.getUserInfo() && this.getUserInfo().exp
        ? String(this.getUserInfo().exp)
        : '0');
    this.setTimeout(to);
    if (to && to.length > 0) {
      return parseInt(to, 10);
    }
    return 0;
  }
}
