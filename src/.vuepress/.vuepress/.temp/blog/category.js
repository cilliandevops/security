export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"公众号文章":{"path":"/category/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%96%87%E7%AB%A0/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"k8s":{"path":"/tag/k8s/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

