function sequencer() {
  const kick = new Tone.Player("./sounds/kick.wav").toMaster();
  const snare = new Tone.Player("./sounds/snare.wav").toMaster();
  const hihat = new Tone.Player("./sounds/hihat.wav").toMaster();
  const shaker = new Tone.Player("./sounds/shaker.wav").toMaster();


  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    let hihatInputs = document.querySelector(
      `.hihat input:nth-child(${step + 1})`
    );
    let shakerInputs = document.querySelector(
      `.shaker input:nth-child(${step + 1})`
    );
$('input').css({
   'width' : '10em',
   'height' : '10em'
});


// let kickS = $( `.kick input:nth-child(${step + 2})` );
// kickS.css({
//    'border' : '4px solid white',
// });
// let snareS = $( `.snare input:nth-child(${step + 2})` );
// snareS.css({
//    'border' : '4px solid white',
// });
// let hihatS = $( `.hihat input:nth-child(${step + 2})` );
// hihatS.css({
//    'border' : '4px solid white',
// });
// let shakerS = $( `.shaker input:nth-child(${step + 2})` );
// shakerS.css({
//    'border' : '4px solid white',
// });


    if (kickInputs.checked) {
      Tone.context.resume().then(() => {
        snare.start();
      })
    }
    if (snareInputs.checked) {
      Tone.context.resume().then(() => {
        hihat.start();
      })
    }
    if (hihatInputs.checked) {
      Tone.context.resume().then(() => {
        shaker.start();
      })
    }


    index++;
  }


}

sequencer();



