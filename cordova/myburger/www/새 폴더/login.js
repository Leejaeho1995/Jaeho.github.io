$(function(){
    $('#login-screen').on("pagebeforshow",function(e,ui){
        $('.slider').slick({
            autoplay:true,
            autoSpeed:3000,
            dots:true,
            arrows:flase
        })
    })
})
function login(){
    const loginUser='admin'
    const loginPass='1234'
    const user=document.getElementById('inputUsername').value
    const pass=document.getElementById('inputPassword').value
    
    if(user == loginUser && pass == loginPass){
        //localStorage 아이디 패스워드 저장
        localStorage.setItem('userid',user)
        localStorage.setItem('userpass',pass)
        localStorage.setItem('isAuthorized','authorized')
        window.localStorage.href="home.html"

    }else{
        $("#popupDialog").popup("open")
    }
}