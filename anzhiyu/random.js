var posts=["2023/08/04/2023-08-04-IE浏览器提示“你尚未连接”的解决办法/","2023/08/06/2023-08-06-计算机应用基础笔记（二）/","2023/08/01/hexo魔改教程/","2023/07/28/live2d模型添加更换教程/","2023/07/24/主页旋转小人/","2023/07/21/关于hexo博客搭建和美化的个人心得/","2023/08/01/计算机应用基础笔记(一)/","2023/08/03/给博客添加一个字数统计（书名版）/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};