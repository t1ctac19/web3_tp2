import * as Tone from "tone.js";

const synth = new Tone.Synth().toDestination();

document.getElementById("barre_div2_03").addEventListener("click", async () => {
  await Tone.start();

  const now = Tone.now();
  synth.triggerAttackRelease("A2", "8n", now + 0.0);
  synth.triggerAttackRelease("C3", "8n", now + 0.25);
  synth.triggerAttackRelease("E2", "8n", now + 0.5);
  synth.triggerAttackRelease("G2", "8n", now + 0.75);
  synth.triggerAttackRelease("B2", "8n", now + 1.0);
  synth.triggerAttackRelease("D2", "8n", now + 1.25);
  synth.triggerAttackRelease("E2", "8n", now + 1.5);
  synth.triggerAttackRelease("A2", "8n", now + 1.75);
  synth.triggerAttackRelease("E2", "8n", now + 2.0);
});
