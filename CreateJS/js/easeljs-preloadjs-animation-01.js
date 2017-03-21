var stage = new createjs.Stage("view");
container = new createjs.Container();
var data = {
    // 源图像的数组。图像可以是一个html image实例，或URI图片。前者是建议控制堆载预压
    images:["imgs/easeljs-preloadjs-animation/moveGuy.png"],
    // 定义单个帧。有两个支持格式的帧数据：当所有的帧大小是一样的（在一个网格）， 使用对象的width, height, regX, regY 统计特性。
    // width & height 所需和指定的帧的尺寸
    // regX & regY 指示帧的注册点或“原点”
    // spacing 表示帧之间的间隔
    // margin 指定图像边缘的边缘
    // count 允许您指定在spritesheet帧的总数；如果省略，这将根据源图像的尺寸和结构计算。帧将被分配的指标，根据他们的位置在源图像（左至右，顶部至底部）。
    frames:{width:80,height:80, count:16, regX: 0, regY:0, spacing:0, margin:0},
    // 一个定义序列的帧的对象，以发挥命名动画。每个属性对应一个同名动画。
    // 每个动画必须指定播放的帧，还可以包括相关的播放速度（如2 将播放速度的两倍，0.5半）和下一个动画序列的名称。
    animations:{
        run:[0,3]
    }
}
var spriteSheet = new createjs.SpriteSheet(data)
var instance = new createjs.Sprite(spriteSheet,"run")

container.addChild(instance);
stage.addChild(container);
createjs.Ticker.setFPS(5);
createjs.Ticker.addEventListener("tick",stage);
stage.update();