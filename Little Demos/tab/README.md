<p>Tab标签切换效果是比较流行的一种网站页面布局，视觉表现为美观大方，通过标签展示内容。目前在各大网站都有存在这种效果。例如：淘宝的黄金位置使用Tab标签切换效果，网易新闻等。</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170317214346745-1008124615.gif" alt="" /></p>
<p>&nbsp;</p>
<p><span style="font-size: 14px;"><strong><span style="color: #339966;">1.简单的 Tab 标签</span></strong></span></p>
<p><span style="color: #339966;">a) 先来实现Tab标签的头部</span></p>
<p>通过HTML和CSS完成基本的标签效果。包括HTML的div标签和列表标签以及CSS定位、颜色和边距等。</p>
<p>HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-title"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li  </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="selected"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>公告<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>规则<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>论坛<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>安全<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>公益<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">body, ul, li </span>{<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 0</span>; }<span style="color: #800000;">
body, button, input, select, textarea </span>{<span style="color: #ff0000;"> font</span>:<span style="color: #0000ff;"> 12px/1.5 tahoma, arial, \5b8b\4f53</span>; }<span style="color: #800000;">
ul, ol </span>{<span style="color: #ff0000;"> list-style</span>:<span style="color: #0000ff;"> none</span>; }
<span style="color: #008000;">/*</span><span style="color: #008000;">------------- Tab title  --------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.tab </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 290px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 98px</span>;<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 20px auto</span>;<span style="color: #ff0000;">border</span>:<span style="color: #0000ff;"> 1px solid #ccc</span>; }<span style="color: #800000;">
.tab-title </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 24px</span>;<span style="color: #ff0000;"> margin-bottom</span>:<span style="color: #0000ff;"> 20px</span>;<span style="color: #ff0000;"> margin-right</span>:<span style="color: #0000ff;"> -2px</span>;<span style="color: #ff0000;"> margin-top</span>:<span style="color: #0000ff;"> 4px</span>;<span style="color: #ff0000;"> overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;"> ; padding</span>:<span style="color: #0000ff;"> 0 8px</span>; }<span style="color: #800000;">
.tab-title li </span>{<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 39px</span>;<span style="color: #ff0000;"> line-height</span>:<span style="color: #0000ff;"> 22px</span>;<span style="color: #ff0000;"> text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 0 8px</span>; }<span style="color: #800000;">
.tab-title li a:link, .tab-title li a:visited </span>{<span style="color: #ff0000;"> text-decoration</span>:<span style="color: #0000ff;"> none</span>;<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #3c3c3c</span>; }<span style="color: #800000;">
.tab-title li a:hover </span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #f40</span>;<span style="color: #ff0000;"> font-weight</span>:<span style="color: #0000ff;"> 700</span>; }<span style="color: #800000;">
.tab-title li.selected </span>{<span style="color: #ff0000;">border-bottom</span>:<span style="color: #0000ff;"> 2px solid #f40</span>;<span style="color: #ff0000;">font-weight</span>:<span style="color: #0000ff;"> 700</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;"> 0</span>;}</pre>
</div>
<p>效果：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170317221143838-1726786362.png" alt="" /></p>
<p><span style="color: #339966;">2) 内容部分的添加</span></p>
<p>通过HTML和CSS完成内容部分添加和隐藏。包括HTML的div标签和列表标签以及CSS的字体效果、标签的显示与隐藏等。</p>
<p>HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;"> 
    ...
    </span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-content"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod first"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="h"</span><span style="color: #ff0000;"> href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>工商总局局长张茅：赞成马云像打酒驾一样打假 <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>高法积极回应严刑打假<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>借鉴高检严惩电信诈骗 <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod hidden"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>七天无理由退货规则 <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>发布未经准入规则变更<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>新增发布混淆信息规则 <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span>扰乱市场秩序规则变更 <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod hidden"</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod hidden"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod hidden"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.tab .h </span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #f40 !important</span>;}<span style="color: #800000;">
.hidden</span>{<span style="color: #ff0000;"> display</span>:<span style="color: #0000ff;"> none</span>;}<span style="color: #800000;">
.tab-content .first li:first-child</span>{<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 260px</span>;}<span style="color: #800000;">
.tab-content .mod </span>{<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;"> -10px 10px 10px</span>;<span style="color: #ff0000;">overflow</span>:<span style="color: #0000ff;"> hidden</span>;}<span style="color: #800000;">
.tab-content .mod li</span>{<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 25px</span>;<span style="color: #ff0000;">line-height</span>:<span style="color: #0000ff;"> 25px</span>;<span style="color: #ff0000;">overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 130px</span>;}<span style="color: #800000;">
.tab-content .mod a </span>{<span style="color: #ff0000;"> text-decoration</span>:<span style="color: #0000ff;"> none</span>;<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #3c3c3c</span>; }<span style="color: #800000;">
.tab-content .mod a:hover </span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #f40</span>; }</pre>
</div>
<p>整体的显示效果就出来了：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170317222142932-28644762.png" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">3) 添加JS代码</span></p>
<p>通过使用JS DOM操作HTML标签实现标签的切换效果：&nbsp;</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> $(className) {
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> IE9以下版本浏览器不支持 getElementsByTagName 方法，可以改为通过设置元素id，然后通过id 获取</span>
    <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">typeof</span> className=="string"?document.getElementsByClassName(className)[0<span style="color: #000000;">]:className;
}

window.onload </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #0000ff;">var</span> titleName = $("tab-title").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> tabContent = $("tab-content").getElementsByTagName("ul"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">if</span>(titleName.length != tabContent.length){ <span style="color: #008000;">//</span><span style="color: #008000;"> 当数目不对等时，直接返回</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;">;
    }
    </span><span style="color: #0000ff;">var</span> index = 0<span style="color: #000000;">;
    </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=0;i&lt;titleName.length;i++<span style="color: #000000;">){
        titleName[i].tabIndex </span>=<span style="color: #000000;"> i;
        titleName[i].onmouseover </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
            </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> j=0;j&lt;titleName.length;j++<span style="color: #000000;">){
                titleName[j].className </span>= ""<span style="color: #000000;">;
                tabContent[j].style.display </span>= "none"<span style="color: #000000;">;
            }
            </span><span style="color: #0000ff;">this</span>.className = "selected"<span style="color: #000000;">;
            tabContent[</span><span style="color: #0000ff;">this</span>.tabIndex].style.display = "block"<span style="color: #000000;">;
        };
    }
};</span></pre>
</div>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170318100847010-339176417.gif" alt="" /></p>
<p>使用jQuery的话就更简单了：</p>
<div class="cnblogs_code">
<pre>$(document).ready(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    $(</span>".tab-title li").mouseover(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #0000ff;">var</span> index = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
        $(</span>".tab-title li").removeClass("selected"<span style="color: #000000;">);
        $(</span>".tab-content ul"<span style="color: #000000;">).hide();
        $(</span>".tab-title li").eq(index).addClass("selected"<span style="color: #000000;">);
        $(</span>".tab-content ul"<span style="color: #000000;">).eq(index).show();
    });
})</span></pre>
</div>
<p>相关源码：<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/simple-tab.html" target="_blank">simple-tab.html</a></p>
<p>&nbsp;</p>
<p><strong><span style="color: #339966;">2.Tab箭头标签jQuery幻灯片</span></strong></p>
<p>从上面的例子，大概了解了怎么实现Tab效果。进一步我们就可以实现通过Tab中的缩略图控制广告位图片的切换。效果图如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170318114642479-1531210645.png" alt="" /></p>
<p>可以很明显看出，这个Tab分为上面的图片广告位和下面的Tab图片标签，图片广告位又分为图片和文字说明两部分。</p>
<p>&nbsp;</p>
<p><span style="color: #339966;">1) Tab图片标签</span></p>
<p>因为之前的选中状态是通过设置 border-bottom 来实现的，但这里是通过一张图片来设置选中状态，所以需要设置选中状态的样式为相对于Tab图片标签为 position:absolute，</p>
<p>而图片标签置于底部也使用 position:absolute，另外我们设置整个模块的位置为position:relation，这样就可以设置 margin:auto 水平居中对齐了。</p>
<p>HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="slide"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgContent"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgTab"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="mod"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="javascript:;"</span><span style="color: #0000ff;">&gt;</span>
                    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="imgs/thumb_120_60_1349779141347.jpg"</span><span style="color: #ff0000;"> alt</span><span style="color: #0000ff;">="中国&ldquo;和平方舟&rdquo;号医院船抵达亚丁湾"</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="now-status"</span><span style="color: #ff0000;"> style</span><span style="color: #0000ff;">="left: 0px;"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">body, ul, li </span>{<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 0</span>; }<span style="color: #800000;">
body, button, input, select, textarea </span>{<span style="color: #ff0000;"> font</span>:<span style="color: #0000ff;"> 12px/1.5 tahoma, arial, \5b8b\4f53</span>; }<span style="color: #800000;">
ul,ol </span>{<span style="color: #ff0000;"> list-style</span>:<span style="color: #0000ff;"> none</span>; }
<span style="color: #008000;">/*</span><span style="color: #008000;">------------- Tab title  --------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.slide </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 640px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 430px</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 20px auto</span>;<span style="color: #ff0000;">position</span>:<span style="color: #0000ff;">relative</span>; }<span style="color: #800000;">
.imgTab </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;">70px</span>;<span style="color: #ff0000;"> bottom</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">left</span>:<span style="color: #0000ff;">0</span>;}<span style="color: #800000;">
.imgTab ul</span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;">660px</span>;<span style="color: #ff0000;">overflow</span>:<span style="color: #0000ff;">hidden</span>;<span style="color: #ff0000;"> margin-top</span>:<span style="color: #0000ff;">10px</span>;}<span style="color: #800000;">
.imgTab li </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;">120px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;">60px</span>;<span style="color: #ff0000;">margin-right</span>:<span style="color: #0000ff;">10px</span>;<span style="color: #ff0000;">float</span>:<span style="color: #0000ff;">left</span>; }<span style="color: #800000;">
.imgTab img </span>{<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 120px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 60px</span>;}<span style="color: #800000;">
.imgTab .now-status </span>{<span style="color: #ff0000;">position</span>:<span style="color: #0000ff;">absolute</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;">130px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;">20px</span>;<span style="color: #ff0000;">background</span>:<span style="color: #0000ff;">url(../imgs/slider-ico.png) no-repeat 0 0</span>;<span style="color: #ff0000;">z-index</span>:<span style="color: #0000ff;">-1</span>;<span style="color: #ff0000;">top</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">left</span>:<span style="color: #0000ff;">0</span>;}</pre>
</div>
<p>效果：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170318123008338-2012311109.png" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">2) 图片内容部分</span></p>
<p>HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="slide"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgContent"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgShow"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">img  </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="imgs/thumb_640_360_1349779141347.jpg"</span><span style="color: #ff0000;">  alt</span><span style="color: #0000ff;">="..."</span><span style="color: #0000ff;">&gt;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="hidden"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="hidden"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="hidden"</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="hidden"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgText"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">p </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="text"</span><span style="color: #0000ff;">&gt;</span>...<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="shadow"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="imgTab"</span><span style="color: #0000ff;">&gt;</span>... <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.hidden </span>{<span style="color: #ff0000;"> display</span>:<span style="color: #0000ff;"> none</span>; }<span style="color: #800000;">
.imgContent img </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 640px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 360px</span>; }<span style="color: #800000;">
.imgContent .imgShow </span>{<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 360px</span>;<span style="color: #ff0000;"> overflow</span>:<span style="color: #0000ff;"> hidden</span>; }<span style="color: #800000;">
.imgContent .imgText </span>{<span style="color: #ff0000;"> bottom</span>:<span style="color: #0000ff;"> 70px</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 100%</span>;<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>; }<span style="color: #800000;">
.imgContent .imgText .text </span>{<span style="color: #ff0000;"> z-index</span>:<span style="color: #0000ff;"> 30</span>;<span style="color: #ff0000;"> line-height</span>:<span style="color: #0000ff;"> 20px</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 4px 10px 0 10px</span>;<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>; }<span style="color: #800000;">
.imgContent .imgText .text </span>{<span style="color: #ff0000;"> font-weight</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 12px</span>;<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #fff</span>;}<span style="color: #800000;">
.imgContent .shadow </span>{<span style="color: #ff0000;"> background-color</span>:<span style="color: #0000ff;"> #000</span>;<span style="color: #ff0000;"> opacity</span>:<span style="color: #0000ff;"> .5</span>;<span style="color: #ff0000;"> filter</span>:<span style="color: #0000ff;"> alpha(opacity=50)</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 70px</span>;  }</pre>
</div>
<p>效果：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170318130109510-1444631714.png" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">3) 添加jQuery代码</span></p>
<p>通过Tab切换当前Tab、广告位的图片和文字：</p>
<div class="cnblogs_code">
<pre>$(document).ready(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    $(</span>".imgTab li").mouseover(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #0000ff;">var</span> imgIndex = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
        </span><span style="color: #0000ff;">var</span> leftNum = ($(".imgTab li").width()+10)*imgIndex+"px"<span style="color: #000000;">;
        </span><span style="color: #0000ff;">var</span> imgText = $(".imgShow li a").eq(imgIndex)[0].children[0<span style="color: #000000;">].alt;
        $(</span>".imgShow li"<span style="color: #000000;">).hide();
        $(</span>".imgShow li"<span style="color: #000000;">).eq(imgIndex).show();</span><span style="color: #000000;">
        $(</span>".imgTab .now-status").css("left"<span style="color: #000000;">,leftNum);
        $(</span>".imgText .text"<span style="color: #000000;">).text(imgText);
    });
})</span></pre>
</div>
<p>这样，简单的切换效果就出来了：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170318133439338-644205378.gif" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">4) 轮播和动画</span></p>
<p>最后，我们可以通过定时器加上轮播效果，以及给Tab切换添上动画效果，修改JS文件如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">var</span><span style="color: #000000;"> loopImgs;
$(document).ready(</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #008000;">//</span><span style="color: #008000;">每隔一秒切换图片</span>
     loopImgs = setInterval("changeTabByTimer()",2000<span style="color: #000000;">);
    $(</span>".imgTab li").mouseover(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        clearInterval(loopImgs); </span><span style="color: #008000;">//</span><span style="color: #008000;"> 清除循环事件</span>
        changeTab($(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index());
    });
    $(</span>".imgTab li").mouseout(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        loopImgs </span>= setInterval("changeTabByTimer()",2000); <span style="color: #008000;">//</span><span style="color: #008000;"> 启用循环事件，间隔为2 秒;</span>
<span style="color: #000000;">    });
});

</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTab(imgIndex) {
    </span><span style="color: #0000ff;">var</span> leftNum = ($(".imgTab li").width()+10)*imgIndex+"px"<span style="color: #000000;">;
    </span><span style="color: #0000ff;">var</span> imgText = $(".imgShow li a").eq(imgIndex)[0].children[0<span style="color: #000000;">].alt;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">淡入淡出</span>
    $(".imgShow li"<span style="color: #000000;">).stop()
    $(</span>".imgShow li"<span style="color: #000000;">).fadeOut();
    $(</span>".imgShow li"<span style="color: #000000;">).eq(imgIndex).fadeIn();
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 动画效果</span>
    $(".imgTab .now-status"<span style="color: #000000;">).stop();
    $(</span>".imgTab .now-status"<span style="color: #000000;">).animate({left:leftNum });
    $(</span>".imgText .text"<span style="color: #000000;">).text(imgText);
}
</span><span style="color: #008000;">//</span><span style="color: #008000;">循环事件</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTabByTimer() {
    </span><span style="color: #0000ff;">var</span> leftCss =$(".imgTab .now-status").css("left"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> leftNum = parseInt(leftCss.substring(0,leftCss.length-2<span style="color: #000000;">));
    </span><span style="color: #0000ff;">var</span> imgIndex = leftNum/($(".imgTab li").width()+10);
    <span style="color: #0000ff;">var</span> maxIndex = $(".imgTab li").length - 1<span style="color: #000000;">;
    </span><span style="color: #0000ff;">if</span>(imgIndex&lt;<span style="color: #000000;">maxIndex){
        imgIndex</span>++<span style="color: #000000;">;
    }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
        imgIndex</span>=0<span style="color: #000000;">;
    }
    changeTab(imgIndex);
}</span></pre>
</div>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170319165615073-1750207887.gif" alt="" /></p>
<p>相关源码：<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/tab-for-picture.html" target="_blank">tab-for-picture.html</a> ||&nbsp;<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/css/tab-for-picture.css" target="_blank">tab-for-picture.css</a> ||&nbsp;<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/js/tab-for-picture.js" target="_blank">tab-for-picture.js</a></p>
<p>&nbsp;</p>
<p><span style="color: #339966;"><strong>3.Tab箭头标签jQuery幻灯片(Javascirpt实现)</strong></span></p>
<p>用jQuery是比较简单的，接下来我们用原生的JavaScript代码实现：</p>
<p><span style="color: #339966;">1) 实现 Tab的效果</span></p>
<p>当我们把鼠标放到缩略图上时，显示当前聚焦的缩略图Tab，以及显示当前对应的广告位大图，通过第一个例子，这还是很容易实现的。JS代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> $(className) {
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> IE9以下版本浏览器不支持 getElementsByTagName 方法，可以改为通过设置元素id，然后通过id 获取</span>
    <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">typeof</span> className=="string"?document.getElementsByClassName(className)[0<span style="color: #000000;">]:className;
}
window.onload </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #0000ff;">var</span> tabThumbs = $("imgTab").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> tabContent = $("imgContent").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> tabContentText = $("imgContent").getElementsByTagName("a"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> nowStatus = $("now-status"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=0;i&lt;tabThumbs.length;i++<span style="color: #000000;">){
        tabThumbs[i].tabIndex </span>=<span style="color: #000000;"> i;
        tabThumbs[i].onmouseover </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
            </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> j=0;j&lt;tabThumbs.length;j++<span style="color: #000000;">){</span><span style="color: #000000;">
                tabContent[j].style.display </span>= "none"<span style="color: #000000;">;
            }
            nowStatus.style.left </span>= (<span style="color: #0000ff;">this</span>.offsetWidth+10)* <span style="color: #0000ff;">this</span>.tabIndex +"px"<span style="color: #000000;">;
            tabContent[</span><span style="color: #0000ff;">this</span>.tabIndex].style.display = "block"<span style="color: #000000;">;
            $(</span>"text").innerText = tabContentText[<span style="color: #0000ff;">this</span>.tabIndex].children[0<span style="color: #000000;">].alt;
        }
    }
}</span></pre>
</div>
<p>&nbsp;</p>
<p><span style="color: #339966;">2) 实现循环切换图片的效果</span></p>
<div class="cnblogs_code">
<pre>window.onload = <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #0000ff;">var</span> tabThumbs = $("imgTab").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">每隔一秒切换图片</span>
    <span style="color: #0000ff;">var</span> loopImgs = setInterval("changeTabByTimer()",2000<span style="color: #000000;">);
    </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=0;i&lt;tabThumbs.length;i++<span style="color: #000000;">){
        tabThumbs[i].tabIndex </span>=<span style="color: #000000;"> i;
        tabThumbs[i].onmouseover </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
            clearInterval(loopImgs); </span><span style="color: #008000;">//</span><span style="color: #008000;"> 清除循环事件</span>
            changeTab(<span style="color: #0000ff;">this</span><span style="color: #000000;">.tabIndex);
        }
        tabThumbs[i].onmouseout </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
            </span><span style="color: #008000;">//</span><span style="color: #008000;"> 启用循环事件，间隔为2 秒;</span>
            loopImgs = setInterval("changeTabByTimer()",2000<span style="color: #000000;">);
        }
    }
}

</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTab(mIndex) {
    </span><span style="color: #0000ff;">var</span> tabThumbs = $("imgTab").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> tabContent = $("imgContent").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> tabContentText = $("imgContent").getElementsByTagName("a"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> leftNum = (tabThumbs[0].offsetWidth+10)*mIndex+"px"<span style="color: #000000;">;
    </span><span style="color: #0000ff;">var</span> imgText =  tabContentText[mIndex].children[0<span style="color: #000000;">].alt;
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 广告位大图的隐藏和显示</span>
    <span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> j=0;j&lt;tabThumbs.length;j++<span style="color: #000000;">){
        tabContent[j].style.display </span>= "none"<span style="color: #000000;">;
    }
    tabContent[mIndex].style.display </span>= "block"<span style="color: #000000;">;
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> Tab 标签的聚焦</span>
    $("now-status").style.left =<span style="color: #000000;"> leftNum;
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 广告位文字的修改</span>
    $("text").innerText =<span style="color: #000000;"> imgText;
}

</span><span style="color: #008000;">//</span><span style="color: #008000;"> 图片循环切换</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTabByTimer() {
    </span><span style="color: #0000ff;">var</span> tabThumbs = $("imgTab").getElementsByTagName("li"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> leftCss =  $("now-status"<span style="color: #000000;">).style.left;
    </span><span style="color: #0000ff;">var</span> leftNum = parseInt(leftCss.substring(0,leftCss.length-2<span style="color: #000000;">));
    </span><span style="color: #0000ff;">var</span> imgIndex = leftNum/(tabThumbs[0].offsetWidth+10);
    <span style="color: #0000ff;">var</span> maxIndex = tabThumbs.length - 1<span style="color: #000000;">;
    </span><span style="color: #0000ff;">if</span>(imgIndex&lt;<span style="color: #000000;">maxIndex){
        imgIndex</span>++<span style="color: #000000;">;
    }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
        imgIndex</span>=0<span style="color: #000000;">;
    }
    changeTab(imgIndex);
}
</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> $(className) {</span>
    <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">typeof</span> className=="string"?document.getElementsByClassName(className)[0<span style="color: #000000;">]:className;
}</span></pre>
</div>
<p>&nbsp;</p>
<p><span style="color: #339966;">3) 最后我们再来实现动画效果：</span></p>
<p>&nbsp;我们先加入淡入和滑动效果：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> toLeft(elem,left,speed) {
    speed </span>= speed || 15<span style="color: #000000;">;
    </span><span style="color: #0000ff;">var</span> elemLeft =<span style="color: #000000;"> elem.style.left;
    </span><span style="color: #0000ff;">var</span> val =  parseInt(elemLeft.substring(0,elemLeft.length-2<span style="color: #000000;">));
    </span><span style="color: #0000ff;">var</span> valLeft = parseInt(left.substring(0,left.length-2<span style="color: #000000;">));
    </span><span style="color: #0000ff;">var</span> toRight = val&lt;valLeft?<span style="color: #0000ff;">true</span>:<span style="color: #0000ff;">false</span><span style="color: #000000;">;
    (</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        elem.style.left </span>= val+"px"<span style="color: #000000;">;
        </span><span style="color: #0000ff;">if</span>(val&lt;valLeft&amp;&amp;<span style="color: #000000;">toRight){
            val </span>+= 10<span style="color: #000000;">;
            setTimeout(arguments.callee, speed)
        }</span><span style="color: #0000ff;">else</span> <span style="color: #0000ff;">if</span>(val&gt;valLeft&amp;&amp;!<span style="color: #000000;">toRight){
            val </span>-= 10<span style="color: #000000;">;
            setTimeout(arguments.callee, speed)
        }
    })();
}
</span><span style="color: #008000;">//</span><span style="color: #008000;">淡入效果(含淡入到指定透明度)</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> fadeIn(elem, speed, opacity){
    </span><span style="color: #008000;">/*</span><span style="color: #008000;">
     * 参数说明
     * elem==&gt;需要淡入的元素
     * speed==&gt;淡入速度,正整数(可选)
     * opacity==&gt;淡入到指定的透明度,0~100(可选)
     </span><span style="color: #008000;">*/</span><span style="color: #000000;">
    speed </span>= speed || 20<span style="color: #000000;">;
    opacity </span>= opacity || 100<span style="color: #000000;">;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">显示元素,并将元素值为0透明度(不可见)</span>
    elem.style.display = 'block'<span style="color: #000000;">;
    SetOpacity(elem, </span>0<span style="color: #000000;">);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">初始化透明度变化值为0</span>
    <span style="color: #0000ff;">var</span> val = 0<span style="color: #000000;">;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">循环将透明值以5递增,即淡入效果</span>
    (<span style="color: #0000ff;">function</span><span style="color: #000000;">(){
        SetOpacity(elem, val);
        val </span>+= 5<span style="color: #000000;">;
        </span><span style="color: #0000ff;">if</span> (val &lt;=<span style="color: #000000;"> opacity) {
            setTimeout(arguments.callee, speed)
        }
    })();
}
</span><span style="color: #0000ff;">var</span> SetOpacity =  <span style="color: #0000ff;">function</span><span style="color: #000000;">(ev, v){
    ev.filters </span>? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100<span style="color: #000000;">;
}</span></pre>
</div>
<p>然后，我们调用对应的方法：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">fadeIn(tabContent[mIndex]);
</span><span style="color: #008000;">//</span><span style="color: #008000;"> Tab 标签的聚焦</span>
toLeft($("now-status"),leftNum);</pre>
</div>
<p>这样 JavaScript的效果就实现了（源码见&nbsp;<span class="css-truncate css-truncate-target"><a id="c35a83a6bbbe69f5b0098b13080ea172-ce56ac11c90436dea0a6e22654f12fe0052584a5" class="js-navigation-open" title="tab-for-picture-byjs.js" href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/js/tab-for-picture-byjs.js" target="_blank">tab-for-picture-byjs.js</a></span>）。</p>

