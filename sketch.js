//Create variables here
var Dog,happydog
var FoodS,FoodStock
var database
var score = 0


function preload()
{
  //load images here
  DogIMG = loadImage("Dog.png");
  happydog = loadImage('happydog.png')
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  Dog = createSprite(200,300,120,40);
  Dog.addImage(DogIMG);
    Dog.scale = 0.2

 FoodStock = database.ref('Food');
FoodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(FoodS)
  Dog.addImage( happydog)
}
textSize(20);
fill('black')
   text('score:'+score,270,300)

drawSprites();
fill('black');
textSize(25);
text('Press UP_ARROW KEY to fill the Drago Milk!',50,30);

  }

  drawSprites();
 
  //add styles here
   



function readStock(data){
FoodS = data.val()
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x - 1
  }
  database.ref('/').update({
    food:x
  })
}


