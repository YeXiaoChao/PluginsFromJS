var num4Line = 0;
var imgIndex = 0;
var url4girls = "http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirtures";
window.onload = function () {
    initializeImgs();
}
window.onscroll = function () {
    var fallUrl = "http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirturesByIndex";
    //最后一张图片出现一半时加载
    if(isScrollBottom()){
        //加载图片
        var xmlhttp;
        var formData = "index="+imgIndex+"&length="+num4Line;
        imgIndex++;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = handleResponse;
        xmlhttp.open("POST",fallUrl,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(formData);
    }
}
function isScrollBottom(){
    var isLoad = false;
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent,"box");
    if(ccontent.length>0){
    //最后一张图片出现一半时的页面高度
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop + Math.floor(ccontent[ccontent.length - 1].offsetHeight/2);
    // 当前页面的高度
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    // 鼠标滚动的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //是否允许滚动
    isLoad = (lastContentHeight < (pageHeight + scrollTop))?true:false;
    }
    return isLoad;
}
function initializeImgs() {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = handleResponse;
    xmlhttp.open("GET",url4girls,true);
    xmlhttp.send();
}
function handleResponse(e){
    //当 onreadystatechange 事件被触发后，浏览器会把一个 Event 对象传递给指定的处理函数，target 属性则会被设为与此事件关联的XMLHttpRequest
    if(e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200){ //请求成功
        addImgBox(e.target.responseText);
    }
}
function addImgBox(data) {
    //解析返回的XML文件
    var imgArr = loadXMLString(data).getElementsByTagName("string");
    var cparent = document.getElementById("container");
    for(var i=0;i<imgArr.length;i++){
        var box = document.createElement("div");
        box.className = "box";
        cparent.appendChild(box);
        var content = document.createElement("div");
        content.className = "content";
        box.appendChild(content);
        var img = document.createElement("img");
        img.src = imgArr[i].innerHTML;
        content.appendChild(img);
    }
    imgLocation();
}
function imgLocation() {
    var cparent = document.getElementById("container");
    //获取所有类名为box的元素
    var ccontent = getChildElement(cparent,"box");
    //第一张图片的宽度
    var imgWidth = ccontent[0].offsetWidth;
    //第一列图片数量
    num4Line = Math.floor(document.documentElement.clientWidth/imgWidth);
    //设置父容器的宽度
    cparent.style.cssText = "width:"+ imgWidth * num4Line + "px";
    //获取每一张图片的高度
    var  boxHeightArr = [];
    for(var i=0;i<ccontent.length;i++){
        if(i<num4Line){
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
