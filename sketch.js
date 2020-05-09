
let url;
let img;
let cnv;
function setup() {
  cnv=createCanvas(600,600);
  centerCanvas();
  url = "http://108.34.179.41/mjpg/video.mjpg";
  img = createImg(url);
  img.hide();
  //noLoop()
}

function draw() {
  var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

    document.getElementById("datetime").innerHTML =dateTime;
  background(0);
  let g = createGraphics(width, height);
  g.background(0);
  
  g.image(img, -400, -20, height/6*10, height+20);

  image(g, 0, 0);
  noFill();
  stroke(0);
  strokeWeight(8);
  rect(0,0,width,height);
  strokeWeight(4);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  g.remove();
}


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function windowResized() {
  centerCanvas();
}