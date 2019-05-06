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
      `.kick input:nth-child(${step + 2})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 2})`
    );
    let hihatInputs = document.querySelector(
      `.hihat input:nth-child(${step + 2})`
    );
    let shakerInputs = document.querySelector(
      `.shaker input:nth-child(${step + 2})`
    );
$('input').css({
   'width' : '10em',
   'height' : '10em'
});


let kickS = $( `.kick input:nth-child(${step + 2})` );
kickS.css({
   'width' : '11em',
   'height' : '11em'
});
let snareS = $( `.snare input:nth-child(${step + 2})` );
snareS.css({
   'width' : '11em',
   'height' : '11em'
});
let hihatS = $( `.hihat input:nth-child(${step + 2})` );
hihatS.css({
   'width' : '11em',
   'height' : '11em'
});
let shakerS = $( `.shaker input:nth-child(${step + 2})` );
shakerS.css({
   'width' : '11em',
   'height' : '11em'
});


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



