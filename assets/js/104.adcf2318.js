(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{726:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),n("p",[s._v("在过去的几年中，Go语言的发展是惊人的，并且吸引了很多由其他语言（Python、PHP、Ruby）转向Go语言的跨语言学习者。 Go语言太容易实现并发了，以至于它在很多地方被不正确的使用了。")])]),s._v(" "),n("h2",{attrs:{id:"go语言中的单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言中的单例模式"}},[s._v("#")]),s._v(" Go语言中的单例模式")]),s._v(" "),n("p",[s._v("在过去的几年中，Go语言的发展是惊人的，并且吸引了很多由其他语言（Python、PHP、Ruby）转向Go语言的跨语言学习者。")]),s._v(" "),n("p",[s._v("在过去的很长时间里，很多开发人员和初创公司都习惯使用Python、PHP或Ruby快速开发功能强大的系统，并且大多数情况下都不需要担心内部事务如何工作，也不需要担心线程安全性和并发性。直到最近几年，多线程高并发的系统开始流行起来，我们现在不仅需要快速开发功能强大的系统，而且还要保证被开发的系统能够足够快速运行。（我们真是太难了☺️）")]),s._v(" "),n("p",[s._v("对于被Go语言天生支持并发的特性吸引来的跨语言学习者来说，我觉着掌握Go语言的语法并不是最难的，最难的是突破既有的思维定势，真正理解并发和使用并发来解决实际问题。")]),s._v(" "),n("p",[s._v("Go语言太容易实现并发了，以至于它在很多地方被不正确的使用了。")]),s._v(" "),n("h3",{attrs:{id:"常见的错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的错误"}},[s._v("#")]),s._v(" 常见的错误")]),s._v(" "),n("p",[s._v("有一些错误是很常见的，比如不考虑并发安全的单例模式。就像下面的示例代码：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" singleton\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" singleton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tinstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不是并发安全的")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("在上述情况下，多个goroutine可以执行第一个检查，并且它们都将创建该"),n("code",[s._v("singleton")]),s._v("类型的实例并相互覆盖。无法保证它将在此处返回哪个实例，并且对该实例的其他进一步操作可能与开发人员的期望不一致。")]),s._v(" "),n("p",[s._v("不好的原因是，如果有代码保留了对该单例实例的引用，则可能存在具有不同状态的该类型的多个实例，从而产生潜在的不同代码行为。这也成为调试过程中的一个噩梦，并且很难发现该错误，因为在调试时，由于运行时暂停而没有出现任何错误，这使非并发安全执行的可能性降到了最低，并且很容易隐藏开发人员的问题。")]),s._v(" "),n("h3",{attrs:{id:"激进的加锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#激进的加锁"}},[s._v("#")]),s._v(" 激进的加锁")]),s._v(" "),n("p",[s._v("也有很多对这种并发安全问题的糟糕解决方案。使用下面的代码确实能解决并发安全问题，但会带来其他潜在的严重问题，通过加锁把对该函数的并发调用变成了串行。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mu Sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mutex\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果实例存在没有必要加锁")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("在上面的代码中，我们可以看到在创建单例实例之前通过引入"),n("code",[s._v("Sync.Mutex")]),s._v("和获取Lock来解决并发安全问题。问题是我们在这里执行了过多的锁定，即使我们不需要这样做，在实例已经创建的情况下，我们应该简单地返回缓存的单例实例。在高度并发的代码基础上，这可能会产生瓶颈，因为一次只有一个goroutine可以获得单例实例。")]),s._v(" "),n("p",[s._v("因此，这不是最佳方法。我们必须考虑其他解决方案。")]),s._v(" "),n("h3",{attrs:{id:"check-lock-check模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-lock-check模式"}},[s._v("#")]),s._v(" Check-Lock-Check模式")]),s._v(" "),n("p",[s._v("在C ++和其他语言中，确保最小程度的锁定并且仍然是并发安全的最佳和最安全的方法是在获取锁定时利用众所周知的"),n("code",[s._v("Check-Lock-Check")]),s._v("模式。该模式的伪代码表示如下。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这里执行加锁安全的代码")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("该模式背后的思想是，你应该首先进行检查，以最小化任何主动锁定，因为IF语句的开销要比加锁小。其次，我们希望等待并获取互斥锁，这样在同一时刻在那个块中只有一个执行。但是，在第一次检查和获取互斥锁之间，可能有其他goroutine获取了锁，因此，我们需要在锁的内部再次进行检查，以避免用另一个实例覆盖了实例。")]),s._v(" "),n("p",[s._v("如果将这种模式应用于我们的"),n("code",[s._v("GetInstance()")]),s._v("方法，我们会写出类似下面的代码：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不太完美 因为这里不是完全原子的")]),s._v("\n        mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("通过使用"),n("code",[s._v("sync/atomic")]),s._v("这个包，我们可以原子化加载并设置一个标志，该标志表明我们是否已初始化实例。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sync"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sync/atomic"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" initialized "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处省略")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("LoadUInt32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("initialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 原子操作 ")]),s._v("\n\t\t    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" initialized "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("StoreUint32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("initialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("但是……这看起来有点繁琐了，我们其实可以通过研究Go语言和标准库如何实现goroutine同步来做得更好。")]),s._v(" "),n("h3",{attrs:{id:"go语言惯用的单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言惯用的单例模式"}},[s._v("#")]),s._v(" Go语言惯用的单例模式")]),s._v(" "),n("p",[s._v("我们希望利用Go惯用的方式来实现这个单例模式。我们在标准库"),n("code",[s._v("sync")]),s._v("中找到了"),n("code",[s._v("Once")]),s._v("类型。它能保证某个操作仅且只执行一次。下面是来自Go标准库的源码（部分注释有删改）。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Once is an object that will perform exactly one action.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Once "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// done indicates whether the action has been performed.")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// It is first in the struct because it is used in the hot path.")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The hot path is inlined at every call site.")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Placing done first allows more compact instructions on some architectures (amd64/x86),")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// and fewer instructions (to calculate offset) on other architectures.")]),s._v("\n\tdone "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),s._v("\n\tm    Mutex\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("LoadUint32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// check")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Outlined slow-path to allow inlining of the fast-path.")]),s._v("\n\t\to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSlow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSlow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lock")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// check")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("StoreUint32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("这说明我们可以借助这个实现只执行一次某个函数/方法，"),n("code",[s._v("once.Do()")]),s._v("的用法如下：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[s._v("once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这里执行安全的初始化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("下面就是单例实现的完整代码，该实现利用"),n("code",[s._v("sync.Once")]),s._v("类型去同步对"),n("code",[s._v("GetInstance()")]),s._v("的访问，并确保我们的类型仅被初始化一次。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" singleton\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sync"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" singleton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" once sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Once\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("因此，使用"),n("code",[s._v("sync.Once")]),s._v("包是安全地实现此目标的首选方式，类似于Objective-C和Swift（Cocoa）实现"),n("code",[s._v("dispatch_once")]),s._v("方法来执行类似的初始化。")]),s._v(" "),n("h3",{attrs:{id:"结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),n("p",[s._v("当涉及到并发和并行代码时，需要对代码进行更仔细的检查。始终让你的团队成员执行代码审查，因为这样的事情很容易就会被发现。")]),s._v(" "),n("p",[s._v("所有刚转到Go语言的新开发人员都必须真正了解并发安全性如何工作以更好地改进其代码。即使Go语言本身通过允许你在对并发性知识知之甚少的情况下设计并发代码，也完成了许多繁重的工作。在某些情况下，单纯的依靠语言特性也无能为力，你仍然需要在开发代码时应用最佳实践。")]),s._v(" "),n("p",[s._v("翻译自http://marcio.io/2015/07/singleton-pattern-in-go/，考虑到可读性部分内容有修改。")])])}),[],!1,null,null,null);t.default=e.exports}}]);