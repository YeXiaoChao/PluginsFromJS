var WaterfallPictrues = React.createClass({
    getInitialState:function () {
        return{
            pics:null
        };
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
            }
        }.bind(this));
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