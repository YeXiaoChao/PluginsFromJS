function $(className) {
    // IE9以下版本浏览器不支持 getElementsByTagName 方法，可以改为通过设置元素id，然后通过id 获取
    return typeof className=="string"?document.getElementsByClassName(className)[0]:className;
}

window.onload = function () {
    var titleName = $("tab-title").getElementsByTagName("li");
    var tabContent = $("tab-content").getElementsByTagName("ul");
    if(titleName.length != tabContent.length){ // 当数目不对等时，直接返回
        return;
    }
    var index = 0;
    for (var i=0;i<titleName.length;i++){
        titleName[i].tabIndex = i;
        titleName[i].onmouseover = function () {
            for (var j=0;j<titleName.length;j++){
                titleName[j].className = "";
                tabContent[j].style.display = "none";
            }
            this.className = "selected";
            tabContent[this.tabIndex].style.display = "block";
        };
    }
};
