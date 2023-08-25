const mon = ["일", "월", "화", "수", "목", "금", "토"];
const enmon = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
$(function(){
  let city = "";
  weathers("gimpo-si");
  $(".now-time").html(newTime());

  $("#searchcity").on("keypress", function(e){
    if(e.which == 13 && !e.shiftkey){
      const cityname = $('#searchcity').val();
      if(cityname){
         weathers(cityname);
      }else{
        alert("도시이름을 입력하세요.");
        return;
      }
        $(this).val('');
    }
  });

  $('#searchbtn').on('click', function(e){
     e.preventDefault();
     const cityname = $('#searchcity').val();
     if(cityname){
         weathers(cityname);
         $('#searchcity').val('');
     }else{
        alert("도시이름을 입력하세요.");
        return;
     }
  });

}); //jquery

function weathers(city){
  const url = "//api.openweathermap.org/data/2.5/forecast";
  const url2 = "//api.openweathermap.org/data/2.5/air_pollution";
  const wdata = {
    q: city ,
    appid: "61817fe9871c5ce196a7b67a92ce3a6b",
    units: 'metric',
    lang: 'kr'
  }

    $.ajax({
      dataType: 'json',
      url : url,
      data: wdata,
      success: function(data){
        //console.log(data);
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        const dt = data.list;
        let phone = "";
        for(let i =0; i < dt.length; i++){
            //유닉스 => 일반  -->  Number(유닉스타임) * 1000
            const weatherDate = new Date(dt[i].dt*1000);
            let weatherDay2 = '', weatherDay3 = '', weatherDay4='';
            let next1Temp = '', next2Temp= '', next3Temp='';
            let icon1 = '', color1 = '';
            let icon2 = '', color2 = '';
            let icon3 = '', color3 = '';
            if(i+1 < dt.length){
              const icn1 = getWeatherIcon(dt[i+1].weather[0].icon);
              const weatherDate2 = new Date(dt[i+1].dt*1000);          
              weatherDay2 = enmon[weatherDate2.getDay()];
              next1Temp = Math.round(dt[i+1].main.temp);
              icon1 = icn1[0];
              color1 = icn1[1];
            }
            if(i+2 < dt.length){   
              const icn2 = getWeatherIcon(dt[i+2].weather[0].icon);
              const weatherDate3 = new Date(dt[i+2].dt*1000);
              weatherDay3 = enmon[weatherDate3.getDay()];
              next2Temp = Math.round(dt[i+2].main.temp);
              icon2 = icn2[0];
              color2 = icn2[1];
            }
            if(i+3 < dt.length){   
              const icn3 = getWeatherIcon(dt[i+3].weather[0].icon);
              const weatherDate4 = new Date(dt[i+3].dt*1000);
              weatherDay4 = enmon[weatherDate4.getDay()];
              next3Temp = Math.round(dt[i+3].main.temp);
              icon3 = icn3[0];
              color3 = icn3[1];
            }   
            const weatherYear = weatherDate.getFullYear();
            const weatherMonth = weatherDate.getMonth() + 1;
            const weatherDt = weatherDate.getDate();
            const weatherDay = mon[weatherDate.getDay()];

          const weatherHours = weatherDate.getHours();
            //console.log( weatherYear +" " + weatherMonth +" " + weatherDt+" " + weatherDay + " " + weatherHours + "시");
            let icn = getWeatherIcon(dt[i].weather[0].icon);

            let pup="";
            if(i % 2 == 1){
              pup = "pup";
            }
            phone += `<div class="mobile-phone ${pup}">
                        <div class="top d-flex justify-content-between align-items-center">
                          <i class="ri-menu-line"></i>
                          <p class="mobile-date">${weatherYear}년 ${weatherMonth}월 ${weatherDt}일(${weatherDay}) ${weatherHours}시</p>
                        </div>
                        <div class="content">
                            <h1 class="text-center today-city-name">${data.city.name}</h1>
                            <p class="text-center today-city-time">${weatherHours}시</p>
                            <div class="weatherbox d-flex align-items-center">
                                <div class="col-6">
                                    <i class="wi ${icn[0]}" style="color: ${icn[1]}"></i>
                                </div>
                                <div class="col-6 today-temp">
                                    ${Math.round(dt[i].main.temp)}<span>℃</span>
                                </div>
                            </div>
                            <div class="col-12 text-center mt-2 today-temp-arrow">
                                  <i class="ri-arrow-down-line"></i><span class="today-down-temp">${dt[i].main.temp_min}℃</span>
                                  / 
                                  <i class="ri-arrow-up-line"></i><span class="today-up-temp">${dt[i].main.temp_max}℃</span>
                            </div>
                            <div class="col-12 mt-5 next-date temp-box-pr 
                                        d-flex justify-content-between">
                                <div class="temp-box">
                                    <div class="next-temp">
                                        <span>${weatherDay2}</span>
                                        <span>${next1Temp}℃</span>
                                    </div>
                                    <div class="next-icon">
                                        <i class="wi ${icon1}" style="color:${color1}"></i>
                                    </div>
                                </div>
                                <div class="temp-box">
                                    <div class="next-temp">
                                        <span>${weatherDay3}</span>
                                        <span>${next2Temp}℃</span>
                                    </div>
                                    <div class="next-icon">
                                    <i class="wi ${icon2}" style="color:${color2}"></i>
                                    </div>
                                </div>
                                <div class="temp-box">
                                    <div class="next-temp">
                                        <span>${weatherDay4}</span>
                                        <span>${next3Temp}℃</span>
                                    </div>
                                    <div class="next-icon">
                                    <i class="wi ${icon3}" style="color:${color3}"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--/mobile-phone-->`;
          }
          destoryCarousel();
          $('.weather-slick').html(phone);
          applySlider();

          const adata = {
            lat: lat ,
            lon: lon,
            appid: "61817fe9871c5ce196a7b67a92ce3a6b" 
          }

          const st= ['GOOD', 'FAIR', 'MODERATE', 'POOR', 'VERY POOR'];
          //대기질 가져오기
          $.ajax({
            dataType: 'json',
            url : url2,
            data: adata,
            success: function(data){
              console.log(data);
              const num = parseInt(data.list[0].main.aqi);
              $('#aqi').text(st[num-1]);
              $('#co').text(data.list[0].components.co+"ppm");
              $('#no').text(data.list[0].components.no+"ppm");
              $('#no2').text(data.list[0].components.no2+"ppm");
              $('#o3').text(data.list[0].components.o3+"ppm");
              $('#so2').text(data.list[0].components.so2+"ppm");
              $('#pm25').text(data.list[0].components.pm2_5+"ppm");
              $('#pm10').text(data.list[0].components.pm10+"ppm");
              $('#nh3').text(data.list[0].components.nh3+"ppm");
            },
            error: function(){
          
            }
          })

        },
      error: function(xhr, status, error){
        console.log( error);
      }
    });

  }   

