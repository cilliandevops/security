import comp from "D:/Cillian/Projects/wechat-article/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"主页\",\"heroText\":\"希里安\",\"bgImage\":\"assets/images/bg1.png\",\"heroFullScreen\":true,\"tagline\":\"Cillian-Article\",\"projects\":[{\"icon\":\"project\",\"name\":\"开源项目\",\"desc\":\"项目简介\",\"link\":\"https://github.com/cilliandevops\"},{\"icon\":\"link\",\"name\":\"个人博客\",\"desc\":\"记录生活\",\"link\":\"https://www.cillian.website\"},{\"icon\":\"book\",\"name\":\"书籍推荐\",\"desc\":\"让阅读成为一种习惯\",\"link\":\"https://plan.cillian.website\"},{\"icon\":\"article\",\"name\":\"文档\",\"desc\":\"文档网站集合\",\"link\":\"https://docs.cillian.website\"},{\"icon\":\"friend\",\"name\":\"友链推荐\",\"desc\":\"同行伙伴详细介绍\",\"link\":\"https://www.cillian.website\"},{\"icon\":\"computer\",\"name\":\"技术交流\",\"desc\":\"欢迎讨论\",\"link\":\"https://www.cillian.website\"}],\"footer\":\"生如夏花之绚烂，死如秋叶之静美\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.47,\"words\":140},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
