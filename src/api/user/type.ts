export interface loginFormData {
  username: string;
  password: string;
}

// 所有接口返回公有数据类型
export interface responseData {
  code: number;
  message: string;
  ok: boolean;
}

// 登录接口返回数据类型
export interface loginResponseData extends responseData {
  data: string;
}

export interface userInfoResponseData extends responseData {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}
