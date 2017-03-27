####【Javascript Demo】图片瀑布流实现
<p>瀑布流就是像瀑布一样的网站&mdash;&mdash;丰富的网站内容，特别是绚美的图片会让你流连忘返。你在浏览网站的时候只需要轻轻滑动一下鼠标滚轮，一切的美妙的图片精彩便可呈现在你面前。瀑布流网站是新兴的一种网站模式&mdash;&mdash;她的典型代表是pinterest、美丽说、蘑菇街这类型的网站。</p>
<p>&nbsp;</p>
<p>下面是效果：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170314142059401-1678043656.gif" alt="" /></p>
<p>&nbsp;</p>
<p><strong>核心内容：</strong></p>
<p><strong>1.先设置布局</strong></p>
<p>主要HTML代码如下</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="box"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="content"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/01.jpg"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">
     ...
</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>然后设置宽度固定，高度自适应，.box 相对布局，向左浮动：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>; }<span style="color: #800000;">
.content </span>{<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 2px</span>;<span style="color: #ff0000;"> border</span>:<span style="color: #0000ff;"> 1px solid #ccc</span>;<span style="color: #ff0000;"> border-radius</span>:<span style="color: #0000ff;"> 2px</span>; }<span style="color: #800000;">
.content img </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 234px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> auto</span>; }<span style="color: #800000;">
#container </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> #fff none repeat scroll 0 0</span>;<span style="color: #ff0000;">  margin</span>:<span style="color: #0000ff;"> 0 auto</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> auto</span>; }</pre>
</div>
<p>&nbsp;</p>
<p><strong>2.图片位置摆放</strong></p>
<p>因为图片的高度不一致，先根据页面大小获取第一行的图片数量，然后把第二行第一个张图片放到第一行高度最低的图片下面，以此类推：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> imgLocation() {
    </span><span style="color: #0000ff;">var</span> cparent = document.getElementById("container"<span style="color: #000000;">);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">获取所有类名为box的元素</span>
    <span style="color: #0000ff;">var</span> ccontent = getChildElement(cparent,"box"<span style="color: #000000;">);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">第一张图片的宽度</span>
    <span style="color: #0000ff;">var</span> imgWidth = ccontent[0<span style="color: #000000;">].offsetWidth;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">第一列图片数量</span>
    <span style="color: #0000ff;">var</span> numLine = Math.floor(document.documentElement.clientWidth/imgWidth);
    <span style="color: #008000;">//</span><span style="color: #008000;">设置父容器的宽度</span>
    cparent.style.cssText = "width:"+ imgWidth * numLine + "px"<span style="color: #000000;">;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">获取每一张图片的高度</span>
    <span style="color: #0000ff;">var</span>  boxHeightArr =<span style="color: #000000;"> [];
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0;i&lt;ccontent.length;i++<span style="color: #000000;">){
        </span><span style="color: #0000ff;">if</span>(i&lt;<span style="color: #000000;">numLine){
            </span><span style="color: #008000;">//</span><span style="color: #008000;">把第一行元素的高度添加到数组中去</span>
            boxHeightArr[i] =<span style="color: #000000;"> ccontent[i].offsetHeight;
        }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
            </span><span style="color: #008000;">//</span><span style="color: #008000;">获取第一行图片高度最低的图片,然后把第二行第一种图片放在其下面，以此类推</span>
            <span style="color: #0000ff;">var</span> minHeight = Math.min.apply(<span style="color: #0000ff;">null</span><span style="color: #000000;">,boxHeightArr);
            </span><span style="color: #008000;">//</span><span style="color: #008000;">获取最低高度图片的Index</span>
            <span style="color: #0000ff;">var</span> minIndex =<span style="color: #000000;"> getMinHeightIndex(boxHeightArr,minHeight);
            ccontent[i].style.position </span>= "absolute"<span style="color: #000000;">;
            ccontent[i].style.top </span>= minHeight+"px"<span style="color: #000000;">;
            ccontent[i].style.left </span>= ccontent[minIndex].offsetLeft+"px"<span style="color: #000000;">;
            </span><span style="color: #008000;">//</span><span style="color: #008000;">重新计算高度</span>
            boxHeightArr[minIndex] +=<span style="color: #000000;"> ccontent[i].offsetHeight;
        }
    }
}
</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> getMinHeightIndex(boxHeightArr, minHeight) {
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i <span style="color: #0000ff;">in</span><span style="color: #000000;"> boxHeightArr){
        </span><span style="color: #0000ff;">if</span>(boxHeightArr[i] ===<span style="color: #000000;"> minHeight){
            </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> i;
        }
    }
}
</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> getChildElement(parent,className) {
    </span><span style="color: #0000ff;">var</span> contentArr =<span style="color: #000000;"> [];
    </span><span style="color: #0000ff;">var</span> allcontent = parent.getElementsByTagName("*"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0;i&lt;allcontent.length;i++<span style="color: #000000;">){
        </span><span style="color: #0000ff;">if</span>(allcontent[i].className ===<span style="color: #000000;"> className){
            contentArr.push(allcontent[i]);
        }
    }
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> contentArr;
}</span></pre>
</div>
<p>&nbsp;</p>
<p><strong>3.滚动加载</strong></p>
<p>然后通过判断鼠标是否滑动到底部，确定是否自动加载数据。</p>
<p>先判断是否滑到页面底部：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> isScrollBottom(){
    </span><span style="color: #0000ff;">var</span> cparent = document.getElementById("container"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> ccontent = getChildElement(cparent,"box"<span style="color: #000000;">);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">最后一张图片出现一半时的页面高度</span>
    <span style="color: #0000ff;">var</span> lastContentHeight = ccontent[ccontent.length - 1].offsetTop + Math.floor(ccontent[ccontent.length - 1].offsetHeight/2);
    <span style="color: #008000;">//</span><span style="color: #008000;"> 当前页面的高度</span>
    <span style="color: #0000ff;">var</span> pageHeight = document.documentElement.clientHeight||<span style="color: #000000;">document.body.clientHeight;
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 鼠标滚动的高度</span>
    <span style="color: #0000ff;">var</span> scrollTop = document.documentElement.scrollTop ||<span style="color: #000000;"> document.body.scrollTop;
    </span><span style="color: #008000;">//</span><span style="color: #008000;">是否允许滚动</span>
    <span style="color: #0000ff;">return</span> (lastContentHeight &lt; (pageHeight + scrollTop))?<span style="color: #0000ff;">true</span>:<span style="color: #0000ff;">false</span><span style="color: #000000;">;
}</span></pre>
</div>
<p>然后监听滚动事件，当满足加载条件时，加载图片：</p>
<div class="cnblogs_code">
<pre>window.onscroll = <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
    </span><span style="color: #008000;">//</span><span style="color: #008000;">最后一张图片出现一半时加载</span>
    <span style="color: #0000ff;">if</span><span style="color: #000000;">(isScrollBottom()){
        </span><span style="color: #008000;">//</span><span style="color: #008000;">加载图片</span>
        <span style="color: #0000ff;">var</span> cparent = document.getElementById("container"<span style="color: #000000;">);
        </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0;i&lt;dataImg.data.length;i++<span style="color: #000000;">){
            </span><span style="color: #0000ff;">var</span> box = document.createElement("div"<span style="color: #000000;">);
            box.className </span>= "box"<span style="color: #000000;">;
            cparent.appendChild(box);
            </span><span style="color: #0000ff;">var</span> content = document.createElement("div"<span style="color: #000000;">);
            content.className </span>= "content"<span style="color: #000000;">;
            box.appendChild(content);
            </span><span style="color: #0000ff;">var</span> img = document.createElement("img"<span style="color: #000000;">);
            img.src </span>=<span style="color: #000000;"> dataImg.data[i].src;
            content.appendChild(img);
        }
        </span><span style="color: #008000;">//</span><span style="color: #008000;">重新设置图片位置</span>
<span style="color: #000000;">        imgLocation();
    }
}</span></pre>
</div>
<p>&nbsp;</p>
<p>PS:也可以通过Ajax 初始化图片HTML 代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> initializeImgs() {
    </span><span style="color: #0000ff;">var</span><span style="color: #000000;"> xmlhttp;
    </span><span style="color: #0000ff;">if</span><span style="color: #000000;"> (window.XMLHttpRequest)
    {</span><span style="color: #008000;">//</span><span style="color: #008000;"> code for IE7+, Firefox, Chrome, Opera, Safari</span>
        xmlhttp=<span style="color: #0000ff;">new</span><span style="color: #000000;"> XMLHttpRequest();
    }
    </span><span style="color: #0000ff;">else</span><span style="color: #000000;">
    {</span><span style="color: #008000;">//</span><span style="color: #008000;"> code for IE6, IE5</span>
        xmlhttp=<span style="color: #0000ff;">new</span> ActiveXObject("Microsoft.XMLHTTP"<span style="color: #000000;">);
    }
    xmlhttp.onreadystatechange </span>=<span style="color: #000000;"> handleResponse;
    xmlhttp.open(</span>"GET",url4girls,<span style="color: #0000ff;">true</span><span style="color: #000000;">);
    xmlhttp.send();
}
</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> handleResponse(e){
    </span><span style="color: #008000;">//</span><span style="color: #008000;">当 onreadystatechange 事件被触发后，浏览器会把一个 Event 对象传递给指定的处理函数，target 属性则会被设为与此事件关联的XMLHttpRequest</span>
    <span style="color: #0000ff;">if</span>(e.target.readyState == XMLHttpRequest.DONE &amp;&amp; e.target.status == 200){ <span style="color: #008000;">//</span><span style="color: #008000;">请求成功</span>
<span style="color: #000000;">        addImgBox(e.target.responseText);
    }
}
</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> addImgBox(data) {
    </span><span style="color: #008000;">//</span><span style="color: #008000;">解析返回的XML文件</span>
    <span style="color: #0000ff;">var</span> imgArr = loadXMLString(data).getElementsByTagName("string"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> cparent = document.getElementById("container"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0;i&lt;imgArr.length;i++<span style="color: #000000;">){
        </span><span style="color: #0000ff;">var</span> box = document.createElement("div"<span style="color: #000000;">);
        box.className </span>= "box"<span style="color: #000000;">;
        cparent.appendChild(box);
        </span><span style="color: #0000ff;">var</span> content = document.createElement("div"<span style="color: #000000;">);
        content.className </span>= "content"<span style="color: #000000;">;
        box.appendChild(content);
        </span><span style="color: #0000ff;">var</span> img = document.createElement("img"<span style="color: #000000;">);
        img.src </span>=<span style="color: #000000;"> imgArr[i].innerHTML;
        content.appendChild(img);
    }
    imgLocation();
}</span></pre>
</div>
<p>&nbsp;</p>
<p><strong>相关文件</strong>：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">index_by_javascript.html
index_by_javascript.js
index_by_javascript_ajax.html
index_by_javascript_ajax.js
yctools.js
waterfall.css</span></pre>
</div>
<p><strong>具体可查看<a href="https://github.com/YeXiaoChao/PluginsFromJS/tree/master/Little%20Demos/waterfall" target="_blank">源码</a></strong></p>
<br />
【jQuery Demo】图片瀑布流实现
<p>效果前面一样，我们直接来看代码吧！</p>
<p>&nbsp;</p>
<p><strong>核心内容：</strong></p>
<p>1.先设置布局，主要HTML代码如下</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="box"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="content"</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/01.jpg"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">
     ...
</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>然后设置宽度固定，高度自适应，.box 相对布局，向左浮动：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>; }<span style="color: #800000;">
.content </span>{<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 2px</span>;<span style="color: #ff0000;"> border</span>:<span style="color: #0000ff;"> 1px solid #ccc</span>;<span style="color: #ff0000;"> border-radius</span>:<span style="color: #0000ff;"> 2px</span>; }<span style="color: #800000;">
.content img </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 234px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> auto</span>; }<span style="color: #800000;">
#container </span>{<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> #fff none repeat scroll 0 0</span>;<span style="color: #ff0000;">  margin</span>:<span style="color: #0000ff;"> 0 auto</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> auto</span>; }</pre>
</div>
<p>&nbsp;</p>
<p><strong>2.图片位置摆放</strong></p>
<p>因为图片的高度不一致，先根据页面大小获取第一行的图片数量，然后把第二行第一个张图片放到第一行高度最低的图片下面，以此类推：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> imgLocation() {
    </span><span style="color: #0000ff;">var</span> box = $(".box"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> boxWidth = box.eq(0).width(); <span style="color: #008000;">//</span><span style="color: #008000;">获取第一张图片的宽度</span>
    <span style="color: #0000ff;">var</span> num = Math.floor($(window).width()/boxWidth); //确定一排能放多少张图片
    <span style="color: #0000ff;">var</span> container = num * boxWidth+"px"<span style="color: #000000;">;
    $(</span>"#container").css("max-width"<span style="color: #000000;">,container);
    </span><span style="color: #0000ff;">var</span> boxArr = []; <span style="color: #008000;">//</span><span style="color: #008000;">获取盒子高度</span>
    box.each(<span style="color: #0000ff;">function</span><span style="color: #000000;"> (index, value) {
        </span><span style="color: #0000ff;">var</span> boxHeight =<span style="color: #000000;"> box.eq(index).height();
        </span><span style="color: #0000ff;">if</span>(index &lt;<span style="color: #000000;"> num){
            boxArr[index] </span>=<span style="color: #000000;"> boxHeight;
        }</span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
            </span><span style="color: #0000ff;">var</span> minboxHeight = Math.min.apply(<span style="color: #0000ff;">null</span>,boxArr); <span style="color: #008000;">//</span><span style="color: #008000;">获取最小高度</span>
            <span style="color: #0000ff;">var</span> minboxIndex =<span style="color: #000000;"> $.inArray(minboxHeight,boxArr);
            </span><span style="color: #008000;">//</span><span style="color: #008000;">通过位置进行摆放</span>
<span style="color: #000000;">            $(value).css({
                </span>"position":"absolute"<span style="color: #000000;">,
                </span>"top"<span style="color: #000000;">:minboxHeight,
                </span>"left"<span style="color: #000000;">:box.eq(minboxIndex).position().left
            });
            </span><span style="color: #008000;">//</span><span style="color: #008000;">重新计算高度</span>
            boxArr[minboxIndex] +=<span style="color: #000000;"> box.eq(index).height();
        }
    });
}</span></pre>
</div>
<p>&nbsp;</p>
<p><strong>3.滚动加载</strong></p>
<p>然后通过判断鼠标是否滑动到底部，确定是否自动加载数据。</p>
<p>先判断是否滑到页面底部：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">function</span><span style="color: #000000;"> scrollSide() {
    </span><span style="color: #0000ff;">var</span> box = $(".box"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> lastBoxHeight = box.last().get(0).offsetTop + Math.floor( box.last().height()/2);
    <span style="color: #008000;">//</span><span style="color: #008000;"> 当前页面的高度</span>
    <span style="color: #0000ff;">var</span> documentHeight =<span style="color: #000000;"> $(window).height();
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 鼠标滚动的高度</span>
    <span style="color: #0000ff;">var</span> scrollHeight =<span style="color: #000000;"> $(window).scrollTop();
    </span><span style="color: #0000ff;">return</span> (lastBoxHeight &lt; (scrollHeight + documentHeight))?<span style="color: #0000ff;">true</span>:<span style="color: #0000ff;">false</span>; <span style="color: #008000;">//</span><span style="color: #008000;">是否允许滚动</span>
}</pre>
</div>
<p>然后监听滚动事件，当满足加载条件时，加载图片：</p>
<div class="cnblogs_code">
<pre>        <span style="color: #008000;">//</span><span style="color: #008000;">监听鼠标监听事件</span>
        window.onscroll = <span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
            </span><span style="color: #008000;">//</span><span style="color: #008000;">最后一张图片出现一半时加载</span>
            <span style="color: #0000ff;">if</span><span style="color: #000000;">(scrollSide()){
                $.each(dataImg.data,</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (index, value) {
                    </span><span style="color: #0000ff;">var</span> box = $("&lt;div&gt;").addClass("box").appendTo($("#container"<span style="color: #000000;">));
                    </span><span style="color: #0000ff;">var</span> content = $("&lt;div&gt;").addClass("content"<span style="color: #000000;">).appendTo(box);
                    $(</span>"&lt;img&gt;").attr("src",$(value).attr("src"<span style="color: #000000;">)).appendTo(content);
                });
                imgLocation();
            }
        };</span></pre>
