console.log(localStorage.detail)
if(!localStorage.detail){
    }else{
        var item = JSON.parse(localStorage.detail);
        // console.log(item);
        $(".small img").attr({src:item.show.img})
        $(".big img").attr({src:item.show.img})
        $(".sec2-right h2").html(item.title)
        $(".jq i").html(item.price)
        
        // $(".small").onmouseenter = function(){
        //     $("$.big").css({
        //         "display":"block"
        //     })x
        //     $(".frame").css({
        //         "display":"block"
        //     })
        //     $(".small img").css({
        //         "opacity":"0.3"
        //     })
        // }
        
        // $(".small").onmouseleave = function(){
        //     $("$.big").css({
        //         "display":"none"
        //     })
        //     $(".frame").css({
        //         "display":"none"
        //     })
        //     $(".small img").css({
        //         "opacity":"1"
        //     })
        // }
        
        // $(".small").onmousemove =function(event){
        //     // 获取定位的想x，y值
        //     var e = event || window.event;
        //     var offsetX = e.offsetX;
        //     var offsetY = e.offsetY;
        //     // 给元素设置的left值和top值；
        //     var nLeft = offsetX  - 50;
        // 	var nTop = offsetY - 50;
        //     // 边界检测；最大值；最小值；
        //     // 最小值；
        //     nLeft = nLeft < 0 ? 0 : nLeft;
        //     nTop = nTop < 0 ? 0 : nTop;
        //     // 最大值
        //     var maxLeft = $(".small").offsetWidth -  $(".frame").offsetWidth;
        // 	var maxTop =  $(".small").offsetHeight -   $(".frame").offsetHeight;
        //     nLeft = nLeft > maxLeft ? maxLeft : nLeft;
        //     nTop = nTop > maxTop ? maxTop : nTop;
            
        
        // }
        
        var oSmall1 = document.getElementById("small1");
            var oSmallImg1 = oSmall1.children[2];
            // 小框;
            var oFrame1 = document.getElementById("frame1");
            var oBig1 = document.getElementById("big1");
            var oBigImg1 = oBig1.children[0];
        console.log(oSmall1)
            oSmall1.onmouseenter = function(){
                // 小框和大图都显示出来;
                oBig1.style.display = "block";
                oFrame1.style.display = "block";
                oSmallImg1.style.opacity = 0.3;
            }
            oSmall1.onmouseleave = function(){
                // 小框和大图都隐藏;
                oBig1.style.display = "none";
                oFrame1.style.display = "none";
                oSmallImg1.style.opacity = 1;
            }
            oSmall1.onmousemove = function(event){
                // 1. 获取定位的x,y 值;
                var e = event || window.event;
                var offsetX = e.offsetX;
                var offsetY = e.offsetY;
                // 2. 给元素设置的left 值 和top值;
                var nLeft = offsetX  - 50;
                var nTop = offsetY - 50;
                // 边界检测;  最小值 ; 最大值;
                
                // 最小值;
                nLeft = nLeft < 0 ? 0 : nLeft;
                nTop = nTop < 0 ? 0 : nTop;
        
                // 最大值;
                var maxLeft = oSmall1.offsetWidth - oFrame1.offsetWidth;
                var maxTop = oSmall1.offsetHeight - oFrame1.offsetHeight;
                
                nLeft = nLeft > maxLeft ? maxLeft : nLeft;
                nTop = nTop > maxTop ? maxTop : nTop;
        
                oFrame1.style.left = nLeft +"px";
                oFrame1.style.top = nTop +  "px";
        
                // 边界检测;
                
                // 比例 已知 是4;
                // 比例分成两部分;
                var propX = oBig1.offsetWidth / oFrame1.offsetWidth;
                var propY = oBig1.offsetHeight / oFrame1.offsetHeight;
        
                // console.log(propX,propY);
                
                oBigImg1.style.left = -nLeft * propX + "px";
                oBigImg1.style.top = -nTop * propY + "px";
        
                oFrame1.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
            }	
    }

//# sourceMappingURL=detail.js.map
