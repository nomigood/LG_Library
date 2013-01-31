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
$(document).ready(function() {
    var navi_ul = $('.navi ul')
    var navi_a = $('.navi > a')
    
    //����޴� ������ ������
    navi_ul.hide(); 
    
    //���ڵ�� �޴�
    navi_a.click(function(e){                                                      //navi a�±׸� Ŭ��������
       e.preventDefault();                                                         //preventDefault�� href�� �������� �ʰ� �ܼ� Ŭ���̺�Ʈ�� ó���Ѵ�
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
