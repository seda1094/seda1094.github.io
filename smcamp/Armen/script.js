 const canvas = document.getElementById("canvas");
 const ctx =canvas.getContext("2d");

 var img = new Image();
 img.crossOrigin = "anonymous";
 img.onload = function (){
 canvas.width = img.width;
 canvas.height = img.height;
 ctx.drawImage(img, 0, 0, img.width, img.height, 0,0,canvas.width, canvas.height);
    originalImageData = ctx.canvas.toDataURL();
 }
  img.src ='007.png';
  

 function addBrightness() {
    Caman("#canvas", img, function(){
        this.brightness(5).render();
    });
 }
 function rmBrightness(){
    Caman("#canvas",img, function (){
       this.brightness(-5).render();
 });
 }
 function addContrast(){
    Caman("#canvas",img, function (){
    this.contrast(1).render();
    });
 }
 function removeContrast(){
    Caman("#canvas",img, function (){
   this.contrast(-1).render();
    });
 }
 function addSaturation(){
    Caman("#canvas",img, function (){
    this.saturation(10).render();
    });
 }
 function rmSaturation(){
    Caman("#canvas",img, function (){
   this.saturation(-10).render();
    });
 }
 function addVibrance(){
    Caman("#canvas",img, function (){
    this.vibrance(10).render();
    });
 }
 function rmVibrance(){
    Caman("#canvas",img, function (){
   this.vibrance(-10).render();
    });
 }
 function addExposure(){
    Caman("#canvas",img, function (){
    this.exposure(10).render();
    });
 }
 function rmExposure(){
    Caman("#canvas",img, function (){
   this.exposure(-10).render();
    });
}
 function download(){
    Caman("#canvas",img, function (){
    this.save('png');
    });
 }
 function rmFilters(){
    Caman("#canvas",img, function (){
    this.revert();
    });
 }
 function addVintage() {
    Caman("#canvas", img, function () {
      this.vintage().render();
    });
  }

  function addSinCity() {
    Caman("#canvas", img, function () {
      this.sinCity().render();
    });
  }
  function addNostalgia() {
    Caman("#canvas", img, function () {
      this.nostalgia().render();
    });
  }
  function addGlowingsun() {
    Caman("#canvas", img, function () {
      this.glowingSun().render();
    });
  }

    