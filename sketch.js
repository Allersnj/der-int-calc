var xaxis = [];
var color1;
var color2;


function setup() {
    canvas = createCanvas(401, 401);
    for (i = 0; i < 401; i++) {
        xaxis[i] = -200 + i;
    }
    color1 = color(255, 0, 0);
    color2 = color(0);
} 

function draw() {
    strokeWeight(1);
    stroke(0);
    for (i = 0; i < 401; i++) {
        set(i, 201, color2);
        set(201, i, color2);
        set((xaxis[i] * 20) + 201, (-(xaxis[i] * xaxis[i]) * 10) + 201, color1);
    }
    
    updatePixels();
}
