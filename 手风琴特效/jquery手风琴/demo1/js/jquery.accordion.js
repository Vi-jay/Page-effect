;(function($) {
    $.fn.extend({
        accordion: function(opt) {
            var $button = $(this).children("li"); //容器;

            var defaults = {
                speed: "slow",                     //展开时间
                by: "mouseenter",                  //触发事件的方式click mouseenter
                sec: 3000,                         //间隔时间
                auto: true,       
                maxWidth: $button.first().width(), //展开时宽度;
                minWidth: $button.last().width(),  //折叠时宽度;
                index: 1                           //轮播开始索引号;
            };

            opts = $.extend({},defaults,opt);
            $button.bind(opts.by, this.run).autoPlay(); //绑定事件;
        },
        run: function() { //运行方法;
            var $obj = $(this);
            if ($obj.width() == opts.minWidth) {
                var timeDo = window.setTimeout(function() {
                    opts.index = $obj.index();
                    $obj.anim();
                }, 100);
                $obj.mouseout(function() {
                    window.clearTimeout(timeDo);
                });
            }
        },
        autoPlay: function() { //自动播放;
            if (opts.auto) {
                var $this = $(this);
                $this.autoDo();
                $this.mouseenter(function() {
                    window.clearInterval(timeL);
                });
                $this.mouseout(function() {
                    $this.autoDo();
                });
            }
        },
        autoDo: function() { //播放方法;
            var $len = $(this).length - 1;
            var $this = $(this);
            timeL = window.setInterval(function() {
                $this.eq(opts.index).anim();
                opts.index < $len ? opts.index++ : opts.index = 0;
            }, opts.sec);
        },
        anim: function() { //动画方法;
            var $fx = function() {
                $(this).siblings("li").animate({
                    width: opts.minWidth,
                    opacity: 0.5
                }, opts.speed).css("cursor", "pointer");
                $(this).animate({
                    width: opts.maxWidth,
                    opacity: 1
                }, opts.speed).css("cursor", "default");

                $(this).siblings("li").children("div").fadeOut();
                $(this).children("div").fadeTo(opts.speed, 0.7);
                $(this).dequeue();
            };
            $(this).queue($fx);
        }
    });
})(jQuery);
