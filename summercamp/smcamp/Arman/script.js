const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var img = new Image();
img.crossOrigin = "anonymous";

img.onload = function (){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    originalImageData = ctx.canvas.toDataURL();
}
img.src = 'Reno.jpg';


function addBrightness(){
    Caman("#canvas", img, function(){
        this.brightness(5).render();
    });
}
function removeBrightness(){
    Caman("#canvas", img, function(){
        this.brightness(-5).render();
    });
}

function addContrast(){
    Caman("#canvas", img, function(){
        this.contrast(5).render();
    });
}
function removeContrast(){
    Caman("#canvas", img, function(){
        this.contrast(-5).render();
    });
}

function addSharpen(){
    Caman("#canvas", img, function(){
        this.sharpen(5).render();
    });
}
function removeSharpen(){
    Caman("#canvas", img, function(){
        this.sharpen(-5).render();
    });
}

function addSepia(){
    Caman("#canvas", img, function(){
        this.sepia(5).render();
    });
}
function removeSepia(){
    Caman("#canvas", img, function(){
        this.sepia(-5).render();
    });
}

function addSaturation(){
    Caman("#canvas", img, function(){
        this.saturation(5).render();
    });
}
function removeSaturation(){
    Caman("#canvas", img, function(){
        this.saturation(-5).render();
    });
}

function addExposure(){
    Caman("#canvas", img, function(){
        this.exposure(5).render();
    });
}
function removeExposure(){
    Caman("#canvas", img, function(){
        this.exposure(-5).render();
    });
}

function SinCity(){
    Caman("#canvas", img, function(){
        this.sinCity().render();
    })
}

function Nostalgia(){
    Caman("#canvas", img, function(){
        this.nostalgia().render();
    })
}

function Grungy(){
    Caman("#canvas", img, function(){
        this.grungy().render();
    })
}

function GlowingSun(){
    Caman("#canvas", img, function(){
        this.glowingSun().render();
    })
}

function Pinhole(){
    Caman("#canvas", img, function(){
        this.pinhole().render();
    })
}

function Revert(){
    Caman("#canvas", img, function(){
        this.revert().render();
    })
}