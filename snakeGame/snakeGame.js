const canvas= document.getElementById("snake");
const ctx= canvas.getContext("2d");

let unit= 32;

const backgroundImage= new Image();
backgroundImage.src="img/backGround.png";

const foodImage= new Image();
foodImage.src="img/food.png";

const snake=[];
snake[0]={
    x:10*unit,
    y:8*unit
}

let apple={
    x: Math.floor(Math.random()*17+1)*unit,
    y: Math.floor(Math.random()*15+3)*unit
}

let score=0;

var directionIs;
document.addEventListener("keydown",snakedr);
function snakedr(dr){
    if(dr.keyCode==37){
        directionIs="LEFT";
    }else if(dr.keyCode==38){
        directionIs="UP";
    }else if(dr.keyCode==39){
        directionIs="RIGHT";
    }else if(dr.keyCode==40){
        directionIs="DOWN";
    }
}


function display(){
    ctx.drawImage(backgroundImage,0,0);

    for(i=0; i<snake.length; i++){
      ctx.fillStyle= (i==0)? "lime": "black";
      ctx.fillRect(snake[i].x, snake[i].y, unit,unit);
    }

    ctx.drawImage(foodImage, apple.x, apple.y);

    ctx.fillStyle= "white";
    ctx.font="60px Arial";
    ctx.fillText(score, 2*unit, 2*unit);

    let oldSnake1=snake[0].x;
    let oldSnake2= snake[0].y;

    if(directionIs=="LEFT") oldSnake1 -= unit;
    if (directionIs=="UP") oldSnake2 -= unit;
    if (directionIs=="RIGHT") oldSnake1 +=unit;
    if (directionIs=="DOWN") oldSnake2 +=unit;

    if(oldSnake1==apple.x && oldSnake2==apple.y){
        score++;
        apple={
            x:Math.floor(Math.random()*17+1)*unit,
            y: Math.floor(Math.random()*15+3)*unit
        }}else{
            snake.pop();
        
    }

    if(oldSnake1<unit || oldSnake1>17*unit || oldSnake2<3*unit || oldSnake2>17*unit){
        clearInterval(snakeGame);
    }

    let nHead={
        x:oldSnake1,
        y:oldSnake2
    }
    snake.unshift(nHead);
}




let snakeGame= setInterval(display,100);