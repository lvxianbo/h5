﻿var Main = {	iscrolls : []};
Main.url = 'http://cz.mengniu.sinreweb.com/';//ajax请求地址cz.mengniu.sinreweb.com
Main.imgurl='http://static.sinreweb.com/2015/Mnczrun/signup/'//加载图片请求地址
Main.init = function() {	
	Main.ortchange(); 		  
	window.onresize = function() {		
		//Main.ortchange();	
	}	
	$(document.body).on('touchmove',function(e){
		//e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
	})	
	//旋转	
	/*window.addEventListener('orientationchange',function(){
		//alert(window.orientation)
		// window.orientation  0 正着  左转90  右转-90
	})*/
	Main.On();		
}
Main.ortchange = function(bool) {
	Main.width = $(window).width()
	Main.height = $(window).height();	
	$('.page_box').css('height',Main.height+'px')
	Main.scrollbool=false;	
	var href=location.href;
	if(href.indexOf('#index')>-1){
	   	$('.page_tab').hide();
		Main.indexbool=true;
	}
	Main.id_audio4=$('#id_audio4').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
			a = navigator.userAgent.toLowerCase();    
			if(/android/ig.test(a)){
				Main.id_audio4.play(); 
			}else{
				c()    	
			}	
			 function c(){
				$('html').one('touchstart',function(){			  
				   Main.id_audio4.play();		    			
				})
		  };
	$(".page_box_0 .audio_mp3").addClass('play')
	$(".page_box_0 .audio_mp3").off('tap').on('tap',function(e){
		ga('send', 'event','sound', 'sound_click1', 'click');
			 if($(this).hasClass('play')){
			   $(this).removeClass('play')
			   Main.id_audio4.pause()
			   console.log(12)
			 }else{
			   $(this).addClass('play')
			   Main.id_audio4.play()
			   console.log(34)
			 }
		});
}
Main.On = function() {	
     
	      /* $(".page_box_0>.audio_mp3").on('click', function (e) {
                if (id_audio4.paused == false) {
                    id_audio4.pause();
                    $(this).removeClass('play')                   
                } else {
                    id_audio4.play();
                    $(this).addClass('play')
                }
           });*/
		  
		  /* $(".page_box_0>.audio_mp3").on('tap',function(e){
			  e.preventDefault();
			if(Main.id_audio4.paused==false){
				Main.id_audio4.pause();
				$(this).removeClass('play')			
			}else{
				Main.id_audio4.play();
				$(this).addClass('play')			
			}
	     });
	    
            $(".page_box_1>.audio_mp3").on('click', function (e) {
                if (id_audio1.paused == false) {
                    id_audio1.pause();
                    $(this).removeClass('play')                   
                } else {
                    id_audio1.play();
                    $(this).addClass('play')
                }
           });
		     Main.id_audio1=$('#id_audio1').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
			 a = navigator.userAgent.toLowerCase(); 
			if(/android/ig.test(a)){
				Main.id_audio1.play(); 
			}else{
				c()    	
			}	
			function c(){
				$('html').one('tap',function(){			  
				   Main.id_audio1.play();		    			
				})
		  };
		  $(".page_box_1>.audio_mp3").on('tap',function(e){
			  e.preventDefault();
			if(Main.id_audio1.paused==false){
				Main.id_audio1.pause();
				$(this).removeClass('play')	
						
			}else{
			
				Main.id_audio1.play();
				$(this).addClass('play')			
			}
	     });
          
            $(".page_box_2>.audio_mp3").on('click', function (e) {
                if (id_audio2.paused == false) {
                    id_audio2.pause();
                    $(this).removeClass('play')                   
                } else {
                    id_audio2.play();
                    $(this).addClass('play')
                }
           });
		   Main.id_audio2=$('#id_audio2').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
			a = navigator.userAgent.toLowerCase();    
			if(/android/ig.test(a)){
				Main.id_audio2.play(); 
			}else{
				c()    	
			}	
			function c(){
				$('html').one('tap',function(){			  
				   Main.id_audio2.play();		    			
				})
		  };
		  $(".page_box_2>.audio_mp3").on('tap',function(e){
			  e.preventDefault();
			if(Main.id_audio2.paused==false){
				Main.id_audio2.pause();
				$(this).removeClass('play')			
			}else{
				Main.id_audio2.play();
				$(this).addClass('play')			
			}
	     });
		 $(".page_box_3>.audio_mp3").on('click', function (e) {
			 
                if (id_audio3.paused == false) {
                    id_audio3.pause();
                    $(this).removeClass('play')                   
                } else {
                    id_audio3.play();
                    $(this).addClass('play')
                }
           });
		   Main.id_audio3=$('#id_audio2').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
			a = navigator.userAgent.toLowerCase();    
			if(/android/ig.test(a)){
				Main.id_audio3.play(); 
			}else{
				c()    	
			}	
			function c(){
				$('html').one('tap',function(){	
					  
				   Main.id_audio3.play();		    			
				})
		  };
		  $(".page_box_3>.audio_mp3").on('tap',function(e){
			  e.preventDefault();
			if(Main.id_audio3.paused==false){
				Main.id_audio3.pause();
				$(this).removeClass('play')			
			}else{
				Main.id_audio3.play();
				$(this).addClass('play')			
			}
	     });*/		
    Main.index=0; 
    var a=1;   
    $('.page_f').on('touchstart click',function(e){
    	e.preventDefault();
    	$('.page_f').removeClass('current');
    })   
    $(".img_7").on('touchstart',function(e){
    	e.preventDefault();
    	$('.page_div_1').removeClass('current');
    })  
    $('.img_5').on('touchstart',function(e){
    	$('.page_div_1').addClass('current');
    })
    Main.changchi=1;
    $('.p1').on('touchstart',function(e){
    	$('.p1').removeClass('current');
    	$(this).addClass('current');
    	Main.changchi=$(this).data('id');
    	
    })
    Main.job=1;
     $('.p2').on('touchstart',function(e){
    	$('.p2').removeClass('current');
    	$(this).addClass('current');
    	Main.job=$(this).data('id');    	
    })
    var a=1;
    $('.but_2').on('click',function(){
    	var se1=$("#id_city").val(),name=$('#id_name').val(),tel=$('#id_tel').val(),
    	code=$('#id_code').val(),readio=Main.job;
	 var se2 = $('#id_changci').val();    	
	//var se2=Main.changchi;
    	var type=$(this).data('type')    	
    	//console.log(se1,readio);
    	if(se1=="请选择城市"){
            Main.alert('a','标题',se1,null,true,true,null);
    		return ;
    	} else if( name.length<2 ){
            Main.alert('a','标题','请正确填写姓名',null,true,true,null);
    		return ;
    	}else if( !/^1[345789]\d{9}$/.test(tel) ){
            Main.alert('a','标题','请正确填写手机号',null,true,true,null);
    		return;
    	}else if(type==1 || (type==2 && code.length>0)){
			if(code.length!=15 && code.length!=18){
				Main.alert('a','标题','请正确填写身份证',null,true,true,null);
				return ;
			}          
    	}      	
    	//type 1:自愿者  0 是其他
    	Main.get('Mnczrun/signup/insertApply',{city:se1,chi:se2,name:name,tel:tel,code:code,jy:readio,type:type},function(res){

            if(res.err==0){
                $('input').val('');
                $(".span_2").html(se1);
                $('.page_div_2').addClass('current');
            }else{
                Main.alert('a','标题',res.message,null,true,true,null)
            }
    	})
    })
	
	$('.span_1').on('touchend',function(e){
		e.preventDefault();
		 location.href='#index';
		$('.page_index').addClass('current');
		$(".page_tab").animate({top:'-100%'},200);
	});
	//手机验证
	//if(!/^1[34589]\d{9}$/.test(tel))
	//答题验证
	
	/*$('.anniu_p1').click(function(){
		
		if($('.anniu_p1').hasClass('hover2')||$('.anniu_p1').hasClass('hover')){
			
		alert(123)
		   $('.anniu_p1').unbind('click');
		}else{
		   if($(this).text()=='生姜'){
			$(this).addClass('hover2')  
			$('.dati_one .daan').text('正确')
			$('.dati_one .daan').css('color','#00b04f')
		  }else{
			$(this).addClass('hover')  
		    $('.dati_one .daan').html('正确答案：生姜')
			$('.dati_one .daan').css('left','33%')
		  }
		}
		
	})
	$('.dati_one>.jixu').on('tap',function(){
	    if(a1==false){
			console.log(21)
			$('.dati_one').hide()
			$('.dati_two').show()
			
	    }else{
		    $('.dati_one .daan').html('对不起，请答题')
			$('.dati_one .daan').css('left','37%')
			
		}
	})*/
	var a1 = true;
	$('.anniu_p1').one('click',function(){
		 
		if(a1==false){
		  return;
		}
		a1=false;
		
		if($(this).text()=='生姜'){
			$(this).addClass('hover2')  
			$('.dati_one .daan').text('正确')
			$('.dati_one .daan').css('color','#00b04f')
			$('.dati_one .daan').css('left','45%')
		
		}else{
			$(this).addClass('hover')  
		    $('.dati_one .daan').html('正确答案：生姜')
			$('.dati_one .daan').css('left','31%')
		}
	})
	
	$('.dati_one>.jixu').on('tap',function(){
		
	    if(a1==false){
			console.log(21)
			$('.dati_one').hide()
			$('.dati_two').show()
			
	    }else{
		    $('.dati_one>.daan').html('对不起，请答题')
			$('.dati_one .daan').css('left','31%')
			
		}
		
	})
	a2=true;
	$('.anniu_p2').one('touchend',function(){
		
		if(a2==false){
		  return;
		}
		a2=false;
		if($(this).text()=='气虚便秘'){
			$(this).addClass('hover2')
			$('.dati_two .daan').text('正确')
			$('.dati_two .daan').css('color','#00b04f')
			$('.dati_two .daan').css('left','45%')
		}else{
			$(this).addClass('hover')
		    $('.dati_two .daan').html('正确答案：气虚便秘')
			$('.dati_two .daan').css('left','26%')
		}
	})
	
	$('.dati_two>.jixu').on('tap',function(){
		
	    if(a2==false){
			console.log(21)
			$('.dati_two').hide()
			$('.dati_three').show()
	    }else{
		    $('.dati_two>.daan').html('对不起，请答题')
			$('.dati_two>.daan').css('left','37%')
			console.log(12)
		}
		
	})
	a3=true;
	$('.anniu_p3').one('tap',function(){
		
		if(a3==false){
		  return;
		}
		a3=false;
		if($(this).text()=='纯静力量'){
			$(this).addClass('hover2')
			$('.dati_three .daan').text('正确')
			$('.dati_three .daan').css('color','#00b04f')
			$('.dati_three .daan').css('left','45%')
		}else{
			$(this).addClass('hover')
		    $('.dati_three .daan').html('正确答案：纯静力量')
			$('.dati_three .daan').css('left','26%')
		}
	})
	$('.dati_three .jixu').on('tap',function(){
		
	    if(a3==false){
			$('.dati_three').hide()
			$('.end_page').show()
	    }else{
		    $('.dati_three>.daan').html('对不起，请答题')
			$('.dati_three .daan').css('left','37%')
		}
	})
}

