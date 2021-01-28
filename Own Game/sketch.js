var bg, player_img, button, state = "start";
var more_btn, btn_2, level_1_sprite, lvl_1_logo;


function preload(){
  bg = loadImage("./Images/Starter - Copy.jpg")
  bg1_st2 = loadImage("./Images/Main bg - st 2.jpg")
  bg2 = loadImage("./Images/bg2.jpg")
  player_img = loadImage("/Images/hero.png")
  more_btn = loadImage("/Images/more.png")
  fight_btn = loadImage("./Images/Fight.png")
  lvl_1_logo = loadImage("./Images/image.jpg")
}

function setup(){
  var canvas = createCanvas(displayWidth-4,displayHeight-151)
  // button = createElement("button")
  // button.html("next")
  // button.position(10*displayWidth/12,9.75*displayHeight/12)
  button = createSprite(10*displayWidth/12,9.75*displayHeight/12)
  button.addImage("btn", more_btn)
  btn_2 = createSprite(10*displayWidth/2,9.75*displayHeight/12)
  btn_2.addImage("fight", fight_btn)
  btn_2.visible = false
  level_1_sprite = createSprite(displayWidth/5, displayHeight/4)
  level_1_sprite.addImage("logo", lvl_1_logo)
  level_1_sprite.scale = 0.3
  level_1_sprite.visible = false
}

function draw(){
  background(bg)
  image(player_img, displayWidth/200, displayHeight/12, displayWidth/3, displayHeight/2.5)
  if(state==="start" && mousePressedOver(button)){
    state = "start_1"
  }
  if(state=="start_1"){
    background(bg1_st2)
    image(player_img, displayWidth/200, displayHeight/12, displayWidth/3, displayHeight/2.5)
    button.visible = false
    if(mousePressedOver(btn_2)){
      state="Level"
    }
    btn_2.visible = true
    btn_2.x = 9*displayWidth/12
    btn_2.y = 9*displayHeight/12
    btn_2.scale = 1.5
  }
  if(state === "Level"){
    background(bg2)
    btn_2.visible = false
    level_1_sprite.visible = true
    
  }
  console.log(state)
  drawSprites()
}