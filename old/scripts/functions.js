
//getting tools settings with events
$('#color').on('change', function () {
  $('#choosen-color').text($(this).val());
  curColor = $(this).val();
  // alert(jQuery(this).val());
});

$('#brushSize').on('change', function () {
  curSize = $(this).val();
  // alert(jQuery(this).val());
});

$('#brushOpacity').on('change', function () {
  alpha = $(this).val();
  // alert(jQuery(this).val());
});

$(".option").click(
  function (event) {
    $(this).addClass("active").siblings().removeClass("active");
    brush = $(this).text();
    // alert($(this).text());
  }
);
$("#imagesBlock").click(function(){
  $("p").hide();
});

  $('#start').on('click', function () {
    hidden() 
    show()
  // curSize = $(this).val();
  // alert(jQuery(this).val());
});

function hidden() {
  $("#buttonsCont").fadeOut();
  // $(".start").remove();
}

function show() {
  $("#imagesBlock").delay(500).show();
  // $(".start").remove();
}

document.getElementById('getCode').addEventListener('click', function () {
  clearStorage();
  codeGen();
  hideStartButton();
  textCodeWRTT();
});
let input = document.getElementById('insertCode');


input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13)
    if (chooseImage()) {
      codeAllSec();
      hideStartButton();
      textCodeWRTT();

    }

});

function codeAllSec() {
  let code = document.getElementById('insertCode').value;
        checkCode(code)
}


function checkCode(num) {
  if (num == localStorage.codeNum) {
    generateStorageImg()
    alert("yessss")
  }
  else
  {
    alert("wrong code");
    window.location = 'chrome://restart';
    codeGen();
  }
}

function generateStorageImg() {
  for (let i = 0; i < localStorage.length - 1; i++) {
    // alert(i)

    var name = "layout_" + generateCount;
    $(".layout").append("<img width='200' height='100' class = 'myClass' id='" + name + "'></canvas>");
    $(".layout").append("<h1 class='layoutNumber' onclick='getLayoutId(this)' >" + name + "</h1>");

    // Put the object into storage

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(name);

    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

    document.getElementById(name).src = JSON.parse(retrievedObject)[name];
    generateCount++;
  }

}

$('.chooseImage').on('click', function () {
  alert("j")
  src = $(this).attr('src');
  // alert(src)
  localStorage.sc = src;
  outlineImage.src = localStorage.sc;
  alert(src)
  alpha = 1;
  draft.style.opacity = alpha;                        // CSS alpha for draft                       
  mctx.globalAlpha = alpha;
  // ctx.clearRect(0, 0, w, h)  
  mctx.clearRect(0, 0, w, h)

  // ctx.drawImage(outlineImage, imageXcoord, imageYcoord, imageWight, imageHeight); 
  mctx.drawImage(outlineImage, imageXcoord, imageYcoord, imageWight, imageHeight);
  alpha = 0.4;

  // alert(jQuery(this).val());
});

function zoomin() {
  scale = 2.1
  isZoom = true;
  zoomPoint++;
  let draftWidth = draft.clientWidth;
  let mainWidth = main.clientWidth;
  let draftHeight = draft.clientHeight;
  let mainHeight = main.clientHeight;
  // alert(draftWidth);
  // alert(draftHeight);
  if (zoomPoint >= 2) {
    zoomPoint = 1;
    return false;
  }
  else {
    draft.style.width = (draftWidth * scale) + "px";
    draft.style.height = (draftHeight * scale) + "px";

    main.style.width = (mainWidth * scale) + "px";
    main.style.height = (mainHeight * scale) + "px";
  }
}

function zoomout() {

  isZoom = false
  zoomPoint--;
  let draftWidth = draft.clientWidth;
  let mainWidth = main.clientWidth;
  let draftHeight = draft.clientHeight;
  let mainHeight = main.clientHeight;
  // alert(draftWidth);
  if (zoomPoint <= -1) {
    zoomPoint = 0;
    return false;

  }
  else {
    draft.style.width = (draftWidth / scale) + "px";
    draft.style.height = (draftHeight / scale) + "px";

    main.style.width = (mainWidth / scale) + "px";
    main.style.height = (mainHeight / scale) + "px";
  }
  scale = 1
}

/////////////////////////////////////////////////////////////////


function scrollFunc() {
  var elmnt = document.getElementById("scroll");
  xScroll = elmnt.scrollLeft;
  yScroll = elmnt.scrollTop;
  console.log(xScroll + " + " + yScroll)
}

function getXY(e) {
  // var r = draft.getBoundingClientRect();
  return { x: e.clientX, y: e.clientY }
}
function getImage() {
  var name = "layout_" + generateCount;
  $(".layout").append("<img width='200' height='100' class = 'myClass' id='" + name + "'></canvas>");
  $(".layout").append("<h1 class='layoutNumber' onclick='getLayoutId(this)' >" + name + "</h1>");
  generateCount++;
  ////new

  // let w = layoutCanvas.width;
  // let h = layoutCanvas.height;

  var canvas = document.getElementById(name);



















  var testObject = {};
  testObject[name] = main.toDataURL("image/png");

  // Put the object into storage
  localStorage.setItem(name, JSON.stringify(testObject));

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem(name);

  console.log('retrievedObject: ', JSON.parse(retrievedObject));



  // Canvas2Image.saveAsPNG(canvas);

  document.getElementById(name).src = JSON.parse(retrievedObject)[name];

























}
function removeImg() {
  localStorage.thisVersionLocalStorage = '';
}


