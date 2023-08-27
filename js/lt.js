
// var botui;

function botuiinit() {
    var botui = new BotUI("my-botui-app");
botui.message.add({
  delay: 800,
  content: "Hi, there👋"
}).then(function () {
  botui.message.add({
    delay: 1100,
    content: "这里是 dogcraft"
  }).then(function () {
    botui.message.add({
      delay: 1100,
      content: "一个可爱的蓝孩子~"
    }).then(function () {
      botui.action.button({
        delay: 1600,
        action: [{
          text: "然后呢？ 😃",
          value: "sure"
        }, {
          text: "少废话！ 🙄",
          value: "skip"
        }]
      }).then(function (a) {
        "sure" == a.value && sure();
        "skip" == a.value && end()
      })
    })
  })
});

var end = function () {
    botui.message.add({
      delay: 600,
      content: "![...](https://upyun.dogcraft.top/img/20200531211632.jpg)"
    })
  };
  var sure = function () {
    botui.message.add({
      delay: 600,
      content: " ヾ(≧∇≦*)ゝ "
    }).then(function () {
      secondpart();
    })
  };
  
  var secondpart = function () {
    botui.message.add({
      delay: 1200,
      content: "物理学本科毕业，目前在读理论物理研究生（IOP-CAS）……"
    }).then(function () {
      botui.message.add(
        {
          delay: 1400,
          content: "业余程序猿……"
        }
      ).then(function () {
        botui.message.add(
          {
            delay: 2400,
            type : "html",
            content: "这几年写过C C++  Python matlab CUDA HTML JavaScript latex 等 虽然大部分都忘了…… <br>也搞过arduino、51单片机和树莓派……"
          }).then(function () {
            botui.message.add(
              {
                delay: 1400,
                content: "兴趣爱好广泛，喜欢玩游戏，特别是CSGO"
              }
            ).then(function () {
              botui.message.add(
                {
                  type: 'html',
                  loading: true,
                  delay: 1400,
                  content: '<a href="https://www.dogcraft.top/steaminfo/">https://www.dogcraft.top/steaminfo/</a> '
                }
              ).then(
                function () {
                  botui.message.add(
                    {
                      delay: 1000,
  
                      content: '……'
                    }
                  ).then(function () {
                    botui.action.button(
                      {
                        delay: 2000,
                        action: [
                          {
                            text: "为什么叫 dogcraft ？",
                            value: "dog?"
                          }
                        ]
                      }
                    ).then(function (a) {
                      nextdog();
                    })
  
                  })
                }
  
              )
            })
          })
      })
    })
  
  };
  var nextdog = function () {
  
    botui.message.add(
      {
        delay: 800,
        content: '2017年上半年，玩了minecraft与robocraft这两个游戏，然后结合个人编程习惯，就有了dogcraft'
      }
    ).then(function () {
  
      botui.action.button(
        {
          delay: 2000,
          action: [
            {
              text: "还有呢？",
              value: "dog"
            }
          ]
        }
      ).then(
        function () {
          botui.message.add(
            {
              delay: 900,
              type: "html",
              content: "没有了……<br>想知道更多就自己去找吧  ╮(╯▽╰)╭  "
            }
          )
        }
      )
    })
  };
}

botuiinit();


