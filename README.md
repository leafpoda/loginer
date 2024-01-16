The library is available as an [npm package](https://www.npmjs.com/package/loginer?activeTab=readme).
To install the package run:


```bash
npm install loginer --save
```

## Usage

```jsx
import {dingTalkLogin,wechatLogin} from 'loginer';

// 钉钉登录 参考钉钉官方文档 
dingTalkLogin({
    id: 'login_container', // 这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
    goto: '',
    style: 'border:none;background-color:#FFFFFF;margin: 0 auto;',
    width: '365',
    height: '400'
});


// 微信登录 参考微信官方文档 
wechatLogin({
    self_redirect: false,
    id: 'login_container_wechat',
    appid: '',
    scope: 'snsapi_login',
    redirect_uri: '',
    state: 'STATE1',
    style: 'border:none;background-color:#FFFFFF;margin: 0 auto;',
    href: ''
});

