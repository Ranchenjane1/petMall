
function getMsg(){

    $.ajax("https://list.mogujie.com/search",
    {
          dataType:"jsonp"
    })
    .then(function(res){
        //   console.log(res);
          renderPage(res.result.wall.list);
    })

}

var goodsJson = [];
var container =  document.getElementById("wrap");
function renderPage(json){
 
      goodsJson = json;
      var html = "";
      // 根据比例计算图片高度;
      json.forEach(function(ele){
            html += `<li class ="box">
              <img data-iid = ${ele.iid} src = "${ele.show.img}" width=${ 220 } height=${260 }  alt="">
              <p >${ele.title}</p>
              <div class="line"></div>
              <div class="goodsprice"><span>${ele.price}</span>
              <b>${ele.orgPrice}</b>
              </div>
              <strong class="btn-car" data-iid = ${ele.iid}>加入购物车</strong>
             
              </li>
            `  
        });
    //   $("#wrap").html(html);
    container.innerHTML += html;

}
getMsg()

var GLOBAL = {
    ch:document.documentElement.clientHeight, //可视化高度；
    loading_flag:false, //关闭ajax请求
    num:1
}
// 无限加载
onscroll = function(){
    if(!isload() || GLOBAL.loading_flag) return false;
    GLOBAL.loading_flag = true;
    $.ajax("https://list.mogujie.com/search",
    {
          dataType:"jsonp"
    })
    .then(function(res){
        //   console.log(res);
        GLOBAL.loading_flag = false;
        GLOBAL.num++;
        renderPage(res.result.wall.list);
       
    })

}
function isload(){
    // 关键参数不存在，函数不执行；
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    // var mh = Math.min.apply(flase,)
    
    if(GLOBAL.ch + st >= 5480*GLOBAL.num - 1000){
        return true;
    }else{
        return false;
    }
}


// 购物车
// 1.所有的按钮绑定事件；
// console.log($("#wrap"))

$("#wrap").on("click",".btn-car",handleCarClick);
function handleCarClick(event){
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var iid = $(target).attr("data-iid");
      var nowMsg = findJson(iid)[0];
      // console.log(nowMsg.iid)
      addCar(nowMsg,iid);
      renderCart()
}

// 详情页跳转
$("#wrap").on("click","img",handleImgClick);
function handleImgClick(event){
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var iid = $(target).attr("data-iid");
      console.log(iid)
      var imgMsg = findJson(iid)[0];
      // console.log(imgMsg)
      localStorage.setItem("detail",JSON.stringify(imgMsg))
      location.href = "http://localhost:8001/detail.html"
}
// localStroage的特征：
// 1. 增删改查 ; setItem getItem length key() clear();
// 2. 遵循同源策略; 
// 3. 只能存储纯字符;


function addCar(nowMsg , iid){
      // 存数据;
      // 1. 因为我们要存的数据是对象,但是localstroage可以存储的数据只有字符;
      // object => string;
      $.extend(nowMsg , {count : 1});
      var sNowMsg = JSON.stringify(nowMsg);
      // console.log(sNowMsg)

      if(!localStorage.cart){
            localStorage.setItem("cart",`[${sNowMsg}]`);
            return false;
      }
      // 如果存在对结构进行插入;
      var aMsg = JSON.parse(localStorage.cart);
      // console.log(aMsg);
      if(!hasIid(aMsg,iid)){
            aMsg.push(nowMsg);
      }

      // localStorage重新设置；
      localStorage.setItem("cart",JSON.stringify(aMsg))
      console.log(JSON.parse(localStorage.cart));
}


function hasIid(aMsg,iid){
      
      for(var i = 0 ; i < aMsg.length ; i ++){
            if(aMsg[i].iid === iid){
                  aMsg[i].count ++;
                  return true;
            }          
      }
      return false;
}

function findJson(iid){
      return  goodsJson.filter(function(item){
            return  item.iid === iid
      })
}

// 购物车获取;;

$(".go_buy").on("mouseenter",function(){
      $(".car-list").show();
      // console.log(getCart())
     $(".car-list ul").html(renderCart());
     renderCart();

})
$(".go_buy").on("mouseleave",function(){
      $(".car-list").hide();
      renderCart();
})

function getCart(){
//     console.log(localStorage.cart)
      if(!localStorage.cart) return 0;
      var aMsg = JSON.parse(localStorage.cart);
      return aMsg;
}

renderCart()
function renderCart(){
      var html = "";
      var cart_json = getCart();
      if(!cart_json) return 0;
      var sumlist = 0;
      for(var i = 0 ; i < cart_json.length ; i ++){
            html += `<li>
            <img src="${cart_json[i].show.img}"> 
            <span class="car_price">${cart_json[i].price}</span>
             <span class="car_count">${cart_json[i].count}</span>
             </li>`
             sumlist += cart_json[i].count ;
      }
      $(".buy_num").html(sumlist);
      return html;
}
$(".clear_btn").on("click",function(){
      localStorage.clear("cart");
      $(".buy_num").html("0");
      $(".car-list ul").html("")
})


//# sourceMappingURL=goodsList.js.map
