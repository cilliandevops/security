export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/posts/2024%E5%B9%B44%E6%9C%88/2024%E5%B9%B44%E6%9C%8823%E6%97%A5.html", { loader: () => import(/* webpackChunkName: "2024年4月23日.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/posts/2024年4月/2024年4月23日.html.js"), meta: {"d":1713830400000,"l":"2024年4月23日","c":["公众号文章"],"g":["k8s"],"u":true,"v":"/assets/images/640.png","e":"\n<h2>聊点别的</h2>\n<p>不知道是因为关注新能源车还是因为新闻报道的多，最近各种电车品牌接连展开发布会，价格亦颇为诱人。读者朋友是否也在精打细算，考虑加入电动车大军，此时怎么看？</p>\n<p>有个好消息！公众号给我开通了留言功能，就在文章底部等你！不再需要跳转后台，直接在阅读完毕的地方，留下你的想法和见解。加入我们的讨论大家庭，与众多读者朋友一起互动交流，让你的声音成为我们共同进步的力量！快来分享你的独特观点，参与精彩对话，激发灵感火花吧！💬✨</p>\n<p>附加服务：可以给读者查询关注时间哦！</p>\n<p>别忘了，现在就下滑，精彩留言等你来发！</p>\n<h2>近日见闻</h2>","t":"Kubernetes 1.30 版本终于支持了真正的只读卷挂载","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/2024%E5%B9%B44%E6%9C%88/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/posts/2024年4月/index.html.js"), meta: {"t":"2024年4月"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%96%87%E7%AB%A0/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/category/公众号文章/index.html.js"), meta: {"t":"公众号文章 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/k8s/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/tag/k8s/index.html.js"), meta: {"t":"标签: k8s","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
