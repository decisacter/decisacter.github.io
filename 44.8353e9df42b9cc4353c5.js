(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{178:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var a=s(0),o=Object(a.a)({},i,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h3",[t._v("Serving static files in Express")]),t._v(" "),s("p",[t._v("To serve static files such as images, CSS files, and JavaScript files, use the "),s("code",[t._v("express.static")]),t._v(" built-in middleware function in Express.")]),t._v(" "),s("p",[t._v("The function signature is:")]),t._v(" "),s("pre",[s("code",{staticClass:"my-js"},[t._v("\n    express.static(root, [options])\n  ")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("root")]),t._v(" argument specifies the root directory from which to serve static assets.\n  For more information on the "),s("code",[t._v("options")]),t._v(" argument, see "),s("a",{attrs:{href:"/en/4x/api.html#express.static"}},[t._v("express.static")]),t._v(".")]),t._v(" "),s("p",[t._v("For example, use the following code to serve images, CSS files, and JavaScript files in a directory named "),s("code",[t._v("public")]),t._v(":")]),t._v(" "),s("pre",[s("code",{staticClass:"my-js"},[t._v("\n    app.use(express.static('public'))\n  ")])]),t._v(" "),s("p",[t._v("Now, you can load the files that are in the "),s("code",[t._v("public")]),t._v(" directory:")]),t._v(" "),s("pre",[s("code",{staticClass:"my-plain-text"},[t._v("\n    http://localhost:3000/images/kitten.jpg\n    http://localhost:3000/css/style.css\n    http://localhost:3000/js/app.js\n    http://localhost:3000/images/bg.png\n    http://localhost:3000/hello.html\n  ")])]),t._v(" "),s("div",{staticClass:"doc-box doc-info"},[t._v("\n  Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.\n  ")]),t._v(" "),s("p",[t._v("To use multiple static assets directories, call the "),s("code",[t._v("express.static")]),t._v(" middleware function multiple times:")]),t._v(" "),s("pre",[s("code",{staticClass:"my-js"},[t._v("\n    app.use(express.static('public'))\n    app.use(express.static('files'))\n  ")])]),t._v(" "),s("p",[t._v("Express looks up the files in the order in which you set the static directories with the "),s("code",[t._v("express.static")]),t._v(" middleware function.")]),t._v(" "),s("p",[t._v("To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the "),s("code",[t._v("express.static")]),t._v(" function, "),s("a",{attrs:{href:"/en/4x/api.html#app.use"}},[t._v("specify a mount path")]),t._v(" for the static directory, as shown below:")]),t._v(" "),s("pre",[s("code",{staticClass:"my-js"},[t._v("\n    app.use('/static', express.static('public'))\n  ")])]),t._v(" "),s("p",[t._v("Now, you can load the files that are in the "),s("code",[t._v("public")]),t._v(" directory from the "),s("code",[t._v("/static")]),t._v(" path prefix.")]),t._v(" "),s("pre",[s("code",{staticClass:"my-plain-text"},[t._v("\n    http://localhost:3000/static/images/kitten.jpg\n    http://localhost:3000/static/css/style.css\n    http://localhost:3000/static/js/app.js\n    http://localhost:3000/static/images/bg.png\n    http://localhost:3000/static/hello.html\n  ")])]),t._v(" "),s("p",[t._v("However, the path that you provide to the "),s("code",[t._v("express.static")]),t._v(" function is relative to the directory from where you launch your "),s("code",[t._v("node")]),t._v(" process. If you run the express app from another directory, it's safer to use the absolute path of the directory that you want to serve:")]),t._v(" "),s("pre",[s("code",{staticClass:"my-js"},[t._v("\n    app.use('/static', express.static(path.join(__dirname, 'public')))\n  ")])])])}],!1,null,null,null);o.options.__file="docs/web/express/starter/StaticFiles.vue";e.default=o.exports}}]);