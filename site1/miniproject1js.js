var originalImage = null;
var grayImage = null;
var redImage = null;
var surpriseImage = null;
var rainbowImage = null;
var windowImage = null;
var randomImage = null;

function upload() {
 var fileinput = document.getElementById("finput");
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  redImage = new SimpleImage(fileinput);
  surpriseImage = new SimpleImage(fileinput);
  rainbowImage = new SimpleImage(fileinput);
  windowImage = new SimpleImage(fileinput);
  randomImage = new SimpleImage(fileinput);

  originalImage.drawTo(canvas);
}

function Grayfilter() {
  if (imageIsLoaded(grayImage)) {
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function Redfilter() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function surprisefilter() {
  if (imageIsLoaded(surpriseImage)) {
    filterSurprise();
    surpriseImage.drawTo(canvas);
  }
}

function filterSurprise() {
  for (var pixel of surpriseImage.values()) {
  var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) /3;
  if (avg<182) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(1*avg);
  } else {
    pixel.setRed(2*avg-255);
    pixel.setGreen(2*avg-255);
    pixel.setBlue(255);
    }
  }
}

function Rainbowfilter() {
  var height = rainbowImage.getHeight();
    for (var pixel of rainbowImage.values()) {
      var y = pixel.getY();
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (y < height / 7) {
        //red
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(2 * avg - 255);
        }
        } else if (y < height * 2 / 7) {
        //orange
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2 * avg - 255);
        }
        } else if (y < height * 3 / 7) {
          //yellow
          if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
          } else {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2 * avg - 255);
          }
        }  else if (y < height * 4 / 7) {
            //green
            if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
          } else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2 * avg - 255);
            }
          } else if (y < height * 5 / 7) {
            //blue
            if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
          } else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(255);
          }
        } else if (y < height * 6 / 7) {
          //indigo
          if (avg < 128) {
            pixel.setRed(.8*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
          } else {
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(255);
          }
        } else {
          //violet
          if (avg < 128) {
            pixel.setRed(1.6*avg);
            pixel.setGreen(0);
            pixel.setBlue(1.6*avg);
          } else {
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(0.4*avg+153);
          }
        }
      }
      rainbowImage.drawTo(canvas)
}

function Resetfilter() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    //grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    surpriseImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
    randomImage = new SimpleImage(originalImage);
    windowImage = new SimpleImage(originalImage);
    }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
 }

function Wimdowfilter(){
  var w = windowImage.getWidth();
  var h = windowImage.getHeight();
  var output = new SimpleImage(w,h);

 for (var pixel of windowImage.values()) {
      // put a thick border around it
      var x = pixel.getX();
      var y = pixel.getY();
      var pout = output.getPixel(x,y);
      // calculate where bars go
      oneFourthX = Math.floor(w/4);
      oneHalfX = Math.floor(w/2);
      threeFourthsX = Math.floor(w/4 * 3)
      oneHalfy = Math.floor(h/2);

      if (pixel.getX()<15 || pixel.getX() > w-15 ||
          pixel.getY()<15 || pixel.getY() > h-15) {
          // RGB color below  is a yellow-gold color
          pout.setRed(227);
          pout.setGreen(212);
          pout.setBlue(116);
      }
      // add three thinner vertical bars for a window pane

      else {
        if (Math.abs(oneFourthX - pixel.getX())< 5 ||
            Math.abs(oneHalfX - pixel.getX())< 5  ||
            Math.abs(threeFourthsX - pixel.getX())< 5) {
            // add thinner vertical  bars for a window pane
            pout.setRed(227);
            pout.setGreen(212);
            pout.setBlue(116);
          }
     // add one thin horizontal bar
        else {
               if (Math.abs(oneHalfy - pixel.getY()) < 5) {
                    pout.setRed(227);
                    pout.setGreen(212);
                    pout.setBlue(116);
                    }
               else {
                   // just use the pixel from the original image
                   pout.setRed(pixel.getRed());
                   pout.setGreen(pixel.getGreen());
                   pout.setBlue(pixel.getBlue());
               }
        }
      }
    }
    output.drawTo(canvas);
}




function ensureInImage (coordinate, size) {
    // coordinate cannot be negative
    if (coordinate < 0) {
        return 0;
    }
    // coordinate must be in range [0 .. size-1]
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}

function getPixelNearby (randomImage, x, y, diameter) {
    var dx = Math.random() * diameter - diameter / 2;
    var dy = Math.random() * diameter - diameter / 2;
    var nx = ensureInImage(x + dx, randomImage.getWidth());
    var ny = ensureInImage(y + dy, randomImage.getHeight());
    return randomImage.getPixel(nx, ny);
}
function Randomfilter() {

var output = new SimpleImage(randomImage.getWidth(), randomImage.getHeight());

for (var pixel of randomImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
        var other = getPixelNearby(randomImage, x, y, 10);
        output.setPixel(x, y, other);
    }
    else {
        output.setPixel(x, y, pixel);
    }
  }
    output.drawTo(canvas);
}