//slick
function destoryCarousel(){
  if($('.weather-slick').hasClass('slick-initialized')){
     $('.weather-slick').slick('unslick');
  }
}
function applySlider(){
   $('.weather-slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
}



function newTime(){
   let now = new Date();
   const nowMon = now.getMonth() + 1;
   let ntime= now.getFullYear()+"년 "+ nowMon+"월 "+ now.getDate()+"일 ";
   ntime += "("+mon[now.getDay()]+") "+now.getHours()+"시 "+now.getMinutes()+"분 ";
   //ntime += now.getSeconds() +" 초";
   return ntime;
}


//날씨 아이콘 변환 함수
function getWeatherIcon(iconName){
   let color, icon;
   switch(iconName){
      case '01d':
        color = "#ff8000";
        icon = "wi-day-sunny";
      break;
      case '02d':
        color="#e8e8e8";
        icon = 'wi-day-cloudy';
      break;
      case '03d':
        color='#e8e8e8';
        icon = 'wi-cloud';
      break;
      case '04d':
        color="#cfcfcf";
        icon = 'wi-cloud';
      break;
      case '09d':
        color = '#deeef0';
        icon = 'wi-day-rain';
      break;
      case '10d':
        color = '#deeef0';
        icon = 'wi-day-rain-wind';
      break;
      case '11d':
        color = '#e8d79a';
        icon = 'wi-day-thunderstorm';
      break;
      case '13d':
        color='#efefef';
        icon = 'wi-day-snow';
      break;
      case '50d':
        color='#bebbb1';
        icon = 'wi-fog';
      break;
      case '01n':
        color='#ffea00';
        icon = 'wi-night-clear';
      break;
      case '02n':
        color='#b5b5b5';
        icon = 'wi-night-alt-cloudy';        
      break;
      case '03n':
        color='#b5b5b5';
        icon = 'wi-cloud';      
      break;
      case '04n':
        color='#949494';
        icon = 'wi-cloud';      
      break;
      case '09n':
        color='#51686b';
        icon = 'wi-night-alt-rain';      
      break;
      case '10n':
        color='#51686b';
        icon = 'wi-night-alt-rain-wind';      
      break;
      case '11n':
        color='#8a7a42';
        icon = 'wi-night-thunderstorm';      
      break;
      case '13n':
        color='#d9d9d9';
        icon = 'wi-night-snow';      
      break;
      case '50n':
        color='#bebbb1';
        icon = 'wi-night-fog';      
      break;
   }
    const weathers = [icon, color];
    return weathers;
}