<p>通过前一篇文章&nbsp;<a id="link_post_title" class="link-post-title" href="http://www.cnblogs.com/yc-755909659/p/6569039.html">从简单的Tab标签到Tab图片切换</a>&nbsp;的说明，相关效果也就可以实现了。</p>
<p>&nbsp;</p>
<p><strong><span style="color: #339966;">3.左右按钮tab选项卡双切换</span></strong></p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170320165058065-972259997.png" alt="" /></p>
<p>很明显，左右两个按钮是 absolute 布局，另外就是内容部分和Tab标签部分。</p>
<p><span style="color: #339966;">1) 先实现Tab内容和标签部分的显示：</span></p>
<p>HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-Infomations"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="arrows"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-content"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-info"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="info info1"</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">
                    We provide a full spectrum of online advertising...
                    </span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">br </span><span style="color: #0000ff;">/&gt;</span>
                    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="#"</span><span style="color: #ff0000;"> class</span><span style="color: #0000ff;">="GlobalButton"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>Tour Our Services<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="info info2 hidden"</span><span style="color: #0000ff;">&gt;</span><span>...</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="info info3 hidden"</span><span style="color: #0000ff;">&gt;...</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="info info4 hidden"</span><span style="color: #0000ff;">&gt;...</span> <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-thumbs"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="selected"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="javascript:;"</span><span style="color: #0000ff;">&gt;</span>What We Do<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="javascript:;"</span><span style="color: #0000ff;">&gt;</span>Who We Are<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="javascript:;"</span><span style="color: #0000ff;">&gt;</span>Why Choose Us<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a </span><span style="color: #ff0000;">href</span><span style="color: #0000ff;">="javascript:;"</span><span style="color: #0000ff;">&gt;</span>How We Work<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码:</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">body, ul, li </span>{<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 0</span>; }<span style="color: #800000;">