//图片加载后执行
Main.loading=function(){
		if($('.page_index').length>0){
			Main.scrollbool=true;
		    Main.scrolbody();	
		}
		if(Main.indexbool==true){
			$('.page_index').addClass('current');
		}
		$('.page_box_0').addClass('current');
		//$('.page_box_0').addClass('current');
		//$(".img_3b").addClass('current');
}
$(function(){
	Main.init();	
	var img=new Image();
	img.src=Main.imgurl+'images/bg1.jpg';	
	if(img.complete){		
		onload();				
		return ;
	}	
	img.onload=onload;
	function onload(){	
		if($(".page_load").length>0 ){
			Main.imgload();				
		}else{
		    Main.loading();			
		}			
	}	
	//Main.onplay(); 
	
})

Main.imgload = function(imgs) {
	var imgs=Main.imgs;
	var length = imgs.length, index = 0;
	var loadspan=$('.num_load').find('span').get(0),loadtxt=document.getElementById('id_load_num')	
	//var svgForStroke=$('#svgForStroke')
	function load(){
		var img=new Image();
		img.src=Main.imgurl+imgs[index];
		if(img.complete){			
			setTimeout(function(){
				onload();
			},20)
			return ;
		}
		img.onload=function(){
			setTimeout(function(){
				onload();
			},20)
		};		
		function onload(){
			index++;			
			var a = Math.floor(100 / length * index);						
			//修改进度
			loadspan.style.width=a+'%';
		    loadtxt.innerHTML=a+'%'	
		    a=250/100*a;	
		   // svgForStroke.attr('style','stroke-dasharray:'+a+'% 250%')	
			if (index == length) {	
				//进度改成100%
				$('.page_load').addClass('current');
				setTimeout(function(){
					Main.loading();			
				},200)
					
			}else{
				load();
			}		
		}
	}
	load();
}
Main.imgs=['images/bg1.jpg','images/bg2.png','images/bg3.png','images/bg5.png','images/bg6.png',
'images/i1_06.png','images/i2_07.png','images/s1.png','images/c6.png'];
//滑动
function play2(num){
	//close  pused()
	var id_audio1 = document.getElementById("id_audio1").pause();
	var id_audio2 = document.getElementById("id_audio2").pause();
	var id_audio3 = document.getElementById("id_audio3").pause();
	var id_audio4 = document.getElementById("id_audio4").pause();
   	//2  .pused()
	if(num==0){
	    Main.id_audio4=$('#id_audio4').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio4.play()
		Main.id_audio1=$('#id_audio1').attr('src','music/bs.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio1.pause()
		$(".page_box_0>.audio_mp3").addClass('play')
	}else if(num==1){
		Main.id_audio4=$('#id_audio4').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio4.pause()
		Main.id_audio1=$('#id_audio1').attr('src','music/bs.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio1.play()
		$(".page_box_1>.audio_mp3").addClass('play')
		$(".page_box_1>.audio_mp3").off('tap').on('tap',function(e){
			ga('send', 'event','sound', 'sound_click2', 'click');
			 e.preventDefault();
			 console.log('bi');
			 if($(this).hasClass('play')){
			   $(this).removeClass('play')
			   Main.id_audio1.pause()
			 }else{
			   $(this).addClass('play')
			   Main.id_audio1.play()
			 }
		});
	}else if(num==2){
		Main.id_audio2=$('#id_audio2').attr('src','music/bv.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio2.play()
		$(".page_box_2>.audio_mp3").addClass('play')
		$(".page_box_2>.audio_mp3").off('tap').on('tap',function(e){
			ga('send', 'event','sound', 'sound_click3', 'click');
			 e.preventDefault();
			 if($(this).hasClass('play')){
			   $(this).removeClass('play')
			   Main.id_audio2.pause()
			 }else{
			   $(this).addClass('play')
			   Main.id_audio2.play()
			 }
		});
	}else if(num==3){
	    Main.id_audio3=$('#id_audio3').attr('src','music/bp.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio3.play()
		$(".page_box_3>.audio_mp3").addClass('play')
		$(".page_box_3>.audio_mp3").off('tap').on('tap',function(e){
			ga('send', 'event','sound', 'sound_click4', 'click');
			 e.preventDefault();
			 if($(this).hasClass('play')){
			   $(this).removeClass('play')
			   Main.id_audio3.pause()
			 }else{
			   $(this).addClass('play')
			   Main.id_audio3.play()
			 }
		});
	}else if(num==4){
	    $('.page_box_4').unbind('touchmove')
		$('html').unbind('touchstart')
		
		Main.id_audio4=$('#id_audio4').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
		a = navigator.userAgent.toLowerCase();
		Main.id_audio4.play()
		
		console.log(num)
		$('.a_img7').hide()
	}
	
    
	//3
	//4
}

var y,y2=0,index=0;
Main.scrolbody=function(){	
    
    var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
    var playbool=false;		
	$(document.body).get(0).addEventListener('touchstart',function(e){
		if(Main.scrollbool==false){
			y=y2=0;
			return ;
		}
		if(playbool==false&&browser.versions.ios){
		   Main.id_audio4=$('#id_audio4').attr('src','music/bg.mp3?v=1.'+Math.random()*9999).get(0);
		   a = navigator.userAgent.toLowerCase();
		   Main.id_audio4.play()
			playbool=true;
		}
		ga('send', 'event', 'sound_bofang', 'bofang_click', 'click');
		//play();
		y=e.touches[0].pageY;
	},false);
	$(document.body).get(0).addEventListener('touchmove',function(e){
		e.preventDefault();	
		if(Main.scrollbool==false){
			y=y2=0;
			return ;
		}
		y2=e.touches[0].pageY;
		//$('.page_con').css({y:-(Main.index*Main.height+(y-y2))});		
	},false)
	$(document.body).get(0).addEventListener('touchend',function(e){	
		if(Main.scrollbool==false || y2==0  ){
			y=y2=0;
			$('.page_box_0').css({y:-Main.index*Main.height+'px'});
			return ;
		}	
		if(y-y2>10 &&  Main.index<4 ){
			if(Main.index==0){
			 play2(0);
			 
			}
		    Main.index+=1;
			
			if(Main.index==1){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_0 .audio_mp3').hide()
			  $('.page_box_1 .audio_mp3').show()
			  play2(1);
			  
			  $('.dati_one').hide()
			}else if(Main.index==2){
			  $('.page_box').eq(Main.index).show()
			  play2(2);
			  $('.dati_one').hide()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').show()
			}else if(Main.index==3){
			  $('.page_box').eq(Main.index).show()
			  $('.dati_one').hide()
			  play2(3);
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').show()
			}else if(Main.index==4){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').hide()
			  $('.page_box_4 .audio_mp3').show()
			  play2(4);
			  setTimeout(function(){
				$('.qianzou').fadeOut()
			    $('.dati_one').fadeIn()
				
			  },6000)
			}		   
		    $('.page_cc').animate({top:-Main.index*Main.height+'px'},400);
		   // $(".page_index").addClass('current');
		  
			
			$('.page_box').removeClass('current').eq(Main.index).addClass('current');	
			
			Main.scrollbool=false;
			setTimeout(function(){
				$('.page_box').eq(Main.index-1).removeClass('current');
				Main.scrollbool=true;
				if(Main.index==4){
				   Main.scrollbool=false;	
				}
				if(Main.index==1){
				    setTimeout(function(){
					   $(".img_6bc").css('opacity','1');
					},400);
				}
			},100);
			
		}else if(y2-y>5 && Main.index>0 ){
			 Main.index-=1;
			if(Main.index==0){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_0 .audio_mp3').show()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').hide()
			  $('.page_box_4 .audio_mp3').hide()
			  play2(0);
			}
			if(Main.index==1){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_1 .audio_mp3').show()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').hide()
			  $('.page_box_4 .audio_mp3').hide()
			  play2(1);
			  console.log(Main.index)	
			}else if(Main.index==2){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').show()
			  $('.page_box_3 .audio_mp3').hide()
			  $('.page_box_4 .audio_mp3').hide()
			  play2(2);
			  console.log(Main.index)
			}else if(Main.index==3){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').show()
			  $('.page_box_4 .audio_mp3').hide()
			  console.log(Main.index)
			  play2(3);
			}else if(Main.index==4){
			  $('.page_box').eq(Main.index).show()
			  $('.page_box_1 .audio_mp3').hide()
			  $('.page_box_2 .audio_mp3').hide()
			  $('.page_box_3 .audio_mp3').hide()
			  $('.page_box_4 .audio_mp3').show()
			  play2(4);
			  Main.scrollbool=false;
			}			
			$('.page_cc').animate({top:-Main.index*Main.height+'px'},400);	
			$('.page_box').removeClass('current').eq(Main.index).addClass('current');			
			Main.scrollbool=false;
			setTimeout(function(){
				$('.page_box').eq(Main.index-1).removeClass('current');	
				Main.scrollbool=true;
			},100)
		}else{
			$('.page_cc').css({top:-Main.index*Main.height+'px'});
		}				
		if(Main.index>5){
			$('.img_3b').hide();
			$(".page_index").addClass('current');
		}	else{
			$('.img_3b').show();
		}
		y=y2=0;			
	},false);		
}
/*-----------------------------------微信分享  页面分享--------------------------*/
//渲染结构    jquery标签     模板    数据
Main.temp=function(dom,temp,obj){
	var temp=_.template(temp);
	var txt=temp(obj);
	dom.html(txt);
}
//jquery 擦除
Main.eraser=function(){
	var redux=document.getElementById('redux');
	//redux.style.width=document.documentElement.clientWidth+'px';
	//redux.style.height=document.documentElement.clientHeight+'px';
	//绑定执行，传递擦去80%时回调
	$("#redux").eraser({completeRatio:0.6,completeFunction:function(){
		console.log('60%')			
	}})
}
//加密  需加载 calcMd5   base64类库
Main.jimi=function(str){
   var  key = calcMD5('PGZ6Cz40Z1JCWCYNR');   
   var b=new Base64();
   var string=b.encode(str);
   var  len = key.length;   
   var code = '';  
   for (i = 0; i < string.length; i++) {   
      k = i % len;   
      code += String.fromCharCode(string.charCodeAt(i) ^ key.charCodeAt(k));   
   }  
   str=b.encode(code)
   console.log(encodeURIComponent(str)+'')   
   return encodeURIComponent(str);
}


//zepto/jquery get
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : Main.url+url,
		dataType : 'jsonp',
		data : data,
		success : function(response) {
			console.log(response);
			if(response.err==99){
				location.href=response.url
				return ;
			}
			success(response);
		}
	})
}
/*
 * post 用于post大量数据不包括文件，执行后会返回数据
 * 如写成jsonp会默认为get方式，固服务器不需要接受callback
 *
 */
