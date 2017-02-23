


function upload() {
  var imgcanvas = document.getElementById("canvas");
  var file = document.getElementById("finput");
  var image = new SimpleImage(file);
  image.drawTo(imgcanvas);
}
