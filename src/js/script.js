$(function () {

	$("#menu-gnb1 li ul").hide();
	$("#menu-gnb1 li.current-menu-parent > ul, #menu-gnb1 li.current_page_item > ul,#menu-gnb1 li.current-post-ancestor > ul").show();
	$("#menu-gnb1 .sub-menu li.current-post-parent").parent().show();
	$("#menu-gnb1 .sub-menu li.current-post-parent").parent().parent().addClass("current-post-parent");
	
	var s_menu = $("#s_menu").val();
	
	$('#menu-gnb1 > li').each(function() {
		
		 if($(this).attr('id') ==s_menu)
		{
			 //alert($(this).attr('id') + ":" + s_menu);
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
					$(this).find("ul:first").slideUp(500);
				} else {
					if($(this).attr('id') != selected_id)
					$(this).find("ul:first").slideToggle(500);
				}
	    	});
			return false;
		}
	});




	 $(".nav").bind("click", function(){
		$("#menu-gnb1 li ul").hide();
		$("#menu-gnb1 li.current-menu-parent > ul, #menu-gnb1 li.current_page_item > ul,#menu-gnb1 li.current-post-ancestor > ul").slideDown(500);
	});
	
	
	
});




