<p>图片的切换效果有很多，比较常见的有水平滚动、垂直滚动、淡入淡出等。我们接下来一一实现这些效果。</p>
<p>&nbsp;</p>
<p><span style="font-size: 16px;"><strong><span style="color: #008000;">1.水平滚动</span></strong></span></p>
<p>1） 我们先来实现HTML页面，代码很简单：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="slider"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/04.png"</span><span style="color: #0000ff;">/&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/05.jpg"</span><span style="color: #0000ff;">/&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/14.jpg"</span><span style="color: #0000ff;">/&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/17.jpg"</span><span style="color: #0000ff;">/&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">img </span><span style="color: #ff0000;">src</span><span style="color: #0000ff;">="../imgs/Girls/20.jpg"</span><span style="color: #0000ff;">/&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="thumb"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>1<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>2<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>3<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>4<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>5<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>2）然后我们设置下CSS：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000;">/*</span><span style="color: #008000;">*   CSS Reset  *</span><span style="color: #008000;">*/</span><span style="color: #800000;">
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td </span>{<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;"> padding</span>:<span style="color: #0000ff;"> 0</span>; }<span style="color: #800000;">
body, button, input, select, textarea </span>{<span style="color: #ff0000;"> font</span>:<span style="color: #0000ff;"> 12px/1.5 tahoma, arial, \5b8b\4f53</span>; }<span style="color: #800000;">
h1, h2, h3, h4, h5, h6 </span>{<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 100%</span>; }<span style="color: #800000;">
address, cite, dfn, em, var </span>{<span style="color: #ff0000;"> font-style</span>:<span style="color: #0000ff;"> normal</span>; }<span style="color: #800000;">
code, kbd, pre, samp </span>{<span style="color: #ff0000;"> font-family</span>:<span style="color: #0000ff;"> couriernew, courier, monospace</span>; }<span style="color: #800000;">
small </span>{<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 12px</span>; }<span style="color: #800000;">
ul, ol </span>{<span style="color: #ff0000;"> list-style</span>:<span style="color: #0000ff;"> none</span>; }<span style="color: #800000;">
a </span>{<span style="color: #ff0000;"> text-decoration</span>:<span style="color: #0000ff;"> none</span>; }<span style="color: #800000;">
a:hover </span>{<span style="color: #ff0000;"> text-decoration</span>:<span style="color: #0000ff;"> underline</span>; }<span style="color: #800000;">
sup </span>{<span style="color: #ff0000;"> vertical-align</span>:<span style="color: #0000ff;"> text-top</span>; }<span style="color: #800000;">
sub </span>{<span style="color: #ff0000;"> vertical-align</span>:<span style="color: #0000ff;"> text-bottom</span>; }<span style="color: #800000;">
legend </span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #000</span>; }<span style="color: #800000;">
fieldset, img </span>{<span style="color: #ff0000;"> border</span>:<span style="color: #0000ff;"> 0</span>; }<span style="color: #800000;">
button, input, select, textarea </span>{<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 100%</span>; }<span style="color: #800000;">
table </span>{<span style="color: #ff0000;"> border-collapse</span>:<span style="color: #0000ff;"> collapse</span>;<span style="color: #ff0000;"> border-spacing</span>:<span style="color: #0000ff;"> 0</span>; }
<span style="color: #008000;">/*</span><span style="color: #008000;">   container  </span><span style="color: #008000;">*/</span><span style="color: #800000;">
#container </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 320px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 456px</span>;<span style="color: #ff0000;"> overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 20px auto</span>; }<span style="color: #800000;">
.slider </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>; }<span style="color: #800000;">
.slider img </span>{<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 320px</span>;<span style="color: #ff0000;"> display</span>:<span style="color: #0000ff;"> block</span>; }<span style="color: #800000;">
.thumb </span>{<span style="color: #ff0000;"> position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;"> bottom</span>:<span style="color: #0000ff;"> 5px</span>;<span style="color: #ff0000;"> right</span>:<span style="color: #0000ff;"> 5px</span>; }<span style="color: #800000;">
.thumb li </span>{<span style="color: #ff0000;"> float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #FF7300</span>;<span style="color: #ff0000;"> text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;"> line-height</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 12px</span>;<span style="color: #ff0000;"> font-family</span>:<span style="color: #0000ff;"> Arial</span>;<span style="color: #ff0000;"> margin</span>:<span style="color: #0000ff;"> 3px 1px</span>;<span style="color: #ff0000;"> border</span>:<span style="color: #0000ff;"> 1px solid #FF7300</span>;<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;"> cursor</span>:<span style="color: #0000ff;"> pointer</span>; }<span style="color: #800000;">
.thumb li:hover,.thumb li.selected </span>{<span style="color: #ff0000;"> color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;"> line-height</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> width</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> height</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> font-size</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;"> background</span>:<span style="color: #0000ff;"> #EF7300</span>;<span style="color: #ff0000;"> font-weight</span>:<span style="color: #0000ff;"> bold</span>; }</pre>
</div>
<p>目前的显示效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170329110928873-585199941.png" alt="" /></p>
<p>3）接下来，我们需要点击实现图片的切换，下面是实现水平滚动效果的jQuery插件：</p>
<div class="cnblogs_code">
<pre>;(<span style="color: #0000ff;">function</span><span style="color: #000000;"> ($) {
   $.fn.extend({
       scrollHorizontal:</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
           </span><span style="color: #0000ff;">var</span> imgCount = $(".slider li"<span style="color: #000000;">).length;
           </span><span style="color: #0000ff;">var</span> imgWidth = $(".slider li").eq(0<span style="color: #000000;">).width();
           $(</span>".thumb li").eq(0).addClass("selected"<span style="color: #000000;">);
           </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=0;i&lt;imgCount;i++<span style="color: #000000;">){
               $(</span>".slider li"<span style="color: #000000;">).eq(i).css({
                   </span>"left":i*imgWidth+"px"<span style="color: #000000;">,
                   </span>"position":"absolute"<span style="color: #000000;">
               });
           }
           </span><span style="color: #008000;">//</span><span style="color: #008000;"> 初始化</span>
          $(".thumb li").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
              </span><span style="color: #0000ff;">var</span> theIndex = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
              </span><span style="color: #0000ff;">var</span> nowIndex = $(".selected"<span style="color: #000000;">).index();
              </span><span style="color: #0000ff;">var</span> leftWidth = imgWidth*(nowIndex-<span style="color: #000000;">theIndex);
              $(</span>".thumb li").removeClass("selected"<span style="color: #000000;">);
              $(</span>".thumb li").eq(theIndex).addClass("selected"<span style="color: #000000;">);
              $(</span>".slider li").animate({left:"+="+<span style="color: #000000;">leftWidth });
          });
       }
   });
})(jQuery);</span></pre>
</div>
<p>4）最后，我们在HTML页面调用这个插件：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span><span style="background-color: #f5f5f5; color: #000000;">
    $(document).ready(</span><span style="background-color: #f5f5f5; color: #0000ff;">function</span><span style="background-color: #f5f5f5; color: #000000;"> () {
        $(</span><span style="background-color: #f5f5f5; color: #000000;">"</span><span style="background-color: #f5f5f5; color: #000000;">#container</span><span style="background-color: #f5f5f5; color: #000000;">"</span><span style="background-color: #f5f5f5; color: #000000;">).scrollHorizontal();
    })
</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>5）这样效果就出来了：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170329111329420-1637825459.gif" alt="" /></p>
<p>&nbsp;</p>
<p><span style="font-size: 16px;"><strong><span style="color: #008000;">2.垂直滚动</span></strong></span></p>
<p>上面实现了水平滚动，那垂直滚动就简单了。通过获取图片的高度，然后控制 top 的值就可以了。新建的jQuery插件如下：</p>
<div class="cnblogs_code">
<pre>;(<span style="color: #0000ff;">function</span><span style="color: #000000;"> ($) {
   $.fn.extend({
       scrollVertical:</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
           </span><span style="color: #0000ff;">var</span> imgCount = $(".slider li"<span style="color: #000000;">).length;
           </span><span style="color: #0000ff;">var</span> imgHeight = $(".slider li").eq(0<span style="color: #000000;">).height();
           $(</span>".thumb li").eq(0).addClass("selected"<span style="color: #000000;">);
           </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=0;i&lt;imgCount;i++<span style="color: #000000;">){
               $(</span>".slider li"<span style="color: #000000;">).eq(i).css({
                   </span>"top":i*imgHeight+"px"<span style="color: #000000;">,
                   </span>"position":"absolute"<span style="color: #000000;">
               });
           }
           </span><span style="color: #008000;">//</span><span style="color: #008000;"> 初始化</span>
           $(".thumb li").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
               </span><span style="color: #0000ff;">var</span> theIndex = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
               </span><span style="color: #0000ff;">var</span> nowIndex = $(".selected"<span style="color: #000000;">).index();
               </span><span style="color: #0000ff;">var</span> topHeight = imgHeight*(nowIndex-<span style="color: #000000;">theIndex);
               $(</span>".thumb li").removeClass("selected"<span style="color: #000000;">);
               $(</span>".thumb li").eq(theIndex).addClass("selected"<span style="color: #000000;">);
               $(</span>".slider li").animate({top:"+="+<span style="color: #000000;">topHeight });
           });
       }
   });
})(jQuery);</span></pre>
</div>
<p>然后调用这个插件就可以了：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span><span style="background-color: #f5f5f5; color: #000000;">
    $(document).ready(</span><span style="background-color: #f5f5f5; color: #0000ff;">function</span><span style="background-color: #f5f5f5; color: #000000;"> () {
        $(</span><span style="background-color: #f5f5f5; color: #000000;">"</span><span style="background-color: #f5f5f5; color: #000000;">#container</span><span style="background-color: #f5f5f5; color: #000000;">"</span><span style="background-color: #f5f5f5; color: #000000;">).scrollVertical();
    })
</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170329114035904-206608141.gif" alt="" /></p>
<p>&nbsp;</p>
<p><span style="font-size: 16px;"><strong><span style="color: #008000;">3.淡入淡出</span></strong></span></p>
<p>同样淡入淡出也就很好实现了：</p>
<div class="cnblogs_code">
<pre>;(<span style="color: #0000ff;">function</span><span style="color: #000000;"> ($) {
   $.fn.extend({
       fadeInOut:</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
           </span><span style="color: #0000ff;">var</span> imgCount = $(".slider li"<span style="color: #000000;">).length;
           </span><span style="color: #0000ff;">var</span> imgHeight = $(".slider li").eq(0<span style="color: #000000;">).height();
           $(</span>".thumb li").eq(0).addClass("selected"<span style="color: #000000;">);
           </span><span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i=1;i&lt;imgCount;i++<span style="color: #000000;">){
               $(</span>".slider li"<span style="color: #000000;">).eq(i).css({
                   </span>"display":"none"<span style="color: #000000;">
               });
           }
           $(</span>".thumb li").click(<span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
               </span><span style="color: #0000ff;">var</span> theIndex = $(<span style="color: #0000ff;">this</span><span style="color: #000000;">).index();
               </span><span style="color: #0000ff;">var</span> nowIndex = $(".selected"<span style="color: #000000;">).index();
               $(</span>".thumb li").removeClass("selected"<span style="color: #000000;">);
               $(</span>".thumb li").eq(theIndex).addClass("selected"<span style="color: #000000;">);
               $(</span>".slider li"<span style="color: #000000;">).eq(nowIndex).fadeOut();
               $(</span>".slider li"<span style="color: #000000;">).eq(theIndex).fadeIn();
           });
       }
   });
})(jQuery);</span></pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/359646/201703/359646-20170329142019936-1312651501.gif" alt="" /></p>