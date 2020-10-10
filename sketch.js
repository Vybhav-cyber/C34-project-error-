//Create variables here
var dog, happy_dog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  HappyDogImg = loadImage("images/happydog.png");
  DogImg = loadImage("images/Dog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
  dog = createSprite(250,350,10,60);
  dog.addImage(DogImg);
  
  Hdog = createSprite(250,350,10,60);
  dog.addImage(HappyDogImg);
  

}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(DogImg);
  }

  if(keyWentUp(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(HappyDogImage);
  }

  if(foodS === 0){
    foodS = 20;
  }

}

function readStock(data){
  foodS=data.val();
  
  }
  
  function writeStock(x,y){
  
  if (x<=0){
      x=0;
  } else {
      x=x-1;
  }
}
  
  database.ref('Stock/Food').update({
      Food : x
  })