Main.post = function(url, obj, call) {
	if (!/^http/.test(url)) {
		url = Backbone.url + url;
	}
	$.post(url, obj, function(response) {
		//console.log(response);
		if (call) {
			call(response)
		}
	}, 'json')
}
//获取指定对象的id并返回对象
Main.getdata=function(id){
	console.log(id);
	for(var i=0;i<Main.datas.length;i++){
		if(Main.datas[i].id==id){
			console.log(Main.datas[i])
			return Main.datas[i];
		}
	}
}
//字符串转换成数组
Main.getarr=function(str){
	var a=str.split(',');
    var arr=[];
    for(var i=0;i<a.length;i++){
    	arr.push({title:a[i].split(':')[0],url:a[i].split(':')[1]})
    }
    return arr;
}
//生成两次不重复的随机数 参数为最大值。
Main.Random=function(num){
	var a=Main.randomnum
	 var i=Math.round(Math.random()*num);	 
	 if(Main.randomnum==i){
	 	Main.randomnum= i==num?(i-1):(i+1)
	 }else{
	 	Main.randomnum=i;
	 }		 
}
Main.random=function(num){
	var i=Math.round(Math.random()*num);
	return i;
}
//------------------------------------------------------------------------------------------------------------miniset app ui
Main.tip = function(title, time) {
	var divtip = $('.divtip')
	divtip.html(title)
	divtip.addClass('divtip_an')
	var time = time || 1000;
	setTimeout(function() {
		divtip.removeClass('divtip_an')
	}, time)
}
/*alert 提示窗
 * id:弹出divid
 * ti:提示标题
 * con:内容
 * botton_vlaue ：按钮文字
 * bool:是否有背影
 * but_display:按钮的显隐
 * callback:点击确定后的回调
 * Main.alert('a','标题','内容',null,true,true,null)
 */
