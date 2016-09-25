define(['jquery','scrollTo'],function($, scrollTo){
	function BackTop(ele, opts){
		this.opts = $.extend({},BackTop.DEFAULTS, opts);
		this.$ele = $(ele);
		this.scroll = new scrollTo.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		if(this.opts.mode == 'move'){
			this.$ele.on('click',$.proxy(this._move, this));
		}else{
			this.$ele.on('click',$.proxy(this._go, this));
		}
		$(window).on('scroll',$.proxy(this._checkPosition, this))
	}
	BackTop.prototype._move = function(){
		this.scroll.move();
	}
	BackTop.prototype._go = function(){
		this.scroll.go();
	}
	BackTop.prototype._checkPosition = function(){
		var $ele = this.$ele;
		if($(window).scrollTop() > this.opts.pos){
			$ele.slideDown();
		}else{
			$ele.slideUp();
		}
	}
	BackTop.DEFAULTS = {
		mode:'move',
		pos: $(window).height()/2,
		speed:800
	}

	$.fn.extend({
		backTop:function(opts){
			return this.each(function(){
				new BackTop(this, opts);
			});
		}
	})

	return {
		BackTop:BackTop
	}
})
