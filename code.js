var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["61219b06-9ceb-461d-98ae-9092dbbdaa75","13ad5356-0800-4789-ab5b-7e3b5fda38dc","1c60c9cd-7d50-470f-81b7-f2892abde46f","66275368-b7b0-48f4-80ed-d82f803eb4d3","b94023f9-1a92-4dca-99a9-f48e06701e87","d50a7340-c10d-4f5e-a8b9-29f72e1481a3"],"propsByKey":{"61219b06-9ceb-461d-98ae-9092dbbdaa75":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":2,"version":"MFU1ctNBP9L5wjwySetes6a9qg0NeGib","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/61219b06-9ceb-461d-98ae-9092dbbdaa75.png"},"13ad5356-0800-4789-ab5b-7e3b5fda38dc":{"name":"Steve","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"_KE10MXR7HUs7KfBhw3HG.XYYFqEKY79","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/13ad5356-0800-4789-ab5b-7e3b5fda38dc.png"},"1c60c9cd-7d50-470f-81b7-f2892abde46f":{"name":"chicken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo/category_animals/chicken.png","frameSize":{"x":324,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":324,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo/category_animals/chicken.png"},"66275368-b7b0-48f4-80ed-d82f803eb4d3":{"name":"paddle1","sourceUrl":null,"frameSize":{"x":4,"y":26},"frameCount":24,"looping":true,"frameDelay":1,"version":"KVS57gh6bbYCwU9wCWQgHTiAh3z.kmkH","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":52},"rootRelativePath":"assets/66275368-b7b0-48f4-80ed-d82f803eb4d3.png"},"b94023f9-1a92-4dca-99a9-f48e06701e87":{"name":"paddle2","sourceUrl":null,"frameSize":{"x":4,"y":26},"frameCount":23,"looping":true,"frameDelay":1,"version":"HBx4T9vrzyAmDIz462gT0xN8MfX3Xj0.","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":52},"rootRelativePath":"assets/b94023f9-1a92-4dca-99a9-f48e06701e87.png"},"d50a7340-c10d-4f5e-a8b9-29f72e1481a3":{"name":"circle","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":24,"looping":true,"frameDelay":1,"version":".p.E0BGb_HlNQdzg4R_P.9u9wNOP5C4N","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/d50a7340-c10d-4f5e-a8b9-29f72e1481a3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("white");

var player = createSprite(50,200,100,100);
player.scale=0.3;
player.setAnimation("paddle1");
background("black");
player.scale=3;
var ball = createSprite(200,200,100,100);
ball.setAnimation("circle");
ball.scale = 2.5;
ball.setSpeedAndDirection(5,randomNumber(135,170));
var computer = createSprite(350,200,100,100);
computer.scale = 3;
computer.setAnimation("paddle2");
fill("white");

// var yeet = createSprite(randomNumber(100,300),randomNumber(100,300),100,100);
// yeet.scale=0.3;
// yeet.setAnimation("chicken_1");
var score = 0;
var state = "";
// createEdgeSprites();
// player.setSpeedAndDirection(5,randomNumber(0,359));
// var hi = createSprite(randomNumber(100,300),randomNumber(100,300),100,100);
// hi.scale=0.3;
// hi.setAnimation("chicken_1");
var yeet="";
// createEdgeSprites();
// player.setSpeedAndDirection(5,randomNumber(0,359));
// hi.setSpeedAndDirection(5,randomNumber(0,359));
// yeet.setSpeedAndDirection(5,randomNumber(0,359));
createEdgeSprites();
ball.bounciness = 1.1;
// function draw(){
//   background("white");
//   if (keyDown("left")){
//   player.x = player.x -5;  
  
//   } 
//   if (keyDown ("space")){
//     playSpeech("Hello, You have discovered a secret easter egg! HOoray","male","English (UK)");
//   }
//   if (keyDown("right")){
//   player.x = player.x +5;  
  
//   }
//   if (keyDown("up")){
//   player.y = player.y -5;  
  
//   }
//   if (keyDown("down")){
//   player.y = player.y +5;  
  
//   } 

//   if (player.isTouching(edges)){
//     playSound("assets/category_retro/retro_game_unlock_3.mp3");
//     background(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
// player.debug = true;
// computer.debug = true;
// ball.debug = true;
function draw(){
    if (keyDown("up")){
  player.y = player.y -5;  
  
  }
  if (keyDown("down")){
  player.y = player.y +5;  
  
  }
  
  if (ball.y > computer.y){
    computer.y = computer.y + 5;
  }
  if (ball.y < computer.y){
    computer.y = computer.y - 5;
  }
  if (ball.isTouching(player)||ball.isTouching(computer)){
    if(ball.isTouching(player)){
      ball.bounceOff(player);
      playSound("assets/category_retro/retro_game_ui_select_23.mp3");
      score += 1;
    }
    else{
      ball.bounceOff(computer);
      playSound("assets/category_retro/retro_game_ui_select_23.mp3");
      score += 1;
    }
    
  }
  if (ball.isTouching(leftEdge)){
    
    state = "lose";
    yeet="end";
    
  }if (ball.isTouching(rightEdge)){
    
    state = "win";
    yeet="end";
    
  }
  if (ball.isTouching(topEdge)){
    ball.bounceOff(topEdge);
          playSound("assets/category_retro/retro_game_ui_select_23.mp3");
          score += 1;
  }
  if (ball.isTouching(bottomEdge)){
    ball.bounceOff(bottomEdge);
          playSound("assets/category_retro/retro_game_ui_select_23.mp3");
          score += 1;
  }
  
  if (state == "win"){
    background("black");
    background("black");
    
    textFont("monospace");
    fill("white");
    textAlign(CENTER,CENTER);
    text("You win", 200, 200);
  }
  else if (state == "lose"){
    background("black");

    textFont("monospace");
    textAlign(CENTER,CENTER);
    fill("white");
    text("You lose", 200, 200);
  }
  else if (state== ""){
    background("black");
    text(score,350,50);
  }
  if (yeet != "end"){
    drawSprites();
  }
    
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
