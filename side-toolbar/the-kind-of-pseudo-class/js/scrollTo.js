define(['jquery'],function($){
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS, opts);
		this.$ele = $('html,body');
	}
	ScrollTo.prototype.move = function(){
		var opts = this.opts,
			dets = opts.dets;

		if($(window).scrollTop() != dets){
			if(!this.$ele.is(':animated')){
				this.$ele.animate({
					scrollTop:dets
				},opts.speed);
			}
		}
	}
	ScrollTo.prototype.go = function(){
		var dets = this.opts.dets;
		if($(window).scrollTop() != dets){
			this.$ele.scrollTop(dets);
		}
	}
	ScrollTo.DEFAULTS = {
		dets:0,
		speed:500
	}
	return {
		ScrollTo:ScrollTo
	}
})