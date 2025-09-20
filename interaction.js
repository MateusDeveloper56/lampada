var estadoAtual = 0;

function playLightOn() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";   // som mais "estalo"
  osc.frequency.setValueAtTime(800, ctx.currentTime);

  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.15);
}

function playLightOff() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sawtooth";  // clique mais "grave"
  osc.frequency.setValueAtTime(120, ctx.currentTime);

  gain.gain.setValueAtTime(0.4, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2);
}

document.querySelector('.botao').addEventListener('click', function() {
    switch(estadoAtual) {
        case 0:
            estadoAtual = 1;
            playLightOn();
            document.querySelector('.image').data = 'lamp_on.svg';
            break;
        case 1:
            estadoAtual = 0;
            playLightOff();
            document.querySelector('.image').data = 'lamp_off.svg';
            break;
    }
});


