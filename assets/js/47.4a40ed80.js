(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{670:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("Cookie和Session是Web开发绕不开的一个环节，本文介绍了Cookie和Session的原理及在Go语言中如何操作Cookie。")])]),s._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),a("h3",{attrs:{id:"cookie的由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的由来"}},[s._v("#")]),s._v(" Cookie的由来")]),s._v(" "),a("p",[s._v("HTTP协议是无状态的，这就存在一个问题。")]),s._v(" "),a("p",[s._v("无状态的意思是每次请求都是独立的，它的执行情况和结果与前面的请求和之后的请求都无直接关系，它不会受前面的请求响应情况直接影响，也不会直接影响后面的请求响应情况。")]),s._v(" "),a("p",[s._v("一句有意思的话来描述就是人生只如初见，对服务器来说，每次的请求都是全新的。")]),s._v(" "),a("p",[s._v("状态可以理解为客户端和服务器在某次会话中产生的数据，那无状态的就以为这些数据不会被保留。会话中产生的数据又是我们需要保存的，也就是说要“保持状态”。因此Cookie就是在这样一个场景下诞生。")]),s._v(" "),a("h3",{attrs:{id:"cookie是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie是什么"}},[s._v("#")]),s._v(" Cookie是什么")]),s._v(" "),a("p",[s._v("在 Internet 中，Cookie 实际上是指小量信息，是由 Web 服务器创建的，将信息存储在用户计算机上（客户端）的数据文件。一般网络用户习惯用其复数形式 Cookies，指某些网站为了辨别用户身份、进行 Session 跟踪而存储在用户本地终端上的数据，而这些数据通常会经过加密处理。")]),s._v(" "),a("h3",{attrs:{id:"cookie的机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的机制"}},[s._v("#")]),s._v(" Cookie的机制")]),s._v(" "),a("p",[s._v("Cookie是由服务器端生成，发送给User-Agent（一般是浏览器），浏览器会将Cookie的key/value保存到某个目录下的文本文件内，下次请求同一网站时就发送该Cookie给服务器（前提是浏览器设置为启用cookie）。Cookie名称和值可以由服务器端开发自己定义，这样服务器可以知道该用户是否是合法用户以及是否需要重新登录等，服务器可以设置或读取Cookies中包含信息，借此维护用户跟服务器会话中的状态。")]),s._v(" "),a("p",[s._v("总结一下Cookie的特点：")]),s._v(" "),a("ol",[a("li",[s._v("浏览器发送请求的时候，自动把携带该站点之前存储的Cookie信息。")]),s._v(" "),a("li",[s._v("服务端可以设置Cookie数据。")]),s._v(" "),a("li",[s._v("Cookie是针对单个域名的，不同域名之间的Cookie是独立的。")]),s._v(" "),a("li",[s._v("Cookie数据可以配置过期时间，过期的Cookie数据会被系统清除。")])]),s._v(" "),a("h3",{attrs:{id:"查看cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看cookie"}},[s._v("#")]),s._v(" 查看Cookie")]),s._v(" "),a("p",[s._v("我们使用Chrome浏览器打开一个网站，打开开发者工具查看该网站保存在我们电脑上的Cookie数据。")]),s._v(" "),a("h2",{attrs:{id:"go操作cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go操作cookie"}},[s._v("#")]),s._v(" Go操作Cookie")]),s._v(" "),a("h3",{attrs:{id:"cookie-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-2"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),a("p",[s._v("标准库"),a("code",[s._v("net/http")]),s._v("中定义了Cookie，它代表一个出现在HTTP响应头中Set-Cookie的值里或者HTTP请求头中Cookie的值的"),a("code",[s._v("HTTP cookie")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Cookie "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Name       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Value      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Path       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Domain     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Expires    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Time\n    RawExpires "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MaxAge=0表示未设置Max-Age属性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// MaxAge<0表示立刻删除该cookie，等价于"Max-Age: 0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MaxAge>0表示存在Max-Age属性，单位是秒")]),s._v("\n    MaxAge   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    Secure   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    HttpOnly "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    Raw      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Unparsed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 未解析的“属性-值”对的原始文本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"设置cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置cookie"}},[s._v("#")]),s._v(" 设置Cookie")]),s._v(" "),a("p",[a("code",[s._v("net/http")]),s._v("中提供了如下"),a("code",[s._v("SetCookie")]),s._v("函数，它在w的头域中添加Set-Cookie头，该HTTP头的值为cookie。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w ResponseWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"获取cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取cookie"}},[s._v("#")]),s._v(" 获取Cookie")]),s._v(" "),a("p",[a("code",[s._v("Request")]),s._v("对象拥有两个获取Cookie的方法和一个添加Cookie的方法：")]),s._v(" "),a("p",[s._v("获取Cookie的两种方法：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析并返回该请求的Cookie头设置的所有cookie")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回请求中名为name的cookie，如果未找到该cookie会返回nil, ErrNoCookie。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("添加Cookie的方法：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AddCookie向请求中添加一个cookie。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"gin框架操作cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gin框架操作cookie"}},[s._v("#")]),s._v(" gin框架操作Cookie")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/gin-gonic/gin"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    router "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gin_cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取Cookie")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NotSet"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置Cookie")]),s._v("\n            c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gin_cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie value: %s \\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),a("h3",{attrs:{id:"session的由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session的由来"}},[s._v("#")]),s._v(" Session的由来")]),s._v(" "),a("p",[s._v("Cookie虽然在一定程度上解决了“保持状态”的需求，但是由于Cookie本身最大支持4096字节，以及Cookie本身保存在客户端，可能被拦截或窃取，因此就需要有一种新的东西，它能支持更多的字节，并且他保存在服务器，有较高的安全性。这就是"),a("code",[s._v("Session")]),s._v("。")]),s._v(" "),a("p",[s._v("问题来了，基于HTTP协议的无状态特征，服务器根本就不知道访问者是“谁”。那么上述的Cookie就起到桥接的作用。")]),s._v(" "),a("p",[s._v("用户登陆成功之后，我们在服务端为每个用户创建一个特定的session和一个唯一的标识，它们一一对应。其中：")]),s._v(" "),a("ul",[a("li",[s._v("Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；")]),s._v(" "),a("li",[s._v("唯一标识通常称为"),a("code",[s._v("Session ID")]),s._v("会写入用户的Cookie中。")])]),s._v(" "),a("p",[s._v("这样该用户后续再次访问时，请求会自动携带Cookie数据（其中包含了"),a("code",[s._v("Session ID")]),s._v("），服务器通过该"),a("code",[s._v("Session ID")]),s._v("就能找到与之对应的Session数据，也就知道来的人是“谁”。")]),s._v(" "),a("p",[s._v("总结而言：Cookie弥补了HTTP无状态的不足，让服务器知道来的人是“谁”；但是Cookie以文本的形式保存在本地，自身安全性较差；所以我们就通过Cookie识别不同的用户，对应的在服务端为每个用户保存一个Session数据，该Session数据中能够保存具体的用户数据信息。")]),s._v(" "),a("p",[s._v("另外，上述所说的Cookie和Session其实是共通性的东西，不限于语言和框架。")]),s._v(" "),a("h1",{attrs:{id:"练习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[s._v("#")]),s._v(" 练习题")]),s._v(" "),a("ol",[a("li",[s._v("编写代码实现一个gin框架版Session中间件。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);