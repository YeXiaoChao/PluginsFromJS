$(document).ready(function () {
    var mIndex = 0;
    var maxIndex = $(".tab-thumbs li").length-1;
    var imgWidth = $(".tab-info").eq(0).width();
    // 为了对比，这里用JS 实现；实际上可以CSS直接添加的直接添加
    $(".tab-thumbs").attr("z-index","10"); //保持Tab 按钮在最上面
    // 设置图片的父元素为相对布局
    $(".tab-info").css({"position":"relative","overflow":"hidden"});
    // 去除隐藏类 hidden
    $(".info").removeClass("hidden");
    // 给每个类名为info 的元素设置左边缘位置
    for(var i=0;i<=maxIndex;i++){
        $(".info").eq(i).css({"left":imgWidth*i+"px"});
    }

    $(".tab-thumbs li").click(function () {
        var mIndex = $(this).index();
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
    var nowIndex = $(".selected").index();
    var leftNum = $(".tab-info").eq(0).width()*(nowIndex-theIndex);
    $(".tab-thumbs li").removeClass("selected");
    $(".tab-thumbs li").eq(theIndex).addClass("selected");
    $(".info").animate({left:"+="+leftNum }); //进行元素左移效果
}