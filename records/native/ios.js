// 解决ios端，输入框聚焦时软键盘弹出页面整体上移
const foucsFunc = () => {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    setTimeout(() => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop) window.scrollTo(0, 0);
    }, 100);
  }
};

/* ios端z-index失效，两个元素的层级顺序和andriod表现不一致，如果不是因为层级原因的话，
  原因可能是某个元素设置了 -webkit-overflow-scrolling: touch 属性(这与safari浏览器有关，就不是z-index的问题了)
  使用 -webkit-overflow-scrolling: auto !important 解决; 
  关键在于找到哪个元素可能设置了上面那个属性，如果是antd-mobile 等外部库的，建议从两个元素的父元素开始排查。
*/

/*
  ios端 position: fixed失效，建议加上-webkit-transform: translateZ(0);
  上面解决ios页面整体上移之后，如果有position: fixed，bottom: 0的元素，它会显示在页面底部并被弹起的软键盘遮挡(android表现正常);
  解决办法是监听滚动事件，ios系统聚焦时页面上移，设置window.scrollTo方法后触发滚动，获取到滚动高度后设置bottom。
*/

onFocus = () => {
  if (isIOS) {
    setTimeout(() => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop) window.scrollTo(0, 0);
    }, 500);
  }
};

onBlur = () => {
  setBottom(0);
};

useEffect(() => {
  _this.height = window.innerHeight; // 获取容器初始高度
  const onScroll = () => {
    // 苹果系统的input框聚焦页面会发生滚动, window.innerheight会发生变化，根据高度变化动态的设置input框的位置
    if (!_this.height) return;
    const dis = _this.height - window.innerHeight;
    setTimeout(() => {
      setBottom(dis);
    }, 200);
  };
  document.addEventListener("scroll", onScroll, false);
}, []);

/*
  对于自定义的输入框组件，如何在点击输入框之外的部分保持当前输入框的聚焦状态？
  适用以下情景:
  自定义表情包组件，输入框聚焦后软键盘弹起，点击表情包部分输入框仍然保持聚焦状态;
  表情包是input框外的元素，不做处理的话点一下就失焦了。
*/

const picker = document.getElementsByClassName("emoji-mart");
if (picker.length) {
  // 阻止点击表情包时input框失焦
  picker[0].onpointerdown = (e) => {
    e.preventDefault();
  };
}

/*
  ios 端的软键盘打开和关闭被视为用户的主动行为，聚焦状态下滑动页面软键盘不会关闭，这种滑动操作在ios下不视为失焦；
  监听touchmove事件，主动触发ref.current.blur()；
*/

const handleTouch = (e) => {
  // root这个ref包含表情包和input组件，当不是这些元素的touchmove事件应该触发失焦,关闭软键盘
  if (!root.current?.contains(e.target)) {
    ref.current?.blur();
  }
};
document.addEventListener("touchmove", handleTouch, false);
