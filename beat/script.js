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
// let kick = $( `.kick input:nth-child(${step + 2})` );
// kick.css("background","rgba(0,0,0,0.1)");
// let snare = $( `.snare input:nth-child(${step + 2})` );
// snare.css("background","rgba(0,0,0,0.1)");
// let hihat = $( `.hihat input:nth-child(${step + 2})` );
// hihat.css("background","rgba(0,0,0,0.1)");
// let shaker = $( `.shaker input:nth-child(${step + 2})` );
// shaker.css("background","rgba(0,0,0,0.1)");
// shakerInputs.css("background","black")

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



