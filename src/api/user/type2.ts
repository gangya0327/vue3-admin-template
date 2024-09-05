// 登录接口需要的参数类型
export interface loginForm {
  username: string;
  password: string;
}

// 登录接口返回的数据类型
interface dataType {
  token?: string;
  message?: string;
}

export interface loginResponseData {
  code: number;
  data: dataType;
}

// 用户信息返回的数据类型
interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  roles: string[];
  buttons: string[];
  token: string;
}

interface user {
  checkUser: userInfo;
}

export interface userInfoResponseData {
  code: number;
  data: user;
}
