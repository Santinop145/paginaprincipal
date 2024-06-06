let x = 1;
let y = 0;
function setup() {
  createCanvas(600, 600, P2D);
  background(255);
  rect(width/6,height/6,400,400);
  fill(0);
  for(let i = 0 ; i <= 8; i++){
    for(let j = i+1; j <= 8; j++){
      if((i + j) % 2 != 0){
        fill(255);
      }
      else if((j + i) % 2 == 0){
        fill(0);
      }
      rect(100+50*i, 50+50*j, 50, 50);
    }
  }
}

function draw() {

}
