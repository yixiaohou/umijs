/**
 * 登录请求参数对象
 */
class LoginParameterModel {
  // 用户名
  // 用户名
  code!: string;
  // 密码
  // 密码
  pwd!: string;
  // 系统编码
  // 系统编码
  system!: string;
  // 门店
  // 门店
  store!: string;
}

// 登录请求参数对象
export type LoginParameter = Partial<LoginParameterModel>;

// 用户信息
class UserInfoAll {
  code!: string;
  name!: string;
  usertype!: string;
  userstores!: string[];
  is_binding!: boolean;
  rolecode!: string[];
  ent_id!: string;
  mobileNo!: string;
}

export type Userinfo = Partial<UserInfoAll>;