Main.alert = function(id, ti, con, botton_value, bool, but_display, callback) {
	var that = this;
	this.bool = bool;
	this.but_display = but_display != 'none' ? 'inline' : but_display;
	var ti = ti != undefined ? ti : '提示';
	var con = con != undefined ? con : '成功';
	var botton_value = botton_value != undefined ? botton_value : '确定';
	this.divalert = '<div class="divalert" id=' + id + '><span class="divalertti">' + ti + '</span><div class="divalertcon">' + con + '</div>	<div class="divalertfooter">';
	this.divalert += '<button cat="alertbutton" style="display:' + this.but_display + '">' + botton_value + '</button></div></div>';
	$(document.body).append(this.divalert);
	this.divalert = $('#' + id)
	if (this.bool == true) {
		this.divalertbg = '<div class="divalertbg"  id=' + id + '_bg></div>'
		$(document.body).append(this.divalertbg);
		this.divalertbg = $('#' + id + '_bg');
		this.divalertbg.css('display', 'block')
		this.divalertbg.animate({
			opacity : 0.4
		}, 0.5, 'linear')
	}
	this.divalert.css('display', 'block')
	this.divalert.animate({
		translate3d : '0,0px,0',
		opacity : 1
	}, 0.3, 'linear');
	this.divalert.on('touchstart', 'button', function(e) {
		e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
		that.hide();
		return ;
	})
	this.hide = function() {
		if (that.bool == true) {
			that.divalertbg.animate({
				opacity : 0
			}, 0.5, 'linear', function() {
				that.divalertbg.css('display', 'none')
			})
		}
		that.divalert.animate({
			translate3d : '0,-50px,0',
			opacity : 0
		}, 0.3, 'linear', function() {
			that.divalert.remove();
			if (that.bool == true) {
				that.divalertbg.remove();
			}
		});
		if (callback) {			
			callback();			
		}
	}
	return this;
}
/*确定confirm
 * id,ti:标题,con:内容,bool:是否有透明背景，success_vlaue:确定按钮文字,error_value:取消按钮文字，success_fn:确定回调函数，error_fn:取消回调函数  ,tool当点击确定时是否隐藏弹出
 * var c=new Main.layerConfirm('id_3','confimr标题','确定要删除吗?',true,function(){alert('点击了成功')},function(){alert('点击了取消')},false)
 */