function getLayoutId(obj) {
  // alert(w)
  // alert(h)
  ctx.clearRect(0, 0, w, h);
  clickedLayoutId = $(obj).text();

  // var changeCanvas = document.getElementById(clickedLayoutId);
  // var changectx = changeCanvas.getContext("2d");
  let a = $('#clickedLayoutId').prop('src');
  alert("src" + a)
  //++mctx.drawImage(document.getElementById('clickedLayoutId'), imageXcoord, imageYcoord, imageWight, imageHeight);                 // copy drawing to main
  //---------

  changeCanvas = new Image();

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem(clickedLayoutId);
  changeCanvas.src = JSON.parse(retrievedObject)[clickedLayoutId];


  mctx.clearRect(0, 0, w, h);
  mctx.globalAlpha = 1;
  mctx.drawImage(outlineImage, imageXcoord, imageYcoord, imageWight, imageHeight);                 // copy drawing to main
  // mctx.globalAlpha = alpha; 
  mctx.drawImage(changeCanvas, 0, 0, w, h);
  ctx.clearRect(0, 0, w, h);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function draw(prX, prY, ptX, ptY, color) {
  ctx.lineJoin = "round";
  ctx.strokeStyle = color;
  ctx.lineWidth = curSize;
  ctx.beginPath();                                  // new path
  ctx.moveTo(prX, prY);                       // start at prev. point
  // console.log("prev" + prev.x/1.1 + "-" + prev.y/1.1)
  ctx.lineTo(ptX, ptY);
  // console.log("point" + point.x + "-" + point.y)
  // ctx.globalAlpha = 1;  
  // ctx.drawImage(outlineImage, 0, 0, w, h);                 // copy drawing to main
  // ctx.globalAlpha = alpha;                      // line to new point
  ctx.stroke();
  // ctx.drawImage(outlineImage,0,0,w,h);                           // copy drawing to main
}

function stars(prX, prY, ptX, ptY, color, size) {
  var density = 50;
  ctx.lineJoin = ctx.lineCap = 'round';
  for (var i = density; i--;) {
    ctx.lineWidth = size;
    var radius = 20;
    var offsetX = getRandomInt(-radius, radius);
    var offsetY = getRandomInt(-radius, radius);
    ctx.fillStyle = color;
    ctx.fillRect(ptX + offsetX, ptY + offsetY, 1, 1);
  }
  // ctx.drawImage(outlineImage, 0, 0, w, h);                 // copy drawing to main
}


function blur(prX, prY, ptX, ptY, color, size) {
  ctx.lineJoin = ctx.lineCap = 'butt';
  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(prX, prY);
  ctx.lineTo(ptX, ptY);
  ctx.stroke();
  ctx.moveTo(prX - 5, prY - 5);
  ctx.lineTo(ptX - 5, ptY - 5);
  ctx.stroke();
  ctx.lineJoin = ctx.lineCap = 'round';
  // ctx.drawImage(outlineImage, 0, 0, w, h);                 // copy drawing to main

}
// function blur(prX,prY,ptX,ptY,color,size)
// {

// }

function undoFunc() {
  // alert("undo count"+undoCount)
  undoCount++;
  if (undoCount > 2) {
    alert("noooo")
    return;
  }
  // ctx.clearRect(0, 0, w, h);

  if (undo == 1) {
    name = "undo_3";
  }
  else {
    let c = (undo - 1)
    name = "undo_" + c;
  }
  // alert(undo)
  // alert(name)
  let w = main.width;
  let h = main.height;
  var changeCanvas = document.getElementById(name);
  var changectx = changeCanvas.getContext("2d");
  mctx.clearRect(0, 0, w, h);
  mctx.globalAlpha = 1;
  mctx.drawImage(outlineImage, imageXcoord, imageYcoord, imageWight, imageHeight);                 // copy drawing to main
  // // mctx.globalAlpha = alpha; 
  mctx.drawImage(changeCanvas, 0, 0, w, h);
  // ctx.clearRect(0, 0, w, h);
  undo--;
  if (undo == 0) {
    undo = 3
  }
}
// function hideStartButton() {
//   $(".start").delay(100).fadeOut();
//   $(".main").css('filter', 'blur(0px)');
//   // $(".start").remove();

// }
function chooseImage() {
  if (src != "") {
    return true;
  }

  else {
    alert("choose Imaage");
    return;
  }
}

//caman js ,,,,don't saving previuos data
// $('input[type=range]').change(applyFilters);

// function applyFilters() {
//   var hue = parseInt($('#hue').val());
//   var cntrst = parseInt($('#contrast').val());
//   var vibr = parseInt($('#vibrance').val());
//   var sep = parseInt($('#sepia').val());
//   var brightness = parseInt($('#brightness').val());


//   Caman('#main', function() {
//     this.revert(false);
//     this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).brightness(brightness).render();
//   });
// }





//Saving image

$('#savebtn').on('click', function (e) {
  Caman('#main', function () {
    this.save('png');
  });
});



function ckeckImageSizes(iw, ih, cw, ch) {
  if (iw > cw && ih > ch) {
    if (iw - cw > ih - ch) {
      let difSize = iw / cw;
      imageWight = iw / difSize;
      imageHeight = ih / difSize;
    }
    else if (ih - ch > iw - cw) {
      let difSize = ih / ch;
      imageWight = iw / difSize;
      imageHeight = ih / difSize;
    }
  }
}



function codeGen() {
  let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  for (var i = 0; i < 4; i++) {
    code += arr[Math.floor(Math.random() * arr.length)];
  }
   localStorage.codeNum = code;
  
}

function textCodeWRTT() {
    document.getElementById("codeText").innerHTML = code;
 
}

function clearStorage() {
  localStorage.clear();
}
