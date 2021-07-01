// 解决ios端，输入框聚焦时软键盘弹出页面整体上移
const foucsFunc = () => {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    setTimeout(() => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      window.scrollTo(scrollTop, 0);
    }, 100);
  }
};

/* ios端z-index失效，两个元素的层级顺序和andriod表现不一致，如果不是因为层级原因的话，
  原因可能是某个元素设置了 -webkit-overflow-scrolling: touch 属性(这与safari浏览器有关，就不是z-index的问题了)
  使用 -webkit-overflow-scrolling: auto !important 解决; 
  关键在于找到哪个元素可能设置了上面那个属性，如果是antd-mobile 等外部库的，建议从两个元素的父元素开始排查。
*/
