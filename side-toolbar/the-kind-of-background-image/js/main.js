requirejs.config({
	paths:{  //给插件定义别名
		jquery:"libs/jquery-1.7.1"
	},
	urlArgs:'version=20160924'
});
requirejs(['jquery','scrollTo'],function($, scrollTo){
	var scroll = new scrollTo.ScrollTo({     //scrollTo是scrollTo模块返回的对象
		speed:800
	})
	$('#backTop').on('click',$.proxy(scroll.move, scroll));
	$(window).on('scroll',function(){
		checkPosition($(window).height() / 2);
	})
	checkPosition($(window).height() / 2);

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').slideDown();
		}else{
			$('#backTop').slideUp();
		}
	}
});