Main.layerConfirm = function(id, ti, con, bool, success_fn, error_fn, success_value, error_value, boolclear) {
	var that = this;
	this.id = 'layerconfirm_' + id;
	this.idbg = this.id + "_bg";
	this.ti = ti;
	this.con = con;
	this.success_vlaue = !!success_value ? success_value : '确定';
	this.error_value = !!error_value ? error_value : '取消';
	this.su_fn = !!success_fn ? success_fn : null;
	this.er_fn = !!error_fn ? error_fn : null;
	this.bool = bool ? bool : false;
	this.boolclear = boolclear;
	var txt = '<div class="layerconfirm" id="' + this.id + '"><span class="layerconfirm_ti">' + this.ti + '</span><div class="layerconfirm_con">' + this.con + '</div><div class="layerconfirm_footer">';
	txt += '	<button cat="confirm_success" class="success">' + this.success_vlaue + '</button><button cat="confirm_cancel" class="cancel">' + this.error_value + '</button>	</div></div><div class="layerconfirmbg" id="' + this.idbg + '"></div>';
	$(document.body).append(txt);
	this.el = $('#' + this.id);
	this.bg = $('#' + this.idbg);

	this.show = function() {
		this.bg.css('display', 'block')
		if (this.bool == true) {
			this.bg.animate({
				opacity : 0.2
			}, 0.5, 'linear')
		} else {
			this.bg.animate({
				opacity : 0
			}, 0.5, 'linear')
		}
	}
	this.hide = function() {
		that.bg.animate({
			opacity : 0
		}, 0.5, 'linear', function() {
			that.bg.css('display', 'none')
		})
		that.el.animate({
			translate3d : '0,-50px,0',
			opacity : 0
		}, 0.3, 'linear', function() {
			that.el.remove();
			that.bg.remove();
		});
	}
	this.show();
	this.el.css('display', 'block')
	this.el.animate({
		translate3d : '0,50px,0',
		opacity : 1
	}, 0.3, 'linear');
	this.el.on('click', 'button[cat="confirm_success"]', function() {
		if (!!that.su_fn) {
			that.su_fn(that.el);
		}
		if (that.boolclear != false) {
			that.hide();
		}

	}).on('click', 'button[cat="confirm_cancel"]', function() {
		if (!!that.er_fn) {
			that.er_fn(that.el);
		}
		that.hide();
	})
}

