export interface wechatLoginParams {
  self_redirect: boolean,
  id: string,
  appid: string,
  scope: string,
  redirect_uri: string,
  state: string,
  style: string,
  href: string
}

export interface dingtalkLoginParams {
  id: string
  goto: string,
  style: string,
  width: string,
  height: string,
  href: string
}
