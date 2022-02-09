/*
Pacman
La idea principal
 de nuestro personaje principal 
 es recorreor un laberinto mostrando en pantalla
  lo cual debemos consumir los puntitos que se encuentran alrededor del mapa,
   he irnos cuidando de los enemigos que se encuentran dianbulando por todo el mapa,
   y si tenemos la mala suerte de que nos agarren perdemos una vida(tienes 3 vidas)
*/
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,pacman,p12,p13,p14,p15;
var pacmanimg;
function preload(){
    pacmanimg = loadImage("PacMan.png")

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    p1=createSprite(820,60,20,200);
    p2=createSprite(270,190,20,200);
    p3=createSprite(120,40,20,200);
    p4=createSprite(470,90,20,200);
    p5=createSprite(1000,180,20,200);
    p6=createSprite(1300,180,20,200);
    p7=createSprite(159,400,20,200);
    p8=createSprite(1100,400,20,200);
    p9=createSprite(1550,200,20,200);
    p10=createSprite(800,400,20,200);
    p11=createSprite(350,400,20,200);
    pacman=createSprite(700,400,80,80);
    pacman.addImage(pacmanimg);
    pacman.scale = 0.2;
    p12=createSprite(1510,80,20,200);
    p13=createSprite(3000,503,20,200);
    p14=createSprite(4240,420,20,200);
    p15=createSprite(4230,480,20,200);


}

function draw(){
    background("black"); drawSprites();
}