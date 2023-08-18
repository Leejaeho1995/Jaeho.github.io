$(function () {
  let n=0
  viewSlide(n);

  $('.slide-left').click(function(){
    n--;
    if(n <0){
      n=3;
    }
    viewSlide(n);
  })
  $('.slide-right').click(function(){
    n++;
    if(n>3){
      n=0;
    }
    viewSlide(n);
  })

  $('.small-list').hover(function(){
    $(this).find('.small-navbox').toggle();
  });
  /*검색이벤트 */
  $('.search-select').click(function(){
    if($(this).find('.fa-solid').hasClass('fa-angle-down')) {
        $(this).find('.fa-solid')
               .removeClass('fa-angle-down')
               .addClass('fa-angle-up');
      $('.select-value').slideDown(100);
    }else{
      $(this).find('.fa-solid')
             .removeClass('fa-angle-up')
             .addClass('fa-angle-down');
      $('.select-value').slideUp(100);
    }
  });

  $('.select-value li').click(function () {
    const txt = $(this).text(); //선택한 text가져옴
    $('select-value li').removeClass('.active'); //li에 모든 active는 지움
    $(this).addClass('active'); //선택한 부분에 active
    $('.search-select span').text(txt); //span에 가져온 text입력
    $('.search-form').focus();
  });
  $('.slider-list li').mouseenter(function(){
    $('.slider-list li').removeClass('active')
    $(this).addClass('active')
  })
  
  $('.slide-btn').click(function(e){
    //1 현재 보여지고 있는 row의 순서값을 받는다.
    e.preventDefault()
    $('.slider-list li').removeClass('.slider-anime')
    for(i=0;i<4;i++){
       if(i>0){
       $('.slider-list li').eq(i).css("animation-delay",i+"00ms")
       }
       $('.slider-list li').eq(i).addClass('.slider-anime')
       setInterval(autoslide),300
    }
    //자동실행 함수
    function autoslide(){
      let slide = $('.slide-row')
      let index = slide.index($('.zindex')) //zindex가 위치한 순서를 읽어옴
      if(index ==4){    //4보다 높으면 0으로 초기화
        n =0
      }else{
        n = index + 1;
      }
      viewSlide(n);
    }
 })
 function viewSlide(n){
  $('.slide-row').removeClass('zindex')

  $('.slide-row').eq(n).addClass('zindex')
  $('.slider-list li').css({
    opacity:0,
    top:'30px',
    position:'relative'
  })
  $('.slider-list li').animate({
    opacity:1,
    top:'0px'

  },400)

 }
});
