(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{131:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h3",[e._v("Components Dynamic Async")]),e._v(" "),t("section",[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("div",{staticClass:"my-demo"},[e._l(e.tabs,(function(n){return t("button",{key:n,class:["tab-button",{active:e.currentTab===n}],on:{click:function(t){e.currentTab=n}}},[e._v(e._s(n))])})),e._v(" "),t("keep-alive",[t(e.currentTabComponent,{tag:"component",staticClass:"tab",attrs:{posts:e.posts}})],1)],2)]),e._v(" "),e._m(5)])};o._withStripped=!0;var s={components:{TabPosts:function(){return t.e(7).then(t.bind(null,141))},TabArchive:function(){return t.e(9).then(t.bind(null,181))}},data:function(){return{currentTab:"Posts",tabs:["Posts","Archive"],posts:[]}},computed:{currentTabComponent:function(){return"tab-".concat(this.currentTab.toLowerCase())}},created:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(n){e.posts=n.slice(0,2)}))}},i=t(0),a=Object(i.a)(s,o,[function(){var e=this.$createElement,n=this._self._c||e;return n("h4",[n("code",[this._v("keep-alive")]),this._v(" with Dynamic Components")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Because each time you switch to a new tab, Vue creates a new instance of the "),n("code",[this._v("currentTabComponent")]),this._v(". Recreating dynamic components is normally useful behavior, but in this case, we'd really like those tab component instances to be cached once they're created for the first time. To solve this problem, we can wrap our dynamic component with a "),n("code",[this._v("<"),n("a",{staticClass:"vue-api"},[this._v("keep-alive")]),this._v(">")]),this._v(" element:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{staticClass:"my-html"},[this._v('\n      \x3c!-- Inactive components will be cached! --\x3e\n      <keep-alive>\n        <component :is="currentTabComponent"></component>\n      </keep-alive>\n    ')])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Now the "),n("i",[this._v("Posts")]),this._v(" tab maintains its state (the selected post) even when it's not rendered. Note that "),n("code",[this._v("<keep-alive>")]),this._v(" requires the components being switched between to all have names, either using the "),n("code",[this._v("name")]),this._v(" option on a component, or through local/global registration.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{staticClass:"my-html"},[this._v('\n      \x3c!-- TabPosts.vue --\x3e\n      <template>\n        <div class="posts-tab">\n          <ul class="posts-sidebar">\n            <li\n              v-for="post in posts"\n              :key="post.id"\n              :class="{ selected: post === selectedPost }"\n              @click="selectedPost = post"\n            >\n              { post.title }\n            </li>\n          </ul>\n          <div class="selected-post-container">\n            <div \n              v-if="selectedPost"\n              class="selected-post"\n            >\n              <h6>{ selectedPost.title }</h6>\n              <div v-html="selectedPost.body"></div>\n            </div>\n            <b v-else>\n              Click on a blog title to the left to view it.\n            </b>\n          </div>\n        </div>\n      </template>\n      <script>\n      export default {\n        props: {\n          posts: Array\n        },\n        data() {\n          return {\n            selectedPost: null\n          }\n        },\n      }\n      <\/script>\n      <style>\n      .tab-button {\n        margin: 0;\n      }\n      .tab-button.active {\n        background-color: lightgray;\n      }\n      .tab {\n        border: 1px solid lightgray;\n        padding: 10px;\n      }\n      .posts-tab {\n        display: flex;\n      }\n      .posts-sidebar {\n        max-width: 20vw;\n        margin: 0;\n        border-right: 1px solid lightgray;\n      }\n      .posts-sidebar li {\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        cursor: pointer;\n      }\n      .posts-sidebar li:hover,\n      .posts-sidebar li.selected {\n        background-color: lightgray;\n      }\n      .selected-post-container {\n        padding: 10px;\n      }\n      </style>\n    ')])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h4",[e._v("Async Components")]),e._v(" "),t("p",[e._v("In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it's needed. To make that easier, Vue allows you to define your component as a factory function that asynchronously resolves your component definition. "),t("b",[e._v("Vue will only trigger the factory function when the component needs to be rendered and will cache the result for future re-renders")]),e._v(". For example:")]),e._v(" "),t("pre",[t("code",{staticClass:"my-js"},[e._v("\n      Vue.component('async-example', (resolve, reject) => {\n        setTimeout(() => {\n          // Pass the component definition to the resolve callback\n          resolve({\n            template: '<div>I am async!</div>'\n          })\n        }, 1000)\n      })\n    ")])]),e._v(" "),t("p",[e._v("As you can see, the factory function receives a "),t("code",[e._v("resolve")]),e._v(" callback, which should be called when you have retrieved your component definition from the server. You can also call "),t("code",[e._v("reject(reason)")]),e._v(" to indicate the load has failed. The "),t("code",[e._v("setTimeout")]),e._v(" here is for demonstration; how to retrieve the component is up to you.")]),e._v(" "),t("pre",[t("code",{staticClass:"my-js"},[e._v("\n      Vue.component('async-webpack-example', (resolve) => {\n        // This special require syntax will instruct Webpack to\n        // automatically split your built code into bundles which\n        // are loaded over Ajax requests.\n        require(['./my-async-component'], resolve)\n      })\n    ")])]),e._v(" "),t("p",[e._v("You can also return a "),t("code",[e._v("Promise")]),e._v(" in the factory function, so with Webpack 2 and ES2015 syntax you can do:")]),e._v(" "),t("pre",[t("code",{staticClass:"my-js"},[e._v("\n      Vue.component(\n        'async-webpack-example',\n        // The `import` function returns a Promise.\n        () => import('./my-async-component')\n      )\n    ")])]),e._v(" "),t("p",[e._v("When using "),t("a",{attrs:{href:"components-registration.html#Local-Registration"}},[e._v("local registration")]),e._v(", you can also directly provide a function that returns a "),t("code",[e._v("Promise")]),e._v(":")]),e._v(" "),t("pre",[t("code",{staticClass:"my-js"},[e._v("\n      new Vue({\n        // ...\n        components: {\n          'my-component': () => import('./my-async-component')\n        }\n      })\n    ")])]),e._v(" "),t("section",[t("h5",[e._v("Handling Loading State")]),e._v(" "),t("p",[e._v("The async component factory can also return an object of the following format:")]),e._v(" "),t("pre",[t("code",{staticClass:"my-js"},[e._v("\n        const AsyncComponent = () => ({\n          // The component to load (should be a Promise)\n          component: import('./MyComponent')),\n          // A component to use while the async component is loading\n          loading: LoadingComponent,\n          // A component to use if the load fails\n          error: ErrorComponent,\n          // Delay before showing the loading component. Default: 200ms.\n          delay: 200,\n          // The error component will be displayed if a timeout is\n          // provided and exceeded. Default: Infinity.\n          timeout: 3000\n        })\n      ")])])])])}],!1,null,null,null);a.options.__file="docs/web/vue/guide/ComponentsDynamicAsync.vue";n.default=a.exports}}]);