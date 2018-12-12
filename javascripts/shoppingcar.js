// // 获取数据
function getMsg(){
    $.ajax("https://list.mogujie.com/search",
    {
        dataType:"jsonp"  //用jsonp获取数据
    })
    .then(function(res){
        // console.log(res.result.wall.list);
        // ;
        console.log(res)
        renderPage(res.result.wall.list)
    })
}
getMsg()
var goodsJson = [];
function renderPage(json){
    goodsJson = json;
    var html = "";
    json.forEach(function(ele){
        html += `<li class ="box">
                    <a href="#">
                    <img src = "${ele.show.img}"  width=${262} height=${parseInt(262/ele.show.w * ele.show.h)} alt="">
                    <p>${ele.title}</p>
                    <div class="line"></div>
                    <div><span>${ele.price}</span>
                    <b>${ele.orgPrice}</b>
                    </div>
                    <strong data-id = ${ele.iid}>加入购物车</strong>
                    </a>
                    </li>
                 `  
    })
    $("#wrap").html(html)
}