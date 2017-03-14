var num4Line = 0;
var url4girls = "http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirtures";
$(document).ready(function () {
    var imgIndex = 0;
    var fallUrl = "http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirturesByIndex";
    initializeImgs();
    //监听鼠标监听事件
    window.onscroll = function () {
        //最后一张图片出现一半时加载
        if(scrollSide()){
          $.ajax({
              type:'POST',
              url:fallUrl,
              data:{"index":imgIndex++,"length":num4Line},
              dateType:'xml',
              success:function (data) {
                  addImgBox(data);
              }
          });
        }
    };
});
//是否加载图片
function scrollSide() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor( box.last().height()/2);
    // 当前页面的高度
    var documentHeight = $(window).height();
    // 鼠标滚动的高度
    var scrollHeight = $(window).scrollTop();
    return (lastBoxHeight < (scrollHeight + documentHeight))?true:false; //是否允许滚动
}
//排列图片位置
function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取第一张图片的宽度
    num4Line = Math.floor($(window).width()/boxWidth); //确定一排能放多少张图片
    var container = num4Line * boxWidth+"px";
    $("#container").css("max-width",container);
    var boxArr = []; //获取盒子高度
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if(index < num4Line){
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

//初始化图片
function initializeImgs() {
    $.ajax({
        type:'GET',
        url:url4girls,
        dateType:'xml',
        success:function (data) {
            addImgBox(data);
        }
    });
};

function addImgBox(data) {
    var arr = $(data).find('string');
    $.each(arr,function (index, value) {
        var box = $("<div>").addClass("box").appendTo($("#container"));
        var content = $("<div>").addClass("content").appendTo(box);
        $("<img>").attr("src",$(value).text()).appendTo(content);
    });
    imgLocation();
}