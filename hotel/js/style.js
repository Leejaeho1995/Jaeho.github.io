    $(document).ready(function(){
        $(".main-nav>li").hover(function(){
          $(this).find(".sub-nav").stop().slideToggle(200);
       });
    
       /** 언어선택 */
       $('.language').click(function(){
           $(this).find('.global-language').slideToggle(150);
       });
    
       $('.slidein:first-child').show();
    
       $(".arr-left").click(function(e){
          e.preventDefault();
          showSlide(--slideIndex);
       });
    
       $(".arr-right").click(function(e){
          e.preventDefault();
          showSlide(++slideIndex);
       });
    
       setInterval("showSlide(++slideIndex)", 5000);
    
    /* 데이트 피커 */
       $('#check_in').datetimepicker({
           format: 'Y년 m월 d일',
           onShow: function(ct){
             this.setOptions({
                maxDate: $('#check_out').val()? $('#check_out').val():false
             })
           },
           timepicker: false,
           lang: 'kr'
       });
       $("#check_out").datetimepicker({
          format: 'Y년 m월 d일',
          onShow: function(ct){
             this.setOptions({
                minDate: $('#check_in').val()?$('#check_in').val():false
             })
          },
          timepicker: false,
          lang:'kr'
       });
    }); //jquery


    var slideIndex = 1;

    // function slideView(n){
    //    showSlide(slideIndex += n);
    // }
    
    function showSlide(e) {
      if(e > 5){
          slideIndex = 1;
      }else if(e < 1){
          slideIndex = 5;
      }else{
          slideIndex = e;
      }
      console.log(slideIndex);
      $('.slidein').fadeOut(300);
      $(".slidein:nth-child("+slideIndex+")").fadeIn(300);
    }
    
