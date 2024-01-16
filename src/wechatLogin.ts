import { wechatLoginParams } from './type';

/**
 * @name wechatLogin
 * @param loginParams
 */
export function wechatLogin(loginParams: wechatLoginParams): void {
  let targetElement = document.getElementById(loginParams.id);
  if (!targetElement) {
    throw new Error("target element is not exist");
  }
  var c = "default";
  loginParams.self_redirect === !0 ? c = "true" : loginParams.self_redirect === !1 && (c = "false");

  let iframe = document.createElement("iframe");
  let iframeHref = "https://open.weixin.qq.com/connect/qrconnect?appid=" + loginParams.appid + "&scope=" + loginParams.scope +
    "&redirect_uri=" + loginParams.redirect_uri + "&state=" + loginParams.state + "&login_type=jssdk&self_redirect=" + c;
  iframeHref += loginParams.style ? "&style=" + loginParams.style : "";
  iframeHref += loginParams.href ? "&href=" + loginParams.href : "";

  iframe.src = iframeHref;
  iframe.frameBorder = "0";
  // iframe.allowTransparency = "true";
  iframe.scrolling = "no";
  iframe.width = "300px";
  iframe.height = "400px";

  targetElement.innerHTML = "";
  targetElement.appendChild(iframe);
}
