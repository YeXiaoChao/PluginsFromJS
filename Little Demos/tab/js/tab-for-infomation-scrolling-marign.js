$(document).ready(function () {
    var mIndex = 0;
    var maxIndex = $(".tab-thumbs li").length-1;
    var imgWidth = $(".info").eq(0).width();
    // 为了对比，这里用JS 实现；实际上可以CSS直接添加的直接添加
    $(".tab-thumbs").attr("z-index","10"); //保持Tab 按钮在最上面
    // 设置图片的父元素为相对布局
    $(".tab-info").css({"position":"relative","width":imgWidth*$(".tab-thumbs li").length+"px"});
    // 去除隐藏类 hidden
    $(".info").removeClass("hidden");
    $(".tab-thumbs li").click(function () {
         mIndex = $(this).index();
        changeTab(mIndex);
    });
    $(".arrows-right").click(function () {
        if(mIndex<maxIndex){
            mIndex++;
        }else {
            mIndex = 0;
        }
        changeTab(mIndex);
    });
    $(".arrows-left").click(function () {
        if(mIndex>0){
            mIndex--;
        }else {
            mIndex = maxIndex;
        }
        changeTab(mIndex);
    });
})

function changeTab(theIndex) {
    var imgWidth = $(".info").eq(0).width();
    var marginValue = "-"+theIndex*imgWidth+"px";
    $(".tab-thumbs li").removeClass("selected");
    $(".tab-thumbs li").eq(theIndex).addClass("selected");
    $(".tab-info").css({"margin-left":marginValue,"transition-property":"margin-left","transition-duration":"0.2s"}); //进行元素左移效果
}