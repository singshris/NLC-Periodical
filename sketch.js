let astro;
let logo = ["A", "S", "T", "R"];

function preload(){
    astro = loadJSON("data.json");
}


function setup(){
createCanvas(1200,800);
angleMode(DEGREES);
}


function draw(){
background(0);
fill(255);
textSize(100);

for(let i=0; i<astro.stars.length; i++){
    push();
    translate(astro.stars[i].latitude, astro.stars[i].longitude);
    rotate(astro.stars[i].rotation);
    text(logo[i], 0, 0);
    pop()
    strokeWeight(1);
    stroke(255);
    line(astro.stars[i].latitude, astro.stars[i].longitude,astro.stars[i+1].latitude, astro.stars[i+1].longitude)
}


text("S", 200, height/2);
text("T", 300, height/2);
text("R", 400, height/2);
text("O", 500, height/2);
text("N", 600, height/2);
text("O", 700, height/2);
text("M", 800, height/2);
text("Y", 900, height/2);


}