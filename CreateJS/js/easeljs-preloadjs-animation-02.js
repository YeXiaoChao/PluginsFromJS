var stage = new createjs.Stage("view");
container = new createjs.Container();
var data = {
    images:["imgs/easeljs-preloadjs-animation/moveGuy.png"],
    frames:{width:80,height:80, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations:{
        stand:0,
        run1:[0,3],
        run2:[4,7],
        run3:[8,11],
        run4:[12,15]
    }
}
var spriteSheet = new createjs.SpriteSheet(data)
var instance = new createjs.Sprite(spriteSheet,"run1")

container.addChild(instance);
stage.addChild(container);
createjs.Ticker.setFPS(5);
createjs.Ticker.addEventListener("tick",stage);
stage.update();

document.getElementById('goStraight').onclick =  function goStraight() {
    instance.gotoAndPlay("run1");
}
document.getElementById('goLeft').onclick =  function goLeft() {
    instance.gotoAndPlay("run2");
}
document.getElementById('goRight').onclick =  function goRight() {
    instance.gotoAndPlay("run3");
}
document.getElementById('goBack').onclick =  function goBack() {
    instance.gotoAndPlay("run4");
}