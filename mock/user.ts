// 用户信息列表
function createUserList() {
  return [
    {
      userId: 1,
      username: 'admin',
      password: '123456',
      nickname: '超级管理员',
      avatar: 'https://avatars.githubusercontent.com/u/59305309?v=4',
      desc: '超级管理员',
      roles: ['超级管理员'],
      buttons: ['cuser:add', 'cuser:del', 'cuser:edit', 'cuser:query'],
      routes: ['home', 'about'],
      token: 'admin',
    },
    {
      userId: 2,
      username: 'test',
      password: '123456',
      nickname: '测试账号',
      avatar: 'https://avatars.githubusercontent.com/u/59305357?v=2',
      desc: '测试账号',
      roles: ['测试账号'],
      buttons: ['cuser:query'],
      routes: ['home'],
    },
  ]
}

export default [
  {
    url: '/api/user/login', // 用户登录，返回token
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (i) => i.username === username && i.password === password,
      )
      if (!checkUser) {
        return { code: 201, data: { message: '账号或密码错误' } }
      }
      const { token } = checkUser
      return { code: 200, data: { token, message: '登录成功' } }
    },
  },
  {
    url: '/api/user/info', // 获取用户信息
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      const checkUser = createUserList().find((i) => i.token === token)
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      return { code: 200, data: { checkUser } }
    },
  },
]
