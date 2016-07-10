$(function() {
    //nav
    var t;
    var index = 0;
    $('.js-nav').find('li').hover(function() {
        t = setTimeout("$('.subnav').slideDown(300)", 300);
        var i = $(this).index();
        index = i;
        $('.subnav').find('ul').eq(i).fadeIn(400);
    }, function() {
        clearTimeout(t);
        $('.subnav').slideUp(300);
        $('.subnav').find('ul').css('display', 'none');
    })
    $(".subnav").mouseenter(function() {
        $(this).stop();
        $(this).find('ul').eq(index).css('display', 'block');
    }).mouseleave(function() {
        $(this).stop().slideUp(300);
    });

    //视频列表特效
    $('.view').hover(function() {
        $(this).find('.iconplay').stop().animate({
            opacity: "1",
        }, "1000");
        $(this).find('img').stop().animate({
            marginTop: "-10px",
            marginBottom: "-10px",
            marginLeft: "-10px",
            marginRight: "-10px",
            width: "239px",
            height: "145px"
        }, "1500");
    }, function() {
        $(this).find('.iconplay').animate({
            opacity: "0"
        }, "1000");
        $(this).find('img').stop().animate({
            marginTop: "0",
            marginBottom: "0",
            marginLeft: "0",
            marginRight: "0",
            width: "219px",
            height: "125px"
        }, "1500");
    })
})
