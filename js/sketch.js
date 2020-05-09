
let url
let img
let c;
function setup() {
  c=createCanvas(600,600);
  c.id("p5canvas");
  c.parent("a-assets");
  url = "http://108.34.179.41/mjpg/video.mjpg";
  img = createImg(url);
  img.hide();
  //noLoop()
}

function draw() {
  background(0);
  let g = createGraphics(width, height);
  g.background(0);

  g.image(img, -400, -20, height/6*10, height+20)

  image(g, 0, 0);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(0,0,width,height);
  strokeWeight(5);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  g.remove();
}
