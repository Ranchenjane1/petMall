$().ready(function(){
    $(".nav_left_title span").mouseover(function(){
        var _index = $(this).index();
        $(".dog_nav>div").eq(_index).show().siblings().hide();
    $(this).addClass("changecolor").siblings().removeClass("changecolor");
    });
})
$().ready(function(){
    $(".dog_foot_tit li").mouseover(function(){
        var _index = $(this).index();
        $(".bd1body2>ul").eq(_index).show().siblings().hide();
    $(this).addClass("bd1headli").siblings().removeClass("bd1headli");
    });
})

$().ready(function(){
    $(".dog_foot_tit2 li").mouseover(function(){
        var _index = $(this).index();
        $(".dog_tit_list2>ul").eq(_index).show().siblings().hide();
    $(this).addClass("bd1headli").siblings().removeClass("bd1headli");
    });
})

$().ready(function(){
    $(".dog_foot_tit3 li").mouseover(function(){
        var _index = $(this).index();
        $(".dog_tit_list3>ul").eq(_index).show().siblings().hide();
    $(this).addClass("bd1headli").siblings().removeClass("bd1headli");
    });
})

$().ready(function(){
    $(".dog_foot_tit4 li").mouseover(function(){
        var _index = $(this).index();
        $(".dog_tit_list4>ul").eq(_index).show().siblings().hide();
    $(this).addClass("bd1headli").siblings().removeClass("bd1headli");
    });
})
$().ready(function(){
    $(".dog_foot_tit5 li").mouseover(function(){
        var _index = $(this).index();
        $(".dog_tit_list5>ul").eq(_index).show().siblings().hide();
    $(this).addClass("bd1headli").siblings().removeClass("bd1headli");
    });
})
$().ready(function(){
    $(".place_title li").click(function(){
        var _index = $(this).index();
        $(".palce_contentbox").eq(_index).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    });
})
// 轮播图：
function banner(){
var color = [
      [205,65,64],
      [205,65,64],
      [205,65,64],
      [205,65,64],
      [74,116,180],
]
function Banner(){}
$.extend(Banner.prototype,{
      init:function(options){
            this.box = $(options.box);
            // 图片列表
            this.item_list = $(options.item_list);
            // 按钮列表
            this.list_btn = $(options.list_btn);
            // 图片列表的父级；
            this.list = this.item_list.parent();
            // 元素的宽度
            this.ele_width = $(options.ele_width)[0];
            this.parentBox = $(options.parentBox);
            // 当前图片的下标
            this.nowIndex = 0;
            // 图片的总数
            this.item_num = this.item_list.length;
            // 如果轮播图没有任何按钮，就不调用绑定事件方法了； 可以直接自动播放；
            if(this.list_btn.length == 0){
                  this.autoPlay();
            }else{
                  this.bindEvent();
            }
            if(options.autoPlay){
                  this.autoPlay();
            }
      },
      bindEvent:function(){
            this.list_btn.mouseover($.proxy(this.toIndex,this));
            this.next();
            // this.prev();
      },
      next:function(){
            // 如果当前图片的下标是最后一张，做出以下处理
            if(this.nowIndex == this.item_num - 1){
                  this.list.css({
                        left:0
                  })
                  this.nowIndex = 1;
            }else{
                  this.nowIndex++;
            }
            this.animate();
      },
      prev:function(){
            // 如果当前图片的下标是第一个图片时
            if(this.nowIndex = 0){
                 
                  this.nowIndex = this.item_num - 2;
                  this.list.css({
                        left:-this.ele_width * (this.item_num - 1)
                  })
            }else{
                  this.nowIndex--;
            }
            this.animate();
      },
      toIndex:function(e){
            // var e = event || window.event ;
            var target = e.target;
            // console.log(target);
            this.nowIndex = $(target).index();
            // console.log(this.nowIndex);
            this.animate();
      },
      autoPlay:function(){
            this.parentBox.mouseenter(function(){
                  clearInterval(this.bannerTimer)
            }.bind(this))
            this.parentBox.mouseleave(function () {
                  this.bannerTimer = setInterval(function () {
                      this.next();   
                  }.bind(this),4000)
                  // trigger模拟事件触发；
            }.bind(this)).trigger("mouseleave");
      },
      animate: function () {
            this.list.stop().animate({
                left: -this.nowIndex * this.ele_width
            })
             
            this.list_btn.removeClass("active");

            var index
            if (this.nowIndex == this.item_num - 1) {
                index = 0;
            } else {
                index = this.nowIndex;
            }
            this.list_btn.eq(index).addClass("active");
            this.box.css("background","rgb("+color[index][0]+","+color[index][1]+","+color[index][2]+")");
            }
      })
var banner = new Banner();
banner.init({
      item_list:".banner1 li",
      autoPlay:true,
      list_btn:".banner2 li",
      ele_width:770,
      parentBox:".banner1",
      box:"#box2"
})
}
banner();


