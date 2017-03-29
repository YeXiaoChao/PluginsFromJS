;(function ($) {
   $.fn.extend({
       scrollHorizontal:function () {
           // 初始化
           var imgCount = $(".slider li").length;
           var imgWidth = $(".slider li").eq(0).width();
           $(".thumb li").eq(0).addClass("selected");
           for (var i=0;i<imgCount;i++){
               $(".slider li").eq(i).css({
                   "left":i*imgWidth+"px",
                   "position":"absolute"
               });
           }
          $(".thumb li").click(function () {
              var theIndex = $(this).index();
              var nowIndex = $(".selected").index();
              var leftWidth = imgWidth*(nowIndex-theIndex);
              $(".thumb li").removeClass("selected");
              $(".thumb li").eq(theIndex).addClass("selected");
              $(".slider li").animate({left:"+="+leftWidth });
          });
       },
       scrollVertical:function () {
           var imgCount = $(".slider li").length;
           var imgHeight = $(".slider li").eq(0).height();
           $(".thumb li").eq(0).addClass("selected");
           for (var i=0;i<imgCount;i++){
               $(".slider li").eq(i).css({
                   "top":i*imgHeight+"px",
                   "position":"absolute"
               });
           }
           $(".thumb li").click(function () {
               var theIndex = $(this).index();
               var nowIndex = $(".selected").index();
               var topHeight = imgHeight*(nowIndex-theIndex);
               $(".thumb li").removeClass("selected");
               $(".thumb li").eq(theIndex).addClass("selected");
               $(".slider li").animate({top:"+="+topHeight });
           });
       },
       fadeInOut:function () {
           var imgCount = $(".slider li").length;
           var imgHeight = $(".slider li").eq(0).height();
           $(".thumb li").eq(0).addClass("selected");
           for (var i=1;i<imgCount;i++){
               $(".slider li").eq(i).css({
                   "display":"none"
               });
           }
           $(".thumb li").click(function () {
               var theIndex = $(this).index();
               var nowIndex = $(".selected").index();
               $(".thumb li").removeClass("selected");
               $(".thumb li").eq(theIndex).addClass("selected");
               $(".slider li").eq(nowIndex).fadeOut();
               $(".slider li").eq(theIndex).fadeIn();
           });
       }
   });
})(jQuery);