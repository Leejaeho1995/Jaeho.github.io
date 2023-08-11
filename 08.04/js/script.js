$(function(){
    $(document).keydown(function(e){
        console.log(e.keyCode);
       // 38,39,40,37
       animationCar(e.keyCode);
       //ofst 절대적위치값 position 상대적위치값
       //offset()==> top , left offset().top; offset().left;
       //변수(-<배열변수 (Array)) = 요소.offset  변수.top  변수.left

    });

    });
    function animationCar(n){
        switch(n){
            case 37:
                $('.smoge').show()
                ofst = $('.bluecar').css('transform','rotate(270deg)')
                .stop()
                .animate({left: '-=300px',},500,function(){
                    $('.smoge').hide();
                    let ofst =$(this).offset();
                    $('.top').text("top:"+ofst.top +"px");
                    $('.left').text("left:"+ofst.left +"px");
                })
                .ooffset();
            break;
            case 38:
                $('.smoge').show()
                ofst = $('.bluecar').css('transform','rotate(0deg)')
                .stop()
                .animate({top: '-=300px',},500,function(){
                    $('.smoge').hide();
                    let ofst =$(this).offset();
                    $('.top').text("top:"+ofst.top +"px");
                    $('.left').text("left:"+ofst.left +"px");
                })
                .ooffset();
            break;
            case 39:
                $('.smoge').show()
                ofst =$('.bluecar').css('transform','rotate(90deg)')
                .stop()
                .animate({right: '-=300px',},500,function(){
                    $('.smoge').hide();
                    let ofst =$(this).offset();
                    $('.top').text("top:"+ofst.top +"px");
                    $('.left').text("left:"+ofst.left +"px");
                })
                offset();
            break;
            case 40:
                $('.smoge').show()
                ofst = $('.bluecar').css('transform','rotate(180deg)')
                .stop()
                .animate({bottom: '-=300px',},500,function(){
                    $('.smoge').hide();
                    let ofst =$(this).offset();
                    $('.top').text("top:"+ofst.top +"px");
                    $('.left').text("left:"+ofst.left +"px");
                })
                offset();
            break;
           }
    }

