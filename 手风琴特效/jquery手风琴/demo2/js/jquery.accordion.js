;(function($){
	$.fn.accordion = function(opt){
		//默认值
		var defaults = {
			max: "620px",
			min: "140px",
			speed: "1000"
		};

		var opts = $.extend({},defaults, opt);

		this.each(function(){
			var t = $(this),
				m = t.children(),
				c = m.children();

			//触发事件
			m.find(".active a").hide();
			m.on("mouseenter","li",function(){
				$(this).addClass('active')
						.animate({width:opts.max},opts.speed)
						.find("a").fadeOut()
						.parent().siblings().removeClass('active')
						.animate({width:opts.min},opts.speed)
						.find("a").show();
			});
		});
	};
})(jQuery);