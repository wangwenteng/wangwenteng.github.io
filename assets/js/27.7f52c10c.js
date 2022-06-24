(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{647:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("组件中DOM样式")])]),s._v(" "),a("h2",{attrs:{id:"组件中dom样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中dom样式"}},[s._v("#")]),s._v(" 组件中DOM样式")]),s._v(" "),a("ul",[a("li",[s._v("行内样式")])]),s._v(" "),a("p",[s._v("想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现：")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("fontSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Hello world")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如"),a("code",[s._v("render")]),s._v("函数里、组件原型上、外链js文件中")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v("class")])])]),s._v(" "),a("p",[s._v("React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体")]),s._v(" "),a("p",[s._v("其实我们大多数情况下还是大量的在为元素添加类名，但是需要注意的是，"),a("code",[s._v("class")]),s._v("需要写成"),a("code",[s._v("className")]),s._v("（因为毕竟是在写类js代码，会收到js规则的现在，而"),a("code",[s._v("class")]),s._v("是关键字）")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p className"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello world"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("不同的条件添加不同的样式")])]),s._v(" "),a("p",[s._v("有时候需要根据不同的条件添加不同的样式，比如：完成状态，完成是绿色，未完成是红色。那么这种情况下，我们推荐使用"),a("a",{attrs:{href:"https://www.npmjs.com/package/classnames",target:"_blank",rel:"noopener noreferrer"}},[s._v("classnames"),a("OutboundLink")],1),s._v("这个包：")]),s._v(" "),a("ul",[a("li",[s._v("css-in-js")])]),s._v(" "),a("p",[a("code",[s._v("styled-components")]),s._v("是针对React写的一套css-in-js框架，简单来讲就是在js中写css。"),a("a",{attrs:{href:"https://www.npmjs.com/package/styled-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);