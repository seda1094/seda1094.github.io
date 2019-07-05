const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var img = new Image();
img.crossOrigin = "anonymous";
img.onload = function () {
    img.width = 400;
    img.height = 400;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
         originalImageData = ctx.canvas.toDataURL();

}

    img.src = 'https://pbs.twimg.com/profile_images/793262536653234176/uZu7L6nI.jpg';

    function brightnessUp() {
        Caman("#canvas", img, function () {
            this.brightness(5).render();
        });
    }

    function brightnessDown() {
        Caman("#canvas", img, function () {
            this.brightness(-5).render();
        });
    }

    function sharpnessUp() {
        Caman("#canvas", img, function () {
            this.sharpen(10).render();
        });
    }

    function sharpnessDown() {
        Caman("#canvas", img, function () {
            this.sharpen(-10).render();
        });
    }

    function saturationUp() {
        Caman("#canvas", img, function () {
            this.saturation(5).render();
        });
    }

    function saturationDown() {
        Caman("#canvas", img, function () {
            this.saturation(-5).render();
        });
    }

    function hueUp() {
        Caman("#canvas", img, function () {
            this.hue(5).render();
        });
    }

    function hueDown() {
        Caman("#canvas", img, function () {
            this.hue(-5).render();
        });
    }

    function sepiaUp() {
        Caman("#canvas", img, function () {
            this.sepia(15).render();
        });
    }

    function sepiaDown() {
        Caman("#canvas", img, function () {
            this.sepia(-15).render();
        });
    }





    function addVintage() {
        Caman("#canvas", img, function () {
          this.vintage().render();
        });
      }
      function addLomo() {
        Caman("#canvas", img, function () {
          this.radialBlur().render();
        });
      }

      function nostalgia() {
        Caman("#canvas", img, function () {
          this.nostalgia().render();
        });
      }









    function download() {
        Caman('#canvas', function () {
          this.save('png');
        });
      }
      function rmFilters() {
        Caman("#canvas", img, function () {
          this.revert();
        });
      }