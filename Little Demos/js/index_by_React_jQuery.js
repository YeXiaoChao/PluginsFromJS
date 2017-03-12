$(document).ready(function () {
    $(window).on("load",function () {
        imgLocation();
    });
});

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取第一张图片的宽度
    var num = Math.floor($(window).width()/boxWidth); //确定一排能放多少张图片
    var container = num * boxWidth+"px";
    $("#container").css("max-width",container);
    var boxArr = []; //获取盒子高度
    box.each(function (index, value) {
       console.log(index+"--"+value)
    });
}