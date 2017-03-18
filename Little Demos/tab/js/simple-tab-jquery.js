$(document).ready(function () {
    $(".tab-title li").mouseover(function () {
        var index = $(this).index();
        $(".tab-title li").removeClass("selected");
        $(".tab-content ul").hide();
        $(".tab-title li").eq(index).addClass("selected");
        $(".tab-content ul").eq(index).show();
    });
})