var leftShip;
var rightShip;
var allDebris = [];

const NUM_DEBRIS = 30;

function setup() {
    createCanvas(400,400);
    leftShip = new Ship(width*0.33);
    rightShip = new Ship(width*0.66);
}

function draw() {
    background(0);
    leftShip.update();
    rightShip.update();
    leftShip.display();
    rightShip.display();
}