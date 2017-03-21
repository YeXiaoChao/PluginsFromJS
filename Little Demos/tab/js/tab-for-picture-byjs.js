window.onload = function () {
    var tabThumbs = $("imgTab").getElementsByTagName("li");
    //每隔一秒切换图片
    var loopImgs = setInterval("changeTabByTimer()",2000);
    for (var i=0;i<tabThumbs.length;i++){
        tabThumbs[i].tabIndex = i;
        tabThumbs[i].onmouseover = function () {
            clearInterval(loopImgs); // 清除循环事件
            changeTab(this.tabIndex);
        }
        tabThumbs[i].onmouseout = function () {
            // 启用循环事件，间隔为2 秒;
            loopImgs = setInterval("changeTabByTimer()",2000);
        }
    }
}
function stop() {
    clearInterval(animation);//清除动画效果
}

function changeTab(mIndex) {
    var tabThumbs = $("imgTab").getElementsByTagName("li");
    var tabContent = $("imgContent").getElementsByTagName("li");
    var tabContentText = $("imgContent").getElementsByTagName("a");
    var leftNum = (tabThumbs[0].offsetWidth+10)*mIndex+"px";
    var imgText =  tabContentText[mIndex].children[0].alt;
    // 广告位大图的隐藏和显示
    for(var j=0;j<tabThumbs.length;j++){
        tabContent[j].style.display = "none";
    }
    fadeIn(tabContent[mIndex]);
    // Tab 标签的聚焦
    toLeft($("now-status"),leftNum);
    // 广告位文字的修改
    $("text").innerText = imgText;
}
function toLeft(elem,left,speed) {
    speed = speed || 15;
    var elemLeft = elem.style.left;
    var val =  parseInt(elemLeft.substring(0,elemLeft.length-2));
    var valLeft = parseInt(left.substring(0,left.length-2));
    var toRight = val<valLeft?true:false;
    (function () {
        elem.style.left = val+"px";
        if(val<valLeft&&toRight){
            val += 10;
            setTimeout(arguments.callee, speed)
        }else if(val>valLeft&&!toRight){
            val -= 10;
            setTimeout(arguments.callee, speed)
        }
    })();
}
//淡入效果(含淡入到指定透明度)
function fadeIn(elem, speed, opacity){
    /*
     * 参数说明
     * elem==>需要淡入的元素
     * speed==>淡入速度,正整数(可选)
     * opacity==>淡入到指定的透明度,0~100(可选)
     */
    speed = speed || 20;
    opacity = opacity || 100;
    //显示元素,并将元素值为0透明度(不可见)
    elem.style.display = 'block';
    SetOpacity(elem, 0);
    //初始化透明度变化值为0
    var val = 0;
    //循环将透明值以5递增,即淡入效果
    (function(){
        SetOpacity(elem, val);
        val += 5;
        if (val <= opacity) {
            setTimeout(arguments.callee, speed)
        }
    })();
}
var SetOpacity =  function(ev, v){
    ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
}

// 图片循环切换
function changeTabByTimer() {
    var tabThumbs = $("imgTab").getElementsByTagName("li");
    var leftCss =  $("now-status").style.left;
    var leftNum = parseInt(leftCss.substring(0,leftCss.length-2));
    var imgIndex = leftNum/(tabThumbs[0].offsetWidth+10);
    var maxIndex = tabThumbs.length - 1;
    if(imgIndex<maxIndex){
        imgIndex++;
    }else {
        imgIndex=0;
    }
    changeTab(imgIndex);
}

// 通过className 获取元素信息
function $(className) {
    // IE9以下版本浏览器不支持 getElementsByTagName 方法，可以改为通过设置元素id，然后通过id 获取
    return typeof className=="string"?document.getElementsByClassName(className)[0]:className;
}