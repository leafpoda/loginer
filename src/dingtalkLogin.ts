import { dingtalkLoginParams } from './type';

/**
 * @name dingtalkLogin
 * @param loginParams
 */
export function dingtalkLogin(loginParams: dingtalkLoginParams): void {
  let targetElement = document.getElementById(loginParams.id);
  if (!targetElement) {
    throw new Error("target element is not exist");
  }

  let iframe = document.createElement("iframe");
  let iframeHref = "https://login.dingtalk.com/login/qrcode.htm?goto=" + loginParams.goto;

  iframeHref += loginParams.style ? "&style=" + encodeURIComponent(loginParams.style) : "";
  iframeHref += loginParams.href ? "&href=" + loginParams.href : "";

  iframe.src = iframeHref;
  iframe.frameBorder = "0";
  // iframe.allowTransparency = "true";
  iframe.scrolling = "no";
  iframe.width = loginParams.width ? loginParams.width + 'px' : "365px";
  iframe.height = loginParams.height ? loginParams.height + 'px' : "400px";

  targetElement.innerHTML = "";
  targetElement.appendChild(iframe);
}
