(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{553:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"闭包的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的定义"}},[t._v("#")]),t._v(" 闭包的定义")]),t._v(" "),s("p",[t._v("MDN里对闭包的定义：一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。")]),t._v(" "),s("p",[t._v("在了解闭包之前，我们得先知道执行上下文和词法作用域的概念。")]),t._v(" "),s("h2",{attrs:{id:"js-执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-执行上下文"}},[t._v("#")]),t._v(" js 执行上下文")]),t._v(" "),s("p",[t._v("参考："),s("RouterLink",{attrs:{to:"/10.文章收录/08.执行上下文.html"}},[t._v("js 执行上下文")])],1),t._v(" "),s("h2",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),s("p",[t._v("参考："),s("RouterLink",{attrs:{to:"/10.文章收录/01.作用域.html"}},[t._v("词法作用域")])],1),t._v(" "),s("p",[t._v("搞懂了执行上下文和词法作用域以后，我们结合这两者，去看看函数中返回一个函数，它会发生什么？")]),t._v(" "),s("h2",{attrs:{id:"返回函数的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回函数的函数"}},[t._v("#")]),t._v(" 返回函数的函数")]),t._v(" "),s("p",[t._v("一个函数可以返回任何东西。仔细看下面这个例子，因为这对于理解闭包非常重要。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAdder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNumbers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" addNumbers\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" adder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAdder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("adder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example of function returning a function: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("庖丁解牛")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("第1行。我们在"),s("strong",[t._v("全局执行上下文")]),t._v("中"),s("strong",[t._v("声明一个变量")]),t._v("val并赋值为 7。")])]),t._v(" "),s("li",[s("p",[t._v("第 2-8 行。我们在全局执行上下文中声明了一个名为 createAdder 的变量，并为其分配了一个"),s("strong",[t._v("函数定义")]),t._v("。第3-7行描述了上述函数定义，和以前一样，在这一点上，我们没有直接讨论这个函数。我们只是"),s("strong",[t._v("将函数定义存储到那个变量")]),t._v("(createAdder)中。")])]),t._v(" "),s("li",[s("p",[t._v("第9行。我们在全局执行上下文中声明了一个名为 adder 的新变量，暂时，值为 undefined。")])]),t._v(" "),s("li",[s("p",[t._v("第9行。我们看到括号()，我们需要执行或调用一个函数，查找全局执行上下文的内存并查找名为 createAdder 的变量，它是在步骤2中创建的。好吧，我们调用它。")])]),t._v(" "),s("li",[s("p",[t._v("调用函数时，执行到第2行。创建一个新的 createAdder 执行上下文。我们可以在 createAdder 的执行上下文中创建自有变量。js 引擎将 createAdder 的上下文添加到调用堆栈。这个函数没有参数，让我们直接跳到它的主体部分.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("第 3-6 行。我们有一个新的函数声明，我们在 createAdder 执行上下文中创建一个变量addNumbers。这很重要，addnumber只存在于createAdder执行上下文中。我们将函数定义存储在名为 "),s("code",[t._v("addNumbers")]),t._v(" 的自有变量中")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("第7行，我们返回变量addNumbers的内容。js引擎查找一个名为addNumbers的变量并找到它，这是一个函数定义。好的，函数可以返回任何东西，包括函数定义。我们返addNumbers的定义。第4行和第5行括号之间的内容构成该函数定义")]),t._v("。"),s("strong",[t._v("返回时，createAdder执行上下文将被销毁。addNumbers 变量不再存在。但addNumbers函数定义仍然存在，因为它返回并赋值给了adder 变量")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("第10行。我们在全局执行上下文中定义了一个新的变量 sum，先赋值为 undefined;")])]),t._v(" "),s("li",[s("p",[t._v("接下来我们需要执行一个函数。哪个函数? 是名为adder变量中定义的函数。我们在全局执行上下文中查找它，果然找到了它，这个函数有两个参数。")])]),t._v(" "),s("li",[s("p",[t._v("让我们查找这两个参数，第一个是我们在步骤1中定义的变量val，它表示数字7，第二个是数字8。")])]),t._v(" "),s("li",[s("p",[t._v("现在我们要执行这个函数，函数定义概述在第3-5行，因为这个函数是匿名，为了方便理解，我们暂且叫它adder吧。这时创建一个adder函数执行上下文，在adder执行上下文中创建了两个新变量 a 和 b。它们分别被赋值为 7 和 8，因为这些是我们在上一步传递给函数的参数。")])]),t._v(" "),s("li",[s("p",[t._v("第 4 行。在adder执行上下文中声明了一个名为ret的新变量,")])]),t._v(" "),s("li",[s("p",[t._v("第 4 行。将变量a的内容和变量b的内容相加得15并赋给ret变量。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ret变量从该函数返回。这个匿名函数执行上下文被销毁，从调用堆栈中删除，变量a、b和ret不再存在")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("返回值被分配给我们在步骤9中定义的sum变量。")])]),t._v(" "),s("li",[s("p",[t._v("我们将sum的值打印到控制台。")])]),t._v(" "),s("li",[s("p",[t._v("如预期，控制台将打印15。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("总结：首先，函数定义可以存储在变量中，函数定义在程序调用之前是不可见的。其次，每次调用函数时，都会(临时)创建一个本地执行上下文。当函数完成时，执行上下文将消失。"),s("strong",[t._v("函数在遇到return或右括号}时执行完成")]),t._v("。")])]),t._v(" "),s("p",[t._v("经过上面的分析，我们搞懂了当一个函数返回一个函数的时候，是如何工作的。下面我们就看一看闭包是如何工作的。")]),t._v(" "),s("h2",{attrs:{id:"闭包是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包是如何工作的"}},[t._v("#")]),t._v(" 闭包是如何工作的")]),t._v(" "),s("p",[t._v("这里我们没有什么晦涩难懂的定义，直接上代码，一步步分析代码执行的过程，你能看懂了，对闭包的理解也就懂了。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myFunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" counter\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myFunction\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" increment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example increment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("庖丁解牛")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("同上，第1-8行。我们在全局执行上下文中创建了一个新的变量 "),s("code",[t._v("createCounter")]),t._v(" ，它得到了指定的函数定义。")])]),t._v(" "),s("li",[s("p",[t._v("同上，第9行。我们在全局执行上下文中声明了一个名为 "),s("code",[t._v("increment")]),t._v(" 的新变量。")])]),t._v(" "),s("li",[s("p",[t._v("同上，第9行。我们需要调用 "),s("code",[t._v("createCounter")]),t._v(" 函数并将其返回值赋给 "),s("code",[t._v("increment")]),t._v("  变量。")])]),t._v(" "),s("li",[s("p",[t._v("同上，第1-8行。调用函数，创建新的本地执行上下文。")])]),t._v(" "),s("li",[s("p",[t._v("同上，第2行。在本地执行上下文中，声明一个名为 "),s("code",[t._v("counter")]),t._v("的新变量并赋值为 0 。")])]),t._v(" "),s("li",[s("p",[t._v("第3-6行。声明一个名为 "),s("code",[t._v("myFunction")]),t._v(" 的新变量，变量在本地执行上下文中声明,变量的内容是另一个函数定义。如第4行和第5行所定义，现在我们还"),s("code",[t._v("创建了一个闭包")]),t._v("，"),s("code",[t._v("并将其作为函数定义的一部分")]),t._v("。"),s("code",[t._v("闭包包含作用域中的变量，在本例中是变量counter(值为0)")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("第7行。返回 "),s("code",[t._v("myFunction")]),t._v(" 变量的内容,删除本地执行上下文。"),s("code",[t._v("myFunction")]),t._v("和"),s("code",[t._v("counter")]),t._v("不再存在。控制权交给了调用上下文，我们返回函数定义和它的闭包，闭包中包含了创建它时在作用域内的变量。")])]),t._v(" "),s("li",[s("p",[t._v("第9行。在调用上下文(全局执行上下文)中，"),s("code",[t._v("createCounter")]),t._v("返回的值被指定为"),s("code",[t._v("increment")]),t._v("，变量"),s("code",[t._v("increment")]),t._v("现在包含一个函数定义(和闭包),由c"),s("code",[t._v("reateCounter")]),t._v("返回的函数定义,它不再标记为"),s("code",[t._v("myFunction")]),t._v("，但它的定义是相同的,在全局上下文中，称为"),s("code",[t._v("increment")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("第10行。声明一个新变量c1。")])]),t._v(" "),s("li",[s("p",[t._v("继续第10行。查找变量"),s("code",[t._v("increment")]),t._v("，它是一个函数，调用它。它包含前面返回的函数定义,如第4-5行所定义的。(它还有一个带有变量的闭包)。")])]),t._v(" "),s("li",[s("p",[t._v("创建一个新的执行上下文，没有参数，开始执行函数。")])]),t._v(" "),s("li",[s("p",[t._v("第4行。"),s("code",[t._v("counter = counter + 1")]),t._v("，寻找变量 "),s("code",[t._v("counter")]),t._v("，在查找本地或全局执行上下文之前，让我们检查一下闭包，瞧，闭包包含一个名为"),s("code",[t._v("counter")]),t._v("的变量，其值为0。在第4行表达式之后，它的值被设置为1。它再次被储存在闭包里，闭包现在包含值为1的变量 "),s("code",[t._v("counter")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("第5行。我们返回"),s("code",[t._v("counter")]),t._v("的值，销毁本地执行上下文。")])]),t._v(" "),s("li",[s("p",[t._v("回到第10行。返回值1被赋给变量c1。")])]),t._v(" "),s("li",[s("p",[t._v("第11行。我们重复步骤10-14。这一次，在闭包中此时变量"),s("code",[t._v("counter")]),t._v("的值是1。它在第12行设置的，它的值被递增并以2的形式存储在递增函数的闭包中,c2被赋值为2。")])]),t._v(" "),s("li",[s("p",[t._v("第12行。重复步骤10-14行,c3被赋值为3。")])]),t._v(" "),s("li",[s("p",[t._v("第13行。我们打印变量c1 c2和c3的值")])])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("blockquote",[s("p",[t._v("当一个函数被创建并传递或从另一个函数返回时，它会携带一个背包。背包中是函数声明时作用域内的所有变量。")])]),t._v(" "),s("h2",{attrs:{id:"闭包的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的应用"}},[t._v("#")]),t._v(" 闭包的应用")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day09-%20%E9%97%AD%E5%8C%85%E5%BA%94%E7%94%A81%20-%20%E6%83%B0%E6%80%A7%E5%87%BD%E6%95%B0.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何利用闭包制造惰性函数"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day10-%E9%97%AD%E5%8C%85%E5%BA%94%E7%94%A82-%E5%81%8F%E5%BA%94%E7%94%A8%E5%87%BD%E6%95%B0%E4%B8%8E%E7%A7%91%E9%87%8C%E5%8C%96.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包应用-偏应用函数与科里化"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day11-%20%E9%97%AD%E5%8C%85%E5%BA%94%E7%94%A83%20-%20%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包应用-立即执行函数IIFE"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day12%20-%20%E9%97%AD%E5%8C%85%E5%BA%94%E7%94%A84%20-%20%E7%B1%BB%E5%BA%93%E5%B0%81%E8%A3%85.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包应用-类库封装"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day13%20-%20%E9%97%AD%E5%8C%85%E5%BA%94%E7%94%A85%20-%20%E6%9E%84%E5%BB%BA%E5%99%A8%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包应用-构建器打包webpack"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903858636849159",target:"_blank",rel:"noopener noreferrer"}},[t._v("我从来不理解JavaScript闭包，直到有人这样向我解释它"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/su37josephxia/frontend-interview/blob/main/day/01-js/Day08-%E4%BB%80%E4%B9%88%E6%98%AF%E9%97%AD%E5%8C%85.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是闭包？如何制造闭包？"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);