body, button, input, select, textarea </span>{<span style="color: #ff0000;"> font</span>:<span style="color: #0000ff;"> 12px/1.5 tahoma, arial, \5b8b\4f53</span>; }<span style="color: #800000;">
ul, ol,li </span>{<span style="color: #ff0000;"> list-style</span>:<span style="color: #0000ff;"> none</span>; }<span style="color: #800000;">
a </span>{<span style="color: #ff0000;"> text-decoration</span>:<span style="color: #0000ff;"> none</span>;}<span style="color: #800000;">
.hidden </span>{<span style="color: #ff0000;">display</span>:<span style="color: #0000ff;"> none</span>;}
<span style="color: #008000;">/*</span><span style="color: #008000;">----------   tab ------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.tab-Infomations </span>{<span style="color: #ff0000;">position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 959px</span>;<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;"> 10px auto</span>;}<span style="color: #800000;">
.tab-content  </span>{<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;">912px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;">324px</span>;<span style="color: #ff0000;">background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/slidebg.jpg")  no-repeat</span>;<span style="color: #ff0000;">
   overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;"> 0 auto</span>;}
<span style="color: #008000;">/*</span><span style="color: #008000;">----------   tab-thumbs ------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.tab-thumbs</span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">bottom</span>:<span style="color: #0000ff;"> 0</span>;}<span style="color: #800000;">
.tab-thumbs li </span>{<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 228px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 50px</span>;}<span style="color: #800000;">
.tab-thumbs li a </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 228px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">display</span>:<span style="color: #0000ff;"> block</span>;<span style="color: #ff0000;">color</span>:<span style="color: #0000ff;"> #ffffff</span>;<span style="color: #ff0000;">font-size</span>:<span style="color: #0000ff;"> 18px</span>;<span style="color: #ff0000;">font-family</span>:<span style="color: #0000ff;"> Arial,sans-serif</span>;<span style="color: #ff0000;">line-height</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">text-align</span>:<span style="color: #0000ff;"> center</span>; }<span style="color: #800000;">
.tab-thumbs li.selected a</span>{<span style="color: #ff0000;"> cursor</span>:<span style="color: #0000ff;"> default</span>;<span style="color: #ff0000;">text-shadow</span>:<span style="color: #0000ff;"> 1px 1px 1px #374f10</span>;}
<span style="color: #008000;">/*</span><span style="color: #008000;">----------   tab-info ------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.tab-info </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;">912px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;">324px</span>;}<span style="color: #800000;">
.info </span>{<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 912px</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 324px</span>;<span style="color: #ff0000;">position</span>:<span style="color: #0000ff;"> absolute</span>;}<span style="color: #800000;">
.info p</span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;">#1d1d1d</span>;<span style="color: #ff0000;">font-size</span>:<span style="color: #0000ff;"> 12px</span>;<span style="color: #ff0000;">line-height</span>:<span style="color: #0000ff;"> 20px</span>;<span style="color: #ff0000;">margin-left</span>:<span style="color: #0000ff;"> 326px</span>;<span style="color: #ff0000;">margin-top</span>:<span style="color: #0000ff;"> 142px</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 542px</span>; }<span style="color: #800000;">
.info1 </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/billboard1.png") no-repeat</span>; }<span style="color: #800000;">
.info2 </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/billboard2.png") no-repeat</span>; }<span style="color: #800000;">
.info3 </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/billboard3.png") no-repeat</span>; }<span style="color: #800000;">
.info4 </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/billboard4.png") no-repeat</span>; }<span style="color: #800000;">
.GlobalButton </span>{<span style="color: #ff0000;">background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/btn_right.png") no-repeat  top right</span>;<span style="color: #ff0000;">display</span>:<span style="color: #0000ff;"> block</span>;<span style="color: #ff0000;">float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;">font-weight</span>:<span style="color: #0000ff;"> bold</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 31px</span>;<span style="color: #ff0000;">margin-top</span>:<span style="color: #0000ff;"> 20px</span>;<span style="color: #ff0000;">padding-right</span>:<span style="color: #0000ff;"> 20px</span>;}<span style="color: #800000;">
.GlobalButton span </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> transparent url("../imgs/tab-for-infomation/btn_left.png") no-repeat 0 0</span>;<span style="color: #ff0000;">line-height</span>:<span style="color: #0000ff;"> 18px</span>;<span style="color: #ff0000;">line-height</span>:<span style="color: #0000ff;"> 18px</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;"> 7px 0 6px 20px</span>;<span style="color: #ff0000;">color</span>:<span style="color: #0000ff;"> #252525</span>;<span style="color: #ff0000;">display</span>:<span style="color: #0000ff;"> block</span>;}
<span style="color: #008000;">/*</span><span style="color: #008000;">----------   tab-info ------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.arrows </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>;}</pre>
</div>
<p>效果：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170320214548096-218803043.png" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">2) 然后我们把两边的按钮加上</span></p>
<p>这里稍微调整下HTML：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-Infomations"</span><span style="color: #0000ff;">&gt;</span>
<strong><span style="color: #339966;">    &lt;div class="arrows"&gt;</span>
<span style="color: #339966;">        &lt;a class="arrows-left prev"&gt;&lt;/a&gt;
        &lt;a class="arrows-right next"&gt;&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="tab-border"&gt;</span></strong>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="tab-content"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">
            ...
        </span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
   <span style="color: #339966;"><strong> &lt;/div&gt;</strong></span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>然后是CSS代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.tab-border </span>{<span style="color: #ff0000;"> border</span>:<span style="color: #0000ff;"> 1px solid #cccccc</span>;<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;"> 0 auto</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;">3px</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;"> 912px</span>;}
<span style="color: #008000;">/*</span><span style="color: #008000;">----------   tab-arrows ------------</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.arrows a </span>{<span style="color: #ff0000;"> display</span>:<span style="color: #0000ff;"> block</span>;<span style="color: #ff0000;">height</span>:<span style="color: #0000ff;"> 41px</span>;<span style="color: #ff0000;">width</span>:<span style="color: #0000ff;">41px</span>;<span style="color: #ff0000;">top</span>:<span style="color: #0000ff;"> 143px</span>;<span style="color: #ff0000;">z-index</span>:<span style="color: #0000ff;"> 10</span>;<span style="color: #ff0000;">position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">cursor</span>:<span style="color: #0000ff;"> pointer</span>;}<span style="color: #800000;">
.arrows-left </span>{<span style="color: #ff0000;">background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/arrows.png") no-repeat  0 0</span>;<span style="color: #ff0000;">left</span>:<span style="color: #0000ff;"> 0</span>;}<span style="color: #800000;">
.arrows-right </span>{<span style="color: #ff0000;">background</span>:<span style="color: #0000ff;"> url("../imgs/tab-for-infomation/arrows.png") no-repeat  -41px 0px</span>;<span style="color: #ff0000;">right</span>:<span style="color: #0000ff;"> 0</span>;}<span style="color: #800000;">
.arrows-left:hover,.arrows-right:hover </span>{<span style="color: #ff0000;">background-position-y</span>:<span style="color: #0000ff;"> -41px</span>;}</pre>
</div>
<p>显示效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170320220303986-109100214.png" alt="" /></p>
<p>&nbsp;</p>
<p><span style="color: #339966;">3) 然后就是添加jQuery方法&nbsp;</span></p>
<div class="cnblogs_code">
<pre>$(document).ready(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #0000ff;">var</span> mIndex = 0<span style="color: #000000;">;
    </span><span style="color: #0000ff;">var</span> maxIndex = $(".tab-thumbs li").length-1<span style="color: #000000;">;
    $(</span>".tab-thumbs li").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #0000ff;">var</span> mIndex = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
        changeTab(mIndex);
    });
    $(</span>".arrows-right").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #0000ff;">if</span>(mIndex&lt;<span style="color: #000000;">maxIndex){
            mIndex</span>++<span style="color: #000000;">;
        }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
            mIndex </span>= 0<span style="color: #000000;">;
        }
        changeTab(mIndex);
    });
    $(</span>".arrows-left").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #0000ff;">if</span>(mIndex&gt;0<span style="color: #000000;">){
            mIndex</span>--<span style="color: #000000;">;
        }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
            mIndex </span>=<span style="color: #000000;"> maxIndex;
        }
        changeTab(mIndex);
    });
})
</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTab(theIndex) {
    $(</span>".tab-thumbs li").removeClass("selected"<span style="color: #000000;">);
    $(</span>".tab-thumbs li").eq(theIndex).addClass("selected"<span style="color: #000000;">)
    $(</span>".info"<span style="color: #000000;">).stop();
    $(</span>".info"<span style="color: #000000;">).fadeOut();
    $(</span>".info"<span style="color: #000000;">).eq(theIndex).fadeIn();
}</span></pre>
</div>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170320223410893-1792348402.gif" alt="" />&nbsp;</p>
<p>源码见 <a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/tab-for-infomation.html" target="_blank">tab-for-infomation.html</a> ||&nbsp;<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/js/tab-for-infomation.js" target="_blank">tab-for-infomation.js</a> ||&nbsp;<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/css/tab-for-infomation.css" target="_blank">tab-for-infomation.css</a></p>
<p>&nbsp;</p>
<p><span style="font-size: 16px;"><strong><span style="color: #008000;">4.左右的滚动效果</span></strong></span></p>
<p>前面是用的淡入淡出的效果，但是一般来说还有左右滚动的效果。我们来实现看看：</p>
<p>为了和之前的对比，我们就不更改HTML 和CSS 文件中的代码。但是滚动效果是通过设置偏移值 left 来进行滚动的，而这里的信息展示部分不仅仅是图片，所以需要设置展示位的布局为相对布局，然后设置好展示位下的每个展示信息的left值，我们通过JS代码来操作：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">...
</span><span style="color: #0000ff;">var</span> maxIndex = $(".tab-thumbs li").length-1<span style="color: #000000;">;
</span><span style="color: #0000ff;">var</span> imgWidth = $(".tab-info").eq(0<span style="color: #000000;">).width();
</span><span style="color: #008000;">//</span><span style="color: #008000;"> 为了对比，这里用JS 实现；实际上可以CSS直接添加的直接添加</span>
$(".tab-thumbs").attr("z-index","10"); <span style="color: #008000;">//</span><span style="color: #008000;">保持Tab 按钮在最上面</span><span style="color: #008000;">
//</span><span style="color: #008000;"> 设置图片的父元素为相对布局</span>
$(".tab-info").css({"position":"relative","overflow":"hidden"<span style="color: #000000;">});
</span><span style="color: #008000;">//</span><span style="color: #008000;"> 去除隐藏类 hidden</span>
$(".info").removeClass("hidden"<span style="color: #000000;">);
</span><span style="color: #008000;">//</span><span style="color: #008000;"> 给每个类名为info 的元素设置左边缘位置</span>
<span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0;i&lt;=maxIndex;i++<span style="color: #000000;">){
    $(</span>".info").eq(i).css({"left":imgWidth*i+"px"<span style="color: #000000;">});
}
...</span></pre>
</div>
<p>然后我们的切换效果函数也需要修改下：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> changeTab(theIndex) {
    </span><span style="color: #0000ff;">var</span> nowIndex = $(".selected"<span style="color: #000000;">).index();
    </span><span style="color: #0000ff;">var</span> leftNum = $(".tab-info").eq(0).width()*(nowIndex-<span style="color: #000000;">theIndex);
    $(</span>".tab-thumbs li").removeClass("selected"<span style="color: #000000;">);
    $(</span>".tab-thumbs li").eq(theIndex).addClass("selected"<span style="color: #000000;">);
    $(</span>".info").animate({left:"+="+leftNum }); <span style="color: #008000;">//</span><span style="color: #008000;">进行元素左移效果</span>
}</pre>
</div>
<p>这样左右滚动的效果就实现了：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170327120154248-625946948.gif" alt="" /></p>
<p>相关源码：<a href="https://github.com/YeXiaoChao/PluginsFromJS/blob/master/Little%20Demos/tab/tab-for-infomation-scrolling.html" target="_blank">tab-for-infomation-scrolling.js</a></p>