/*图片切换特效
 * 内置了window.onresize事件，用于在改变窗口大小时自动修改宽度
 * data:2013-9-10
 */
Main.Slider = function(slider, bool) {
	if (Main.width == undefined) {
		Main.width = $(window).width();
	}
	var that = this;
	this.data = {
		index : 0,
		time : 200,
		pageX : 0,
		pageXend : 0
	};
	this.slider = $('#' + slider)
	this.ul = this.slider.find('ul');
	this.ulid = this.ul.get(0);
	this.sliderid = this.slider.get(0);
	//this.len=this.slider.find('ul li').css({width:Main.width+'px'}).length;
	this.len = this.slider.find('ul li').length;
	this.plist = this.slider.find('p.plist').empty();
	this.width = this.ul.find('li').width()
	this.ul.css('width', this.len + '00%')
	for (var i = 0; i < this.len; i++) {
		i == 0 ? this.plist.append("<b class='current'></b>") : this.plist.append("<b></b>")
	}

	function _eventHandler(e) {
		switch(e.type) {
			case 'touchstart':
				that._touchstart(e)
				break;
			case 'touchmove':
				that._touchmove(e)
				break;
			case 'touchend':
				that._touchend(e)
				break;
			case 'touchcancel':
				break;
		}
	}


	this._touchstart = function(e) {
		//e.stopPropagation();
		e.preventDefault();
		that.data.pageX = e.touches[0].pageX;
		// alert(that.data.pageX)
		that.ulid.style.webkitTransitionDuration = '0ms';
	}
	this._touchmove = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var x = e.touches[0].pageX - that.data.pageX;
		that.data.pageXend = e.touches[0].pageX;
		//that.ulid.style.left = '' + x +'px';
		that.ulid.style.webkitTransform = 'translate3d(' + (x - that.data.index * Main.width) + 'px,0,0)';

	}
	this._touchend = function(e) {
		var x = that.data.pageXend - that.data.pageX;
		that.ulid.style.webkitTransitionDuration = '0.5s';
		if (that.data.pageXend == 0) {
			/* var obj = e.srcElement ? e.srcElement:e.target;
			 alert($(this).html())
			 if(obj.tagName.toLowerCase()=="img"){
			 var href=$(obj)[0].src();
			 alert(href);
			 }*/
			if (Main.datahref != undefined && Main.datahref != '') {
				location.href = Main.datahref;
				Main.datahref = '';
			}
			//alert(Main.datahref)
		} else if (x < -20) {
			if (that.data.index < (that.len - 1)) {
				that.data.index++;
			}
			//that.ulid.style.left= -that.data.index * Main.width+ 'px;';
			//that.ul.css('left',-Number(that.data.index)*Main.width)
			that.ulid.style.cssText += '-webkit-transition:' + that.data.time + 'ms;-webkit-transform:translate3d(-' + Number(that.data.index) * Main.width + 'px,0,0);';

		} else if (x > 20) {
			if (that.data.index > 0) {
				that.data.index--;
			}
			//that.ulid.style.left =  -that.data.index * Main.width + 'px;';
			//that.ul.css('left',-that.data.index*Main.width)
			that.ulid.style.cssText += '-webkit-transition:' + that.data.time + 'ms;-webkit-transform:translate3d(-' + Number(that.data.index) * Main.width + 'px,0,0);';

		}
		that.plist.find('b').removeClass('current');
		that.plist.find('b').eq(that.data.index).addClass('current')
		that.data.pageXend = 0;
		that.data.pageX = 0;
	}
	//this.slider.on('touchstart touchmove touchend touchcancel',_eventHandler);
	document.getElementById(slider).addEventListener('touchstart', that._touchstart, false)
	document.getElementById(slider).addEventListener('touchmove', that._touchmove, false)
	document.getElementById(slider).addEventListener('touchend', that._touchend, false)

	//绑定窗口修改
	$(window).on('resize', function() {
		that.width = that.ul.find('li').width();
		that.ulid.style.cssText += '-webkit-transition:0ms;-webkit-transform:translate3d(-' + that.data.index * that.width + 'px,0,0);';
	});
}


/*--------------------工具---------------*/
//返回浏览器类型里css3用的前缀如-ms-
Main.getBrowser=function(){
   if(Main.cssbrowser !=undefined && Main.cssbrowser!=null ){
   	  return Main.cssbrowser
   }
   if(navigator.userAgent.indexOf("MSIE")>0) { 
   	   Main.cssbrowser="-ms-"; 
   }else  if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
   	   Main.cssbrowser="-moz-"; 
   }else if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
   	   Main.cssbrowser="-webkit-"; 
   } else{
   	   Main.cssbrowser="";
   }   
   return Main.cssbrowser;
}
//translate3d 修改, obj:$的对象  val:值 如  90%,0,0
Main.translate3d=function(obj,val,bool){	
	if(!bool){
		obj.get(0).style.cssText+=Main.browser+'transition:200ms;'+Main.browser+'transform:translate3d('+val+');';	
	}else{
		obj.get(0).style.cssText+=Main.browser+'transition:0ms;'+Main.browser+'transform:translate3d('+val+');';	
	}	
}
//判断浏览器
Main.browse=function(){
	Main.sys={};
	if(/msie/ig.test(navigator.userAgent)){
		Main.sys.name='ie';  		
	    var b_version=navigator.appVersion
	    var version=b_version.split(";");
	    var trim_Version=version[1].replace(/[ ]/g,"");	
        Main.sys.version=trim_Version;
        return ;
	}else if(navigator.userAgent.indexOf("Firefox")>0){
		Main.sys.name='firefox';
		return ;
	}else if(window.MessageEvent && !document.getBoxObjectFor && navigator.userAgent.indexOf("Chrome")>0){
		Main.sys.name='chrome';
		return ;
	}else if(window.openDatabase && navigator.userAgent.indexOf("Safari")>0){
		Main.sys.name='safari';
		return ;
	}	
}
Main.Unicode=function (str) {
                return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}
Main.NUnicode=function (str) {
                return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}
Main.addEvent=function (obj,type,fun){	
    if(obj.addEventListener){  
        obj.addEventListener(type,fun,false);  
    }else if(obj.attachEvent){  
        obj.attachEvent(type,fun);  
    }
};

/*-----------------sessionStorage -------------------*
 *timie:2013-10-24
 * 用于保存获取删除local数据 
 */
Main.sessionget=function(name){
	if(window.sessionStorage){
		return sessionStorage.getItem(name)
	}else{
		//console.log('不支持sessionStorage')
		return '';
	}
}
Main.sessionset=function(name,value){
	if(window.sessionStorage){
		sessionStorage.setItem(name,value);
	}else{
		//console.log('不支持sessionStorage')
		return false;
	}
	
}
Main.sessionremove=function(name){
	if(window.sessionStorage){
		sessionStorage.removeItem(name);
	}else{
		//console.log('不支持sessionStorage')
		return '';
	}
}/*-----------------localStorage -------------------*
 *timie:2013-10-24
 * 用于保存获取删除local数据 
 */
Main.localget=function(name){
	if(window.localStorage){
		return localStorage.getItem(name)
	}else{
		//console.log('不支持localStorage')
		return '';
	}
}
Main.localset=function(name,value){
	if(window.localStorage){
		localStorage.setItem(name,value);
	}else{
		//console.log('不支持localStorage')
		return false;
	}
	
}
Main.localremove=function(name){
	if(window.localStorage){
		localStorage.removeItem(name);
	}else{
		//console.log('不支持localStorage')
		return '';
	}
}
/*
 * cookie 设置
 * data:2013-9-24
 */
Main.getCookie=function(name){
	var cookieArray=document.cookie.split("; "); //得到分割的cookie名值对     
    var cookie=new Object();     
    for (var i=0;i<cookieArray.length;i++){   
        var arr=cookieArray[i].split("=");       //将名和值分开      
        if(arr[0]==name)return unescape(arr[1]);  //如果是指定的cookie，则返回它的值      
    } 
    return "";  
} 
Main.delCookie=function (name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
Main.setCookie=function(name,value,Days)
{
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}