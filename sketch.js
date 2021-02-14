function preload(){
 court = loadImage("nbacourt.jpg");
 ball = loadImage("basketball.png");

}

var rightSelect = 0

var score = 0;
var score2 = 0;

var gameState = 0


function setup() {
  createCanvas(displayWidth, displayHeight);
  pg1 = createSprite(534, 475, 25, 50);
  pg1.shapeColor = "black";
  sg1 = createSprite(459, 413, 25, 50);
  sg1.shapeColor = "blue";
  sf1 = createSprite(212, 503, 25, 50);
  sf1.shapeColor = "green";
  pf1 = createSprite(386, 406, 25, 50);
  pf1.shapeColor = "purple";
  c1 = createSprite(284, 452, 25, 50);
  c1.shapeColor = "red";

  pg2 = createSprite(910, 500, 25, 50);
  sg2 = createSprite(1104, 467, 25, 50);
  sf2 = createSprite(1206, 491, 25, 50);
  pf2 = createSprite(1197, 616, 25, 50);
  c2 = createSprite(1181, 536, 25, 50);

  bball = createSprite(562,471,25,25);
  bball.addImage("ball",ball);
  bball.scale=0.05;

  courtboundary1 = createSprite(586, 617,1500,5);
  courtboundary1.rotation = 7;
  courtboundary1.visible=false;

  courtboundary2 = createSprite(1325,566,5,350);
  courtboundary2.rotation = -10
  courtboundary2.visible=false;

  courtboundary3 = createSprite(770,414,1100,5);
  courtboundary3.rotation = 5;
  courtboundary3.visible=false;
  
  courtboundary4 = createSprite(199,438,5,370);
  courtboundary4.rotation = 65
  courtboundary4.visible=false;

  hoop1 = createSprite(281,337,15,15);
  hoop1.visible=false;
  hoop1a = createSprite(283,340,15,15);
  hoop1a.visible=false;
 
  hoop2 = createSprite(1230,408,15,15);
  hoop2.visible=false;
  hoop2a = createSprite(1228,410,15,15);
  hoop2a.visible=false;







  

}

function draw() {
  background(court);  

  if (mousePressedOver(pg1)){
    rightSelect=1;
  }

  if (mousePressedOver(sg1)){
    rightSelect=2;
  }

  if (mousePressedOver(sf1)){
    rightSelect=3;
  }

  if (mousePressedOver(pf1)){
    rightSelect=4;
  }

  if (mousePressedOver(c1)){
    rightSelect=5;
  }

  pg2.x=pg1.x+50
  pg2.y=pg1.y-15

  sg2.x=sg1.x+90
  sg2.y=sg1.y-15

  sf2.x=sf1.x+130
  sf2.y=sf1.y-15

  pf2.x=pf1.x+175
  pf2.y=pf1.y-15

  c2.x=c1.x+200
  c2.y=c1.y-15

  text ("player1\n"+score,775,349);
  text ("player2\n"+score2,832,353);
  
  
  switch(rightSelect){
    case 1:
      if (keyDown(LEFT_ARROW)){
        pg1.x-=2;
      }
      if (keyDown(RIGHT_ARROW)){
        pg1.x+=2;
      }
      if (keyDown(DOWN_ARROW)){
        pg1.y+=2;
      }
      if (keyDown(UP_ARROW)){
        pg1.y-=2;
      }
      break;
    case 2:
      if (keyDown(LEFT_ARROW)){
        sg1.x-=2;
      }
      if (keyDown(RIGHT_ARROW)){
        sg1.x+=2;
      }
      if (keyDown(DOWN_ARROW)){
        sg1.y+=2;
      }
      if (keyDown(UP_ARROW)){
        sg1.y-=2;
      }
      break;
    case 3:
      if (keyDown(LEFT_ARROW)){
        sf1.x-=2;
      }
      if (keyDown(RIGHT_ARROW)){
        sf1.x+=2;
      }
      if (keyDown(DOWN_ARROW)){
        sf1.y+=2;
      }
      if (keyDown(UP_ARROW)){
        sf1.y-=2;
      }
      break;
    case 4:
      if (keyDown(LEFT_ARROW)){
        pf1.x-=2;
      }
      if (keyDown(RIGHT_ARROW)){
        pf1.x+=2;
      }
      if (keyDown(DOWN_ARROW)){
        pf1.y+=2;
      }
      if (keyDown(UP_ARROW)){
        pf1.y-=2;
      }
      break;
    case 5:
      if (keyDown(LEFT_ARROW)){
        c1.x-=2;
      }
      if (keyDown(RIGHT_ARROW)){
        c1.x+=2;
      }
      if (keyDown(DOWN_ARROW)){
        c1.y+=2;
      }
      if (keyDown(UP_ARROW)){
        c1.y-=2;
      }
      break;
      default:console.log("hello");
      break;

    }  

    if (keyDown("SPACE")&&gameState==0){
      bball.velocityX=-4
      bball.velocityY=6
      console.log("hello");
      gameState = 1;
    }
    

    switch (rightSelect){
      case 1:
        bball.x=pg1.x
        bball.y=pg1.y
        gameState = 0;
        break;
        case 2:
          bball.x=sg1.x
          bball.y=sg1.y
          gameState = 0;
          break;
          case 3:
            bball.x=sf1.x
            bball.y=sf1.y
            gameState = 0;
            break;
            case 4:
              bball.x=pf1.x
              bball.y=pf1.y
              gameState = 0;
              break;
              case 5:
                bball.x=c1.x
                bball.y=c1.y
                gameState = 0;
                break;
                default:console.log("hello");
                break;
    
    

    }

 /* if (mouseDown(pg1)){
   
  }*/

  if (bball.isTouching(hoop1)){
    bball.x=705;
    ball.y=496;
    score++;
  }

  if (bball.isTouching(hoop2)){
    bball.x=705;
    ball.y=496;
    score2++;
  }

  if (bball.isTouching(hoop1a)){
    bball.velocityX=bball.velocityX*-2
    bball.velocityY=bball.velocityY*-2

  }

  if (bball.isTouching(hoop2a)){
    bball.velocityX=bball.velocityX*-2
    bball.velocityY=bball.velocityY*-2
  }

  bball.bounceOff(courtboundary1);
  bball.bounceOff(courtboundary2);
  bball.bounceOff(courtboundary3);
  bball.bounceOff(courtboundary4);

  console.log(mouseX, mouseY)


  
  drawSprites();
}

function keyPressed(){
  console.log(keyCode);
}