</div>
<p>&nbsp;</p>
<p>PS:也可以通过Ajax 初始化图片HTML 代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000;">//</span><span style="color: #008000;">初始化图片</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> initializeImgs() {
    $.ajax({
        type:</span>'GET'<span style="color: #000000;">,
        url:url4girls,
        dateType:</span>'xml'<span style="color: #000000;">,
        success:</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
            addImgBox(data);
        }
    });
};

</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> addImgBox(data) {
    </span><span style="color: #0000ff;">var</span> arr = $(data).find('string'<span style="color: #000000;">);
    $.each(arr,</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (index, value) {
        </span><span style="color: #0000ff;">var</span> box = $("&lt;div&gt;").addClass("box").appendTo($("#container"<span style="color: #000000;">));
        </span><span style="color: #0000ff;">var</span> content = $("&lt;div&gt;").addClass("content"<span style="color: #000000;">).appendTo(box);
        $(</span>"&lt;img&gt;").attr("src"<span style="color: #000000;">,$(value).text()).appendTo(content);
    });
    imgLocation();
}</span></pre>
</div>
<p>&nbsp;<strong>相关文件</strong>：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">index_by_jQuery.html
index_by_jQuery.js
index_by_jQuery_Ajax.html
index_by_jQuery_Ajax.js
waterfall.css
jquery</span>-3.1.1.min.js</pre>
</div>
