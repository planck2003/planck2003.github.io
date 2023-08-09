var posts=["2023/08/04/2023-08-04-IE浏览器提示“你尚未连接”的解决办法/","2023/08/06/2023-08-06-计算机应用基础笔记（二）/","2023/08/01/hexo魔改教程/","2023/07/28/live2d模型添加更换教程/","2023/07/24/主页旋转小人/","2023/07/21/关于hexo博客搭建和美化的个人心得/","2023/08/03/给博客添加一个字数统计（书名版）/","2023/08/01/计算机应用基础笔记(一)/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{"name":"Akilar","link":"https://akilar.top","avatar":"https://cdn.skypro.cartafi.cn/2023/04/20/6440a3ba4dbb0.jpg","descr":"欢迎光临糖果屋","siteshot":"https://cdn.jsdelivr.net/gh/Akilarlxh/ScreenShot@gh-pages/akilar.top.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://bu.dusays.com/2023/06/30/649e9ec88cf47.png","descr":"人有悲欢离合 月有阴晴圆缺","siteshot":"https://vercel.yisous.xyz/img/siteshot.png"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/img/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/img/qcqx.webp"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp"},{"name":"polar-bear～Blog","link":"https://polar-bear.eu.org/","avatar":"https://polar-bear.eu.org/img/hand.jpg","descr":"Websites,life,博客,技术,生活"},{"name":"天影大侠的小博客","link":"https://skyshadowhero.github.io","avatar":"https://s2.loli.net/2023/07/13/owETJ1V42KeAy9j.png","descr":"没想好~"},{"name":"睿搜资源网","link":"https://www.ruisou121.com/","avatar":"https://www.ruisou121.com/favicon.png","descr":"收集全网精品的资源导航网站，提供简单便捷的资源查找和网上导航服务。"},{"name":"GanSer","link":"https://www.gan1ser.top/","avatar":"https://pic.imgdb.cn/item/63f16cddf144a010070697c8.jpg","descr":"紫箫吟断，素笺恨切","siteshot":"https://pic.imgdb.cn/item/642e735fa682492fccc516df.png"},{"name":"九九九感冒绫","link":"https://miku-39.love/","avatar":"https://s2.loli.net/2022/10/18/soq82lvxakjeHB1.jpg","descr":"这是我的梦想,我会慢慢的完成它","siteshot":"https://s2.loli.net/2022/10/18/9KaSTU7OrWHkyEq.png"},{"name":"金鳞星溅的个人博客","link":"https://jinlinxingjian.top/","avatar":"https://jinlinxingjian.top/img/%E5%B5%AF%E5%B3%A8_icon.jpg","descr":"Hello world 交个朋友吧","siteshot":"https://img01.anheyu.com/useruploads/243/2023/08/05/64ce1c6151334.webp"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };