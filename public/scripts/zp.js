/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){

    //返回顶部按钮
    $("#top").click(function(){
     $('html,body').animate({'scrollTop':0},500);


    });

    //返回底部按钮
    $("#end").click(function(){

    var _H=document.body.scrollHeight;

    $('html,body').animate({'scrollTop':_H},1000);

    });

    //图片浏览

    $(".fancybox-thumb").fancybox({
		prevEffect	: 'elastic',
		nextEffect	: 'elastic',
        closeBtn  : true,
		arrows    : false,
		nextClick : true,

		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				opacity : 0.6,
				css : {
					'background-color' : '#000'
				}
			},
			thumbs	: {
				width	: 80,
				height	: 41
			}
		}
	});

});

