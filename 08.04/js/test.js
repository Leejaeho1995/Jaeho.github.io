$(function(){
    $(document).keydown(function(e){
        //console.log(e.keyCode);
        //위 38, 오른쪽 39  아랫쪽 40 왼쪽 37
        //offset()
        animationCar(e.keyCode);
 
    });  
 });
 
 function animationCar(n){
        
    // offset() : 절대 위치값
    // position() : 상대 위치값
    // offset() => top, left    offset().top    offset().left
    // 변수 = 요소.offset   ==> 변수 = 숫자 배열

     switch(n){
        case 37:
           $('.cloud').show();
           $('.bluecar').css('transform', 'rotate(270deg)')
                        .stop()
                        .animate({ left: '-=50px'}, 100, function(){
                            $('.cloud').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left + "px");
                            parking( ofst.left, ofst.top);
                        });
        break;
        case 38:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(0deg)')
                       .stop()
                       .animate({ top: '-=50px'}, 100, function(){
                          $('.cloud').hide();
                          let ofst = $(this).offset();
                          $('.top').text("top :" + ofst.top +"px");
                          $('.left').text("left :" + ofst.left + "px");
                          parking( ofst.left, ofst.top);
                       });
        break;
        case 39:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(90deg)')
                       .stop()
                       .animate({ left: '+=50px'}, 100, function(){
                           $('.cloud').hide();
                           let ofst = $(this).offset();
                           $('.top').text("top :" + ofst.top +"px");
                           $('.left').text("left :" + ofst.left + "px");
                           parking( ofst.left, ofst.top);
                       });
        break;
        case 40:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(180deg)')
                       .stop()
                       .animate({ top: '+=50px'}, 100, function(){
                          $('.cloud').hide();
                          let ofst = $(this).offset();
                          $('.top').text("top :" + ofst.top +"px");
                          $('.left').text("left :" + ofst.left + "px");
                          parking( ofst.left, ofst.top);
                       });
        break;
     }
 
 }

function parking(car_x, car_y){
   let offset_area = $('.parkingArea').offset();
   if((car_x - 30) >= (offset_area.left - 60) && (car_x + 30) <= (offset_area.left + 60) && (car_y - 31 ) >= (offset_area.top - 60) && ( car_y + 31 ) <= (offset_area.top + 60)){
      alert("주차완료");
   }
}