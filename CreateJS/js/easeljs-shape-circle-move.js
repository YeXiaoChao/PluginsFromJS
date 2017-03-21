//Create a stage by getting a reference to the canvas
var stage = new createjs.Stage("circleView");
//Create a Shape DisplayObject.
var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,40);
//Set position of Shape instance.
circle.x = circle.y = 50;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame
//stage.update();

// Update stage will render next frame
createjs.Ticker.addEventListener("tick",handleTick);
//添加一个Ticker类帮助避免多次调用update方法
function handleTick() {
    var maxX =  stage.canvas.width - 50;
    var maxY =  stage.canvas.height - 50;
    //Will cause the circle to wrap back
    if(circle.x < maxX && circle.y == 50){
        // Circle will move 10 units to the right.
        circle.x +=10;
    }else if(circle.x == maxX && circle.y <maxY){
        circle.y +=10;
    }else if(circle.x > 50 && circle.y == maxY){
        circle.x -=10;
    }else if(circle.x<= 50){
        circle.y -=10;
    }
    stage.update();
}