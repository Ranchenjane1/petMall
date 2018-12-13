function showhidden(name,target){
    name.mouseover(function(){
        target.css("display","block");
    }),
    name.mouseleave(function(){
        target.css("display","none");
    })
}
showhidden($(".left_title1_1"),$(".pet-cate1"));
showhidden($(".left_title2_1"),$(".doglist1"));