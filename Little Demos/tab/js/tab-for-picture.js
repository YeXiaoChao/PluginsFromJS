var loopImgs;
$(document).ready(function () {
    //每隔一秒切换图片
     loopImgs = setInterval("changeTabByTimer()",2000);
    $(".imgTab li").mouseover(function () {
        clearInterval(loopImgs); // 清除循环事件
        changeTab($(this).index());
    });
    $(".imgTab li").mouseout(function () {
        loopImgs = setInterval("changeTabByTimer()",2000); // 启用循环事件，间隔为2 秒;
    });
});

function changeTab(imgIndex) {
    var leftNum = ($(".imgTab li").width()+10)*imgIndex+"px";
    var imgText = $(".imgShow li a").eq(imgIndex)[0].children[0].alt;
    //淡入淡出
    $(".imgShow li").stop()
    $(".imgShow li").fadeOut();
    $(".imgShow li").eq(imgIndex).fadeIn();
    // 动画效果
    $(".imgTab .now-status").stop();
    $(".imgTab .now-status").animate({left:leftNum });
    $(".imgText .text").text(imgText);
}
//循环事件
function changeTabByTimer() {
    var leftCss =$(".imgTab .now-status").css("left");
    var leftNum = parseInt(leftCss.substring(0,leftCss.length-2));
    var imgIndex = leftNum/($(".imgTab li").width()+10);
    var maxIndex = $(".imgTab li").length - 1;
    if(imgIndex<maxIndex){
        imgIndex++;
    }else {
        imgIndex=0;
    }
    changeTab(imgIndex);
}