$().ready(function(){
    $(".title p").click(function(){
        var _index = $(this).index();
        $(".loginBox").eq(_index).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    });
})


function Login(){
    var oUser = $("#username").val();
    var oPass = $("#password").val();
    $("#login1").click(function(){
        $.ajax({
            type:'POST',
            url:"http://localhost:8080/api/huaUsr/login",
            data:`username=${oUser}&password=${oPass}`
        })
        .then(function(res){
            console.log(res);
        })
    })
}
Login();
//# sourceMappingURL=usersLogin.js.map
