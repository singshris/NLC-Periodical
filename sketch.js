let astro;
let logo = ["A", "S", "T", "R", "O", "N", "O", "M", "Y"];



function setup(){
createCanvas(1200,800);
angleMode(DEGREES);

loadJSON("http://api.open-notify.org/iss-now.json", gotData);

}


function gotData(data){
    astro = data;
    console.log(astro);
}

function draw(){
background(0);
fill(255);
textSize(100);

if(astro){
    let latitude = Math.round(Math.abs(astro.iss_position.latitude));
    let longitude = Math.round(Math.abs(astro.iss_position.longitude));
    // text(astro.message, 200,200);
    // text(latitude + " + " + longitude, 300,300 );
    for(let i=0; i<logo.length; i++){
        push();
        translate(latitude, longitude);
        // rotate((latitude+longitude)/10+noise(2));
        text(logo[i], 0, 0);
        pop()
        strokeWeight(1);
        stroke(255);
        // line(latitude, longitude);
        latitude=latitude+120;
        longitude=longitude+20;
    }
}


}


//9856edcd-6dbd-4fea-98a1-6d48cabaf291 application ID
//Application secret 
//007a258d38c6c658ad221eeaa671c063a2b3e0a4f21c955b2f692454323944780089919d92a71ffbc5acfb7e5afa52dfee27155958aa7eda2efb3ed054e5bed78909cbb4985e4ae1b7417bb9bf4b44b04b2988c80ed46ebedf3e586b61acd942fc1bd70e4161907f43010133b4baf28b
//007a258d38c6c658ad221eeaa671c063a2b3e0a4f21c955b2f692454323944780089919d92a71ffbc5acfb7e5afa52dfee27155958aa7eda2efb3ed054e5bed78909cbb4985e4ae1b7417bb9bf4b44b04b2988c80ed46ebedf3e586b61acd942fc1bd70e4161907f43010133b4baf28b