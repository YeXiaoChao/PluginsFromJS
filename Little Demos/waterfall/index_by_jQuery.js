$(document).ready(function () {
        imgLocation();
        var dataImg = {
            "data":
                [
                    { "src":"../imgs/Girls/01.jpg"},
                    { "src":"../imgs/Girls/02.jpg"},
                    { "src":"../imgs/Girls/03.jpg"},
                    { "src":"../imgs/Girls/04.png"},
                    { "src":"../imgs/Girls/05.jpg"},
                    { "src":"../imgs/Girls/06.png"}
                ]}
        //监听鼠标监听事件
        window.onscroll = function () {
            //最后一张图片出现一半时加载
            if(scrollSide()){
                $.each(dataImg.data,function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src",$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
});
function scrollSide() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor( box.last().height()/2);
    // 当前页面的高度
    var documentHeight = $(window).height();
    // 鼠标滚动的高度
    var scrollHeight = $(window).scrollTop();
    return (lastBoxHeight < (scrollHeight + documentHeight))?true:false; //是否允许滚动
}
function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取第一张图片的宽度
    var num = Math.floor($(window).width()/boxWidth); //确定一排能放多少张图片
    var container = num * boxWidth+"px";
    $("#container").css("max-width",container);
    var boxArr = []; //获取盒子高度
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if(index < num){
            boxArr[index] = boxHeight;
        }else {
            var minboxHeight = Math.min.apply(null,boxArr); //获取最小高度
            var minboxIndex = $.inArray(minboxHeight,boxArr);
            //通过位置进行摆放
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            //重新计算高度
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}