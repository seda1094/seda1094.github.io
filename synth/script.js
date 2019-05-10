
//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()
let instrumentArea = $('.inst');

let height = instrumentArea.height();
let count = 45
let lineHeight = height/count;

for (let index = 0; index < count; index++) {
  instrumentArea.append('<hr>');
}
let line = $('hr');
line.css({
  'height' : (lineHeight-1)+"px",
  'margin' : 1+"px"
});
let freqArr = [261.62,293.66,311.12,329.62,349.22,369.99,391.99,440,466.16,493.88];

$( "hr" ).mouseover(function() {
       Tone.context.resume().then(() => {
        //play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease(freqArr[Math.floor(Math.random()*freqArr.length)], '64n');
// $("hr").css("background-image", "linear-gradient(to right, #6a11cb 0%, #2575fc 100%")

// $(this).css("background","#fff");
      })
});


  

// var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);
