
function upload() {
  var dimagenes= document.getElementById("imagenes");
  dimagenes.className = "blueback";
  var imgcanvas = document.getElementById("canvas");
  var fileinput = document.getElementById("finput");
  var ctx= imgcanvas.getContext("2d");
var image = new SimpleImage(fileinput);
 image.drawTo(imgcanvas);
  }
function Grayfilter() {
var image = new SimpleImage(fileinput);
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("canvas");
  image.drawTo(imgcanvas);
}
function Redfilter() {
  alert('When you press this button the image comes out with red filter');
  var dfilter= document.getElementById("filter");
  dfilter.className = "bluewhite1"
}
function Resetfilter() {
  alert('When you press this button the image will be restored to its original shape');
}
function surprisefilter() {
    alert('When you press this button the image comes out with surprise filter');
    var dfilter= document.getElementById("filter");
    dfilter.className = "bluewhite2"
}
