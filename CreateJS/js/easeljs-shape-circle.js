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
stage.update();

stage.addEventListener("click",handleClick);
function handleClick() {
    // Click happened;
    console.log("The mouse is clicked.");
}
stage.addEventListener("mousedown",handlePress);
function handlePress() {
    // A mouse press happened.
    // Listen for mouse move while the mouse is down:
    console.log("The mouse is pressed.");
    stage.addEventListener("mousemove",handleMove);
}
function handleMove() {
    // Check out the DragAndDrop example in GitHub for more
    console.log("The mouse is moved.");
}