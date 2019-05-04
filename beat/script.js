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
    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    if (hihatInputs.checked) {
      hihat.start();
    }
    if (shakerInputs.checked) {
      shaker.start();
    }
    index++;
  }
}

sequencer();



