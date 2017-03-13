var imgIndex = 0;
var fallUrl = "http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirturesByIndex";
function isScrollSide() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor( box.last().height()/2);
    // 当前页面的高度
    var documentHeight = $(window).height();
    // 鼠标滚动的高度
    var scrollHeight = $(window).scrollTop();
    var isScrollSide = (lastBoxHeight < (scrollHeight + documentHeight))?true:false;
    return isScrollSide;
}
var WaterfallPictrues = React.createClass({
    getInitialState:function () {
        return{
            pics:null
        };
    },
    imgLocation:function () {
        var box = $(".box");
        var boxWidth = box.eq(0).width(); //获取第一张图片的宽度
        var num = Math.floor($(window).width()/boxWidth); //确定一排能放多少张图片
        var container = num * boxWidth+"px";
        $("#container").css("max-width",container);
        var boxArr = []; //获取盒子高度
        box.each(function (index, value) {
            var boxHeight = box.eq(index).height();
            if(index < num){
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
    },
    handleScroll:function () {
        var box = $(".box");
        var lastBoxHeight = box.last().get(0).offsetTop + Math.floor( box.last().height()/2);
        // 当前页面的高度
        var documentHeight = $(window).height();
        // 鼠标滚动的高度
        var scrollHeight = $(window).scrollTop();
        var isScrollSide = (lastBoxHeight < (scrollHeight + documentHeight))?true:false;
        //是否加载新的图片
        if(isScrollSide){
            $.post(fallUrl,{"index":imgIndex++,"length":5},function (data) {
                var arr = $(data).find('string');
                $.each(arr,function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src",$(value).text()).appendTo(content);
                });
            });
        }
    },
    componentWillMount:function () {
        window.addEventListener('scroll', this.imgLocation);
        window.addEventListener('scroll', this.handleScroll);
    },
    componentDidMount:function () {
        $.get(this.props.url,function (data) {
            if(this.isMounted()){
                var arr = $(data).find('string');
                var myPics = new Array()
                for (var i = 0; i < arr.length; i++) {
                    myPics[i] = arr[i].innerHTML;
                }
                this.setState({
                    pics:myPics
                });
                this.imgLocation();
            }
        }.bind(this));
    },
    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('scroll', this.imgLocation.bind(this));
    },
    render:function () {
        if(this.state.pics!==null){
            var picList = this.state.pics.map(function (pic,i) {
                return (
                    <div className="box"  key={i}>
                    <div className="content" >
                    <img src={pic}/>
                    </div>
                    </div>
                );
            });
            return (
                <div>{picList}</div>
        );
        }else {
            return <p>Error</p>
        }
    }
});
ReactDOM.render(
<WaterfallPictrues url="http://www.ycdoit.com/api/Web4Luka.asmx/GetGirlsPirtures"/>,
    document.getElementById('container')
);