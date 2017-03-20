$(document).ready(function () {
    var mIndex = 0;
    var maxIndex = $(".tab-thumbs li").length-1;
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
    $(".tab-thumbs li").removeClass("selected");
    $(".tab-thumbs li").eq(theIndex).addClass("selected")
    $(".info").stop();
    $(".info").fadeOut();
    $(".info").eq(theIndex).fadeIn();
}