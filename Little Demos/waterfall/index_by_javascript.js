var dataImg = {
    "data":
        [
            { "src":"../imgs/Girls/01.jpg"},
            { "src":"../imgs/Girls/02.jpg"},
            { "src":"../imgs/Girls/03.jpg"},
            { "src":"../imgs/Girls/04.png"},
            { "src":"../imgs/Girls/05.jpg"},
            { "src":"../imgs/Girls/06.png"}
        ]};
window.onload = function () {
    imgLocation();
}
window.onscroll = function () {
    //最后一张图片出现一半时加载
    if(isScrollBottom()){
        //加载图片
        var cparent = document.getElementById("container");
        for(var i=0;i<dataImg.data.length;i++){
            var box = document.createElement("div");
            box.className = "box";
            cparent.appendChild(box);
            var content = document.createElement("div");
            content.className = "content";
            box.appendChild(content);
            var img = document.createElement("img");
            img.src = dataImg.data[i].src;
            content.appendChild(img);
        }
        //重新设置图片位置
        imgLocation();
    }
}
function isScrollBottom(){
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent,"box");
    //最后一张图片出现一半时的页面高度
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop + Math.floor(ccontent[ccontent.length - 1].offsetHeight/2);
    // 当前页面的高度
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    // 鼠标滚动的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //是否允许滚动
    return (lastContentHeight < (pageHeight + scrollTop))?true:false;
}
function imgLocation() {
    var cparent = document.getElementById("container");
    //获取所有类名为box的元素
    var ccontent = getChildElement(cparent,"box");
    //第一张图片的宽度
    var imgWidth = ccontent[0].offsetWidth;
    //第一列图片数量
    var numLine = Math.floor(document.documentElement.clientWidth/imgWidth);
    //设置父容器的宽度
    cparent.style.cssText = "width:"+ imgWidth * numLine + "px";
    //获取每一张图片的高度
    var  boxHeightArr = [];
    for(var i=0;i<ccontent.length;i++){
        if(i<numLine){
            //把第一行元素的高度添加到数组中去
            boxHeightArr[i] = ccontent[i].offsetHeight;
        }else {
            //获取第一行图片高度最低的图片,然后把第二行第一种图片放在其下面，以此类推
            var minHeight = Math.min.apply(null,boxHeightArr);
            //获取最低高度图片的Index
            var minIndex = getMinHeightIndex(boxHeightArr,minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight+"px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            //重新计算高度
            boxHeightArr[minIndex] += ccontent[i].offsetHeight;
        }
    }
}
function getMinHeightIndex(boxHeightArr, minHeight) {
    for(var i in boxHeightArr){
        if(boxHeightArr[i] === minHeight){
            return i;
        }
    }
}
function getChildElement(parent,className) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className === className){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}