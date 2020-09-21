export const loginApi = ({
  username,
  password
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123') {
        resolve({
          data: {
            access_token: '82jdu82193yh90sad83hxfgsd'
          },
          message: 'Đăng nhập thành công'
        })
      } else {
        reject(new Error('Đăng nhập thất bại'))
      }
    }, 100)
  })
