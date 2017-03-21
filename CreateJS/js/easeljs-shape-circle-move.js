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

/* Simple Interaction Example */
stage.addEventListener("click",handleClick);
function handleClick(event) {
    // Click happened;
}
stage.addEventListener("mousedown",handlePress);
function handlePress(event) {
    // A mouse press happened.
    // Listen for mouse move while the mouse is down:
    event.addEventListener("mousemove",handleMove);
}
function handleMove(event) {
    // Check out the DragAndDrop example in GitHub for more
}

/* Simple Animation
 * This example moves the shape created in the previous demo across the screen.*/
// Update stage will render next frame
createjs.Ticker.addEventListener("tick",handleTick);
//添加一个Ticker类帮助避免多次调用update方法
function handleTick() {
    // Circle will move 10 units to the right.
    circle.x +=10;
    //W ill cause the circle to wrap back
    if(circle.x > stage.canvas.width){ circle.x = 0;}
    stage.update();
}