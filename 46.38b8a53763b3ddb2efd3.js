(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{161:function(n,e,i){"use strict";i.r(e);var o=function(){var n=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var s=i(0),a=Object(s.a)({},o,[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("section",[i("h2",[n._v("Conditionals")]),n._v(" "),i("p",[n._v("Conditionals provide control flow to a language which is otherwise static, providing conditional imports, mixins, functions, and more. The examples below are simply examples, and not recommended :)")]),n._v(" "),i("section",[i("h3",[n._v("if / else if / else")]),n._v(" "),i("p",[n._v("The "),i("code",[n._v("if")]),n._v(" conditional works as you would expect, simply accepting an expression, evaluating the following block when "),i("code",[n._v("true")]),n._v(". Along with "),i("code",[n._v("if")]),n._v(" are the typical "),i("code",[n._v("else if")]),n._v(" and "),i("code",[n._v("else")]),n._v(" tokens, acting as fallbacks.")]),n._v(" "),i("p",[n._v("The example below would conditionally overload the "),i("code",[n._v("padding")]),n._v(" property, swapping it for "),i("code",[n._v("margin")]),n._v(".")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      overload-padding = true\n      \n      if overload-padding\n        padding(y, x)\n          margin y x\n      \n      body\n        padding 5px 10px\n    ")])]),n._v(" "),i("p",[n._v("Another example:")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      box(x, y, margin = false)\n        padding y x\n        if margin\n          margin y x\n      \n      body\n        box(5px, 10px, true)\n\n      p\n        box(5px, 10px, false)\n    ")])])]),n._v(" "),i("section",[i("h3",[n._v("unless")]),n._v(" "),i("p",[n._v("For users familiar with the Ruby programming language, we have the "),i("code",[n._v("unless")]),n._v(" conditional. It's basically the opposite of "),i("code",[n._v("if")]),n._v("-essentially "),i("code",[n._v("if (!(expr))")]),n._v(".")]),n._v(" "),i("p",[n._v("In the example below, if "),i("code",[n._v("disable-padding-override")]),n._v(" is "),i("code",[n._v("undefined")]),n._v(" or "),i("code",[n._v("false")]),n._v(", "),i("code",[n._v("padding")]),n._v(" will be overridden, displaying "),i("code",[n._v("margin")]),n._v(" instead. But if it's "),i("code",[n._v("true")]),n._v(", "),i("code",[n._v("padding")]),n._v(" will continue outputting "),i("code",[n._v("padding 5px 10px")]),n._v(" as expected.")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      disable-padding = true\n    \n      unless disable-padding is defined and disable-padding\n        padding(x, y)\n          margin y x\n      \n      body\n        padding 5px 10px\n    ")])])]),n._v(" "),i("section",[i("h3",[n._v("Postfix Conditionals")]),n._v(" "),i("p",[n._v("Stylus supports postfix conditionals. This means that "),i("code",[n._v("if")]),n._v(" and "),i("code",[n._v("unless")]),n._v(" act as operators; they evaluate the left-hand operand when the right-hand expression (if statement) is truthy. This could left hand expression and right hand conditional appear in one line")]),n._v(" "),i("p",[n._v("For example let's define "),i("code",[n._v("negative()")]),n._v(" to perform some basic type checking. Below we use block-style conditionals:")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      negative(n)\n        unless n is a 'unit'\n          error('invalid number')\n        if n < 0\n          yes\n        else\n          no\n    ")])]),n._v(" "),i("p",[n._v("Next, we utilize postfix conditionals to keep our function terse.")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      negative(n)\n        error('invalid number') unless n is a 'unit'\n        return yes if n < 0\n        no\n    ")])]),n._v(" "),i("p",[n._v("Of course, we could take this further. For example, we could write "),i("code",[n._v("n < 0 ? yes : no")]),n._v(", or simply stick with booleans: "),i("code",[n._v("n < 0")]),n._v(".")]),n._v(" "),i("p",[n._v("Postfix conditionals may be applied to most single-line statements. For example, "),i("code",[n._v("@import")]),n._v(", "),i("code",[n._v("@charset")]),n._v(", mixins-and of course, properties as shown below:")]),n._v(" "),i("pre",[i("code",{staticClass:"my-stylus"},[n._v("\n      pad(types = margin padding, n = 5px)\n        padding unit(n, px) if padding in types\n        margin unit(n, px) if margin in types\n    \n      body\n        pad()\n    \n      body\n        pad(margin)\n    \n      body\n        apply-mixins = true\n        pad(padding, 10) if apply-mixins\n    ")])]),n._v(" "),i("p",[n._v("yielding:")]),n._v(" "),i("pre",[i("code",{staticClass:"my-css"},[n._v("\n      body {\n        padding: 5px;\n        margin: 5px;\n      }\n      body {\n        margin: 5px;\n      }\n      body {\n        padding: 10px;\n      }\n    ")])])])])}],!1,null,null,null);a.options.__file="docs/web/stylus/Conditionals.vue";e.default=a.exports}}]);