const lazyPlugin = {
  install (app, options) {
    app.directive('lazy', {
      mounted: ...,
      updated: ...,
      unmounted: ...
    })
  }
}

export { lazyPlugin }

// 我们通过 lazy 指令获取到当前图片的标签，并且计算图片的位置信息，判断图片是否在首页显示。如果不在首页的话，图片就加载一个默认的占位符就可以了，并且在页面发生变化的时候，重新进行计算，这样就实现了页面图片的懒加载。