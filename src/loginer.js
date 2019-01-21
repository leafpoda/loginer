(function () {
    var loginer = {};
    loginer.wxlogin = function (a) {
        var c = "default";
        a.self_redirect === !0 ? c = "true" : a.self_redirect === !1 && (c = "false");
        var d = document.createElement("iframe"),
            e = "https://open.weixin.qq.com/connect/qrconnect?appid=" + a.appid + "&scope=" + a.scope +
            "&redirect_uri=" + a.redirect_uri + "&state=" + a.state + "&login_type=jssdk&self_redirect=" + c;
        e += a.style ? "&style=" + a.style : "", e += a.href ? "&href=" + a.href : "", d.src = e, d.frameBorder = "0",
            d.allowTransparency = "true", d.scrolling = "no", d.width = "300px", d.height = "400px";
        var f = document.getElementById(a.id);
        f.innerHTML = "", f.appendChild(d)
    }

    loginer.ddlogin = function (a) {
        var e, c = document.createElement("iframe"),
            d = "https://login.dingtalk.com/login/qrcode.htm?goto=" + a.goto ;
        d += a.style ? "&style=" + encodeURIComponent(a.style) : "",
            d += a.href ? "&href=" + a.href : "",
            c.src = d,
            c.frameBorder = "0",
            c.allowTransparency = "true",
            c.scrolling = "no",
            c.width =  a.width ? a.width + 'px' : "365px",
            c.height = a.height ? a.height + 'px' : "400px",
            e = document.getElementById(a.id),
            e.innerHTML = "",
            e.appendChild(c)
    }

    // Node.js
    if (typeof module === 'object' && module.exports) {
        module.exports = loginer;
    }
    // AMD / RequireJS
    else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return loginer;
        });
    }
    // included directly via <script> tag
    else {
        root.loginer = loginer;
    }
}());
