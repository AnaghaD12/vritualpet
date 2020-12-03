//Create variables here
var dog, hd, db, foodStock, dg
var food, backyardbg;
var bg, gardendog, backgroundbg
var br, lr, wr, garden, br, lr, wr, start,poop;
var clean, clean1;
function preload()
{
  //load images here
  //dg = loadImage("images/dogImg.png")
  //hd = loadImage("images/dogImg1.png")
  garden= loadImage("images/Gardendog.png");
  br = loadImage("images/Bed Room.png")
  lr = loadImage("images/Living Room.png")
  wr = loadImage("images/Wash Room.png");
  start = loadImage("images/start.PNG")
  poop =loadImage("images/poop.png");

}

function setup() {
  createCanvas(450, 700);
 bg = createSprite(250,250,500,500)
  //dog = createSprite(250,300,50,50)
  //dog.addImage(dg)
  //dog.scale = .5
 food = new Food()
  db = firebase.database() 
  bg.addImage(start)
/*clean = createSprite(50,500,20,20)
clean.visible= false;
clean1 = createSprite(400,500,20,20)*/



}


function draw() {  
background(46,139,87)
food.feed.mousePressed(()=>{
  //food.foodStock = food.foodStock-1;
  food.writeStock(food.foodStock);
  bg.addImage(lr)
});

food.readStock()
/*food.refill.mousePressed(()=>{
  food.refillStock();
});*/
food.play.mousePressed(()=>{
  clean.visible = false 
  clean1.visible = false
  //dog.addImage(gardendog)
  bg.addImage(garden)
 // background(backyardbg)
 // console.log("hi")

 

});

food.buy.mousePressed(()=>{
  food.money -= 9
  food.foodStock = food.foodStock + 6
  //console.log("hi")
  food.writeMoney(food.money)
  food.writeStock(food.foodStock)
});




food.readMoney()
food.bed.mousePressed(()=>{
  bg.addImage(br)
  clean.visible = false
  clean1.visible = false
})




food.bath.mousePressed(()=>{
  clean = createSprite(50,500,20,20)
//clean.visible= false;
  clean1 = createSprite(400,500,20,20)
  bg.addImage(wr)
  clean.addImage(poop);
 // clean.visible = true;
  clean.scale = 0.2
  clean1.addImage(poop)
  //clean1.visible = true;
  clean1.scale = 0.2
 // clean1.visible = false;
})

 if(mousePressedOver(clean)){
  reward()
} 

 if(mousePressedOver(clean1)){
  reward1()
}

  drawSprites();
  //add styles here
  fill("black")
  //text("Press up arrow to feed your dog!",250,100);
  textSize(25)
  text("# of bones: " + food.foodStock,10,690);
  text("$" + food.money,200,690);
}

function reward(){
  clean.destroy();
  food.money += 1
  food.writeMoney(food.money)
}

function reward1(){
clean1.destroy();
console.log("clean1")

food.money += 1
food.writeMoney(food.money)
}
//# of bones 