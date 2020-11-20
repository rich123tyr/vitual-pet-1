var dog, happydog, database, foodS, foodStock,dog1;

function preload(){
  
  dog = loadImage("Dog.png");
  happydog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog1 = createSprite(250,250,25,25);
  dog1.addImage(dog);
  dog1.scale = 0.15;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock, showerror);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    foodS--
    writeStock(foodS);
    dog1.addImage(happydog);
  }

  drawSprites();
  //add styles here

  fill("white");  
  textSize(20);
  text("Note: Press UP_ARROW key to feed Snoopy milk",50,30);
  text("Food:" + foodS,150,100);

}

function readStock(data){
  foodS = data.val();
}

function showerror(){
  console.log("Error");
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })

}


