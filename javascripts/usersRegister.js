

phone.onblur = function(){
    var _value = phone.value;
    var reg = /^\d{11}$/;
    if( !reg.test(_value) ){
        em1.innerHTML = "请输入11位手机号码";
        em1.className = "em2";
    }else if( reg.test(_value) ){
        em1.innerHTML = "";
        em1.className = "em1";
    }
}

yanzhengbtn.onclick = function(){
    yanzheng1.innerHTML = Math.round(Math.random()*9)+""+Math.round(Math.random()*9)+Math.round(Math.random()*9)+Math.round(Math.random()*9);
}
input2.onblur = function(){
    var _value = input2.value;
    var _inner = yanzheng1.innerHTML;
    if( _value==_inner && _value!="" ){
        em2.innerHTML = "";
        em2.className = "em1";
    }else{
        em2.innerHTML = "请输入四位验证码";
        em2.className = "em2";
    }
}
        
oUsername.onblur = function(){
        var _value = oUsername.value;
        if( _value!=""){
            em4.innerHTML = "";
            em4.className = "em1";
        }else{
            em4.innerHTML = "非法";
            em4.className = "em2";
        }
    }

oPassword.onclick = function(){
    mmqiangdu.style.display = "block"; 
    oPassword.onblur = function(){
        var _value = oPassword.value;
        var reg = /^\w{1,15}$/;
        if( reg.test(_value) ){
            em5.innerHTML = "";
            em5.className = "em1";
        }else{
            em5.innerHTML = "非法";
            em5.className = "em2";
        }
        }
}
oPassword.onkeyup = function(){
    var _value = oPassword.value;
    if( /\d/.test(_value) || /\[A-z]/.test(_value) ){	
        ruo.style.background = "gold";
        ruo.style.color = "white";
    }
    if( /\d{8}|[A-z]{8}/.test(_value)){
        zhong.style.background = "gold";
        zhong.style.color = "white";
    }
    if(/\d|[A-z]/.test(_value)){
        qiang.style.background = "gold";
        qiang.style.color = "white";	
    }
}

input6.onblur = function(){
    if( input6.value == "" ){
        em6.innerHTML = "请输入确认密码";
        em6.className = "em2";
    }else if( oPassword.value == input6.value ){
        em6.innerHTML = "";
        em6.className = "em1";
    }else{
        em6.innerHTML = "2次密码不一致";
        em6.className = "em2";
    }
}

btn.onclick = function(){
        var sUser = oUsername.value;
        var sPass = oPassword.value;
      
        $.ajax({
            type:"POST",
            url:"http://localhost:8001/api/huaUsr/register",
            data:`username=${sUser}&password=${sPass}`
        })
        .then(function(res){
            console.log(res);
            // console.log(11)
            em4.className = "em2";
            em4.innerHTML = res;   
        },function(err){
            console.log(err)
            console.log(11)

        })

}


//# sourceMappingURL=usersRegister.js.map
