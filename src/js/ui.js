/* ============================================================
 * �󳲵����� ���� UI
 * Distalbay system
 * nomi (nomi@dbays.com)
 * 2013.01.16
============================================================ */

//����Ϸ� ���ӽ� ��� �ּ�ǥ������ ��������� �������� ���� �ű��
$(window).load(function(){
  setTimeout(scrollTo, 0,0,1);
});


//���� �׺���̼�
$(function () {

	$("#menu-gnb1 li ul").hide();
	$("#menu-gnb1 li.current-menu-parent > ul, #menu-gnb1 li.current_page_item > ul,#menu-gnb1 li.current-post-ancestor > ul").show();
	$("#menu-gnb1 .sub-menu li.current-post-parent").parent().show();
	$("#menu-gnb1 .sub-menu li.current-post-parent").parent().parent().addClass("current-post-parent");
	
	var s_menu = $("#s_menu").val();
	
	$('#menu-gnb1 > li').each(function() {
		
		 if($(this).attr('id') ==s_menu)		{
			 
			$(this).addClass("navi current-menu-parent");
			$(this).find("ul:first").slideDown(50);
		}
		 else
		{
			$(this).removeClass("current-menu-parent");
			$(this).find("ul:first").slideUp(500);
		}
	});
	$('#' + s_menu + ' li').each(function() {
		var s_sub_menu =  $("#s_sub_menu").val();
		if(s_sub_menu == $(this).attr('id'))
		{
			$(this).addClass("s_sub_menu");
		}
	});
	
    $("#menu-gnb1 > li > a").bind("click", function(){
    
    	if($(this).parent().hasClass('menu-item-calendar')) {
    		true;
    	} else {
    	
	    	var id = $(this).parent().attr('id');
			//alert(id);
			var selected_id = $(".current-menu-parent").attr("id");// "menu-item-100";
			//alert(selected_id);
	    	$('#menu-gnb1 > li').each(function() {
				if ((!$(this).hasClass('current-menu-item') && !$(this).hasClass('current-post-parent')) && $(this).attr('id') != id &&  $(this).attr('id') != selected_id) {
					$(this).find("ul:first").slideUp(300);
				} else {
					if($(this).attr('id') != selected_id)
					$(this).find("ul:first").slideToggle(300);
				}
	    	});
			return false;
		}
	});




	 $(".nav").bind("click", function(){
		$("#menu-gnb1 li ul").hide();
		$("#menu-gnb1 li.current-menu-parent > ul, #menu-gnb1 li.current_page_item > ul,#menu-gnb1 li.current-post-ancestor > ul").slideDown(300);
	});
	
	
	
});


//footer selectbox
$(document).ready(function(){
    var fm1 = $('#fmsite1 > p')
    var fm2 = $('#fmsite2 > p')
    var title = $('.family_title')                                  //�йи� ����Ʈ Ÿ��Ʋ ������ �����Ѵ�.
    var list = $('.family_list')                                    //�йи� ����Ʈ ����Ʈ ������ �����Ѵ�.
    
    //Ÿ��Ʋ�� Ŭ��������    
    fm1.click(function(){                                           //#fmsite1 �Ʒ��� p�±׸� Ŭ�������� ����
        if($(this).hasClass('family_title_on')){                    //family title on Ŭ������ ������ ����
            $(this).next('ul').animate({height:'0px'},'fast');      //ul�±� ���̰��� 0���� �ٲ۴�
            $(this).removeClass("family_title_on");                 //Ÿ��Ʋ�� family title on�̶� Ŭ������ �����Ѵ�
        }else{                                                      //family title on Ŭ������ ������ ����
            $(this).next('ul').animate({height:'155px'},'normal');  //ul�±� ���̰��� 180px���� �ٲ۴�
            $(this).addClass("family_title_on");                    //Ÿ��Ʋ�� family title on�̶� Ŭ������ �߰��Ѵ�
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
        
    list.mouseleave(function(){                     //����Ʈ�� ���콺�� �������� ����޴��� �����
        list.animate( { height: '0px' },'fast');    //ul�±� ���̰��� 0���� �ٲ۴�
        title.removeClass("family_title_on");       //Ÿ��Ʋ�� family title on�̶� Ŭ������ �����Ѵ�
    });
});
