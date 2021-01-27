//to create the sprite objects
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
var garden, gardenImage;

//to preload the images
function preload() {
    cat1 = loadAnimation("tomTwo.png", "tomThree.png");
    cat2 = loadImage("tomFour.png");
    cat3 = loadImage("tomOne.png");

    mouse1 = loadAnimation("jerryTwo.png", "jerryThree.png");
    mouse2 = loadImage("jerryOne.png");
    mouse3 = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(0, 0, 1000, 800);
    garden.addImage("garden", gardenImage);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
