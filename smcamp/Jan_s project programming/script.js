var path;
var brightness = 0;
var img = new Image();

$(".editor").hide()
$(".addButton").click(() => {
    $(".editor").fadeIn()
    path = $(".addField").val()
    $(".ogImg").html("<img height='700px'  class='ogImgpic' src='" + path + "' >")
    var imgwidth = document.querySelector(".ogImgpic").width
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d")

    img.crossOrigin = "anonymous"
    img.onload = () => {

        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
        originalImageData = ctx.canvas.toDataURL()

    }
    
    img.src = path

})


function removebrightness() {

    Caman("#canvas", img, function(){
        this.brightness(-5).render();
    })
}
function addBrightness() {

    Caman("#canvas", img, function(){
        this.brightness(5).render();
    })
}

function addSaturation() {

    Caman("#canvas", img, function() {
        this.saturation(10).render();
      })}
function removeSaturation() {

        Caman("#canvas", img, function() {
            this.saturation(-10).render();
          })}

function removeContrast() {

Caman("#canvas", img, function() {
    this.contrast(-10).render();
    })}

function addContrast() {

    Caman("#canvas", img, function() {
        this.contrast(10).render();
    })}

function removeVibrance() {

    Caman("#canvas", img, function() {
        this.hue(-10).render();
        })}

function addVibrance() {

    Caman("#canvas", img, function() {
        this.hue(10).render();
    })}

function SinCity() {

    Caman("#canvas", img, function() {
        this.sinCity().render();
    })}

function Remove() {

    Caman("#canvas", img, function() {
        this.revert();
    })}

function nostalgia() {

    Caman("#canvas", img, function() {
        this.glowingSun().render();
    })}

function vintage() {

    Caman("#canvas", img, function() {
        this.vintage().render();
    })}

function lomo() {

    Caman("#canvas", img, function() {
        this.lomo().render();
    })}

function download() {

    Caman("#canvas", img, function() {
        this.save()
    })}


