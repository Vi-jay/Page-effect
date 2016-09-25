$(function(){
    if ($(window).scrollTop() == 0){
        $('#backTop').css('display','none');
    }
})
$(window).scroll(function() {
    if($(window).scrollTop() > $(window).height() / 2) {
        // $("#backTop").slideDown(500);
        $("#backTop").show(500);
    }else{
        // $("#backTop").slideUp(500);
        $("#backTop").hide(500);
    }
})
$("#backTop").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});