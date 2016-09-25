requirejs.config({
	paths:{  //给插件定义别名
		jquery:"libs/jquery-1.7.1"
	},
	urlArgs:'version=20160923'
});
requirejs(['jquery', 'backTop'],function($,backTop){
	new backTop.BackTop($('#backTop'),{
		mode:'move'
	})
});