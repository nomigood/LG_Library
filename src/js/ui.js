/* ============================================================
 * 상남도서관 메인 UI
 * Distalbay system
 * nomi (nomi@dbays.com)
 * 2013.01.16
============================================================ */

//모바일로 접속시 상단 주소표시줄을 숨기기위해 페이지를 윌로 옮긴다
$(window).load(function(){
  setTimeout(scrollTo, 0,0,1);
});

//메인 네비게이션
$(document).ready(function() {
    var navi_ul = $('.navi ul')
    var navi_a = $('.navi > a')
    
    //서브메뉴 영역을 가린다
    navi_ul.hide(); 
    
    //아코디언 메뉴
    navi_a.click(function(e){                                                      //navi a태그를 클릭했을때
       e.preventDefault();                                                         //preventDefault는 href로 연결하지 않고 단순 클릭이벤트로 처리한다
       if(!$(this).hasClass('active')){
           navi_a.removeClass('active');
           navi_ul.filter(':visible').slideUp('normal');
           $(this).addClass('active').next().stop(true,true).slideDown('normal');
       } else {
           $(this).removeClass('active');
           $(this).next().stop(true,true).slideUp('fast');
       }
    });
});


//footer selectbox
$(document).ready(function(){
    var fm1 = $('#fmsite1 > p')
    var fm2 = $('#fmsite2 > p')
    var title = $('.family_title')                                  //패밀리 사이트 타이틀 변수로 선언한다.
    var list = $('.family_list')                                    //패밀리 사이트 리스트 변수로 선언한다.
    
    //타이틀을 클릭했을때    
    fm1.click(function(){                                           //#fmsite1 아래에 p태그를 클릭했을때 실행
        if($(this).hasClass('family_title_on')){                    //family title on 클래스가 있으면 실행
            $(this).next('ul').animate({height:'0px'},'fast');      //ul태그 높이갚을 0으로 바꾼다
            $(this).removeClass("family_title_on");                 //타이틀에 family title on이란 클래스를 삭제한다
        }else{                                                      //family title on 클래스가 없을때 실행
            $(this).next('ul').animate({height:'155px'},'normal');  //ul태그 높이갚을 180px으로 바꾼다
            $(this).addClass("family_title_on");                    //타이틀에 family title on이란 클래스를 추가한다
        }     
    });
    
    fm2.click(function(){
        if($(this).hasClass('select_title_on')){
            $(this).next('ul').animate( {height:'0px'},'fast');
            $(this).removeClass("select_title_on");
        }else{
            $(this).next('ul').animate({height:'135px'},'normal');
            $(this).addClass("select_title_on");
        }    
    });
        
    list.mouseleave(function(){                     //리스트에 마우스가 떠났을때 서브메뉴가 사라짐
        list.animate( { height: '0px' },'fast');    //ul태그 높이갚을 0으로 바꾼다
        title.removeClass("family_title_on");       //타이틀에 family title on이란 클래스를 삭제한다
    });
});