$().ready(function(){
    $(".menubox li").mouseover(function(){
        var _index = $(this).index();
        $(".time-procon>li").eq(_index).show().siblings().hide();
    $(this).addClass("large").siblings().removeClass("large");
    });
})
function Banner(){}
        $.extend(Banner.prototype,{
            // 写法是兼容的;
            init : function(options){
               
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $(".goods-bottom-1 ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                
               this.wrap = $(".goods-bottom-1");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
                // this.left_btn.click(this.prev.bind(this))
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                return false;
                // this.btn_list.mouseover($.proxy(this.toIndex , this));

                // this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                // this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                // console.log(this);
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
                // console.log(event);
                // console.log($(target).index());
                // index();
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                // var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                // this.btn_list.eq(index).addClass("active")
                // .siblings("button").removeClass("active");
            },
           
        })

        var banner = new Banner();

        banner.init({
            item_list : ".goods-bottom-cons li",
            left_btn : "#left2",
            right_btn : "#right2",
            btn_list : ".top1 .swiper-slide" 
        })

// 现在的时间 11 09 33; 时间获取定格在这里;
        // 只获取了一次;
        var d2 = new Date("2018/10/31 10:41:00")
        // 截止的事件;
        function time(){
            var d =new Date() 
            var  a = (d2.getTime()-d.getTime()) / 1000;
            if(a > 0){
                var nDay = parseInt(a /(60*60*24));
                var nHour = parseInt((a / (60*60)) % 24);
                var nMinute = parseInt((a / 60) % 60);
                var nSecond = parseInt(a % 60)
                if(nDay < 10){
                        nDay = "0" + nDay;
                }
                if(nHour < 10){
                        nHour = "0" + nHour;
                }
                if(nMinute < 10){
                    nMinute = "0" + nMinute;
                }
                if(nSecond < 10){
                    nSecond = "0" + nSecond;
                }
                day.innerHTML = nDay
                hour.innerHTML = nHour
                minute.innerHTML = nMinute
                second.innerHTML = nSecond
            }
            // else{
            //     alert("活动结束")
            // }
        }
        setInterval(function(){
                time()
        }, 1000)
        time();
// 现在的时间 11 09 33; 时间获取定格在这里;
        // 只获取了一次;
        var d2 = new Date("2018/10/17 10:41:00")
        // 截止的事件;
        function time(){
            var d =new Date() 
            var  a = (d2.getTime()-d.getTime()) / 1000;
            if(a > 0){
                var nDay = parseInt(a /(60*60*24));
                var nHour = parseInt((a / (60*60)) % 24);
                var nMinute = parseInt((a / 60) % 60);
                var nSecond = parseInt(a % 60)
                if(nDay < 10){
                        nDay = "0" + nDay;
                }
                if(nHour < 10){
                        nHour = "0" + nHour;
                }
                if(nMinute < 10){
                    nMinute = "0" + nMinute;
                }
                if(nSecond < 10){
                    nSecond = "0" + nSecond;
                }
                day1.innerHTML = nDay
                hour1.innerHTML = nHour
                minute1.innerHTML = nMinute
                second1.innerHTML = nSecond
            }
            // else{
            //     alert("活动结束")
            // }
        }
        setInterval(function(){
                time()
        }, 1000)
        time();
// 现在的时间 11 09 33; 时间获取定格在这里;
        // 只获取了一次;
        var d2 = new Date("2018/10/21 10:41:00")
        // 截止的事件;
        function time(){
            var d =new Date() 
            var  a = (d2.getTime()-d.getTime()) / 1000;
            if(a > 0){
                var nDay = parseInt(a /(60*60*24));
                var nHour = parseInt((a / (60*60)) % 24);
                var nMinute = parseInt((a / 60) % 60);
                var nSecond = parseInt(a % 60)
                if(nDay < 10){
                        nDay = "0" + nDay;
                }
                if(nHour < 10){
                        nHour = "0" + nHour;
                }
                if(nMinute < 10){
                    nMinute = "0" + nMinute;
                }
                if(nSecond < 10){
                    nSecond = "0" + nSecond;
                }
                day2.innerHTML = nDay
                hour2.innerHTML = nHour
                minute2.innerHTML = nMinute
                second2.innerHTML = nSecond
            }
            // else{
            //     alert("活动结束")
            // }
        }
        setInterval(function(){
                time()
        }, 1000)
        time();
// 现在的时间 11 09 33; 时间获取定格在这里;
        // 只获取了一次;
        var d2 = new Date("2018/10/27 10:41:00")
        // 截止的事件;
        function time(){
            var d =new Date() 
            var  a = (d2.getTime()-d.getTime()) / 1000;
            if(a > 0){
                var nDay = parseInt(a /(60*60*24));
                var nHour = parseInt((a / (60*60)) % 24);
                var nMinute = parseInt((a / 60) % 60);
                var nSecond = parseInt(a % 60)
                if(nDay < 10){
                        nDay = "0" + nDay;
                }
                if(nHour < 10){
                        nHour = "0" + nHour;
                }
                if(nMinute < 10){
                    nMinute = "0" + nMinute;
                }
                if(nSecond < 10){
                    nSecond = "0" + nSecond;
                }
                day3.innerHTML = nDay
                hour3.innerHTML = nHour
                minute3.innerHTML = nMinute
                second3.innerHTML = nSecond
            }
            // else{
            //     alert("活动结束")
            // }
        }
        setInterval(function(){
                time()
        }, 1000)
        time();
//# sourceMappingURL=main.js.map
