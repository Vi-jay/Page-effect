//back_top
window.onscroll = function() {
    if ($(window).scrollTop() > $(window).height() * 2) {
        $(".back_top").css({
            "display": "block"
        });
    }else{
        $(".back_top").hide();
    }
}
$(".back_top").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});
