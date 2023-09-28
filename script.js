//Key click
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = [],
  audio = new Audio("tunes/a.wav");

const playNote = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playNote(key.dataset.key));
  console.log(key.dataset.key);
});

//Keyboard click
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playNote(e.key);
};

document.addEventListener("keydown", pressedKey);

//Volume slider
const volumeSlider = document.querySelector(".volume-slider input");
const handleVolume = (e) => {
  audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);

//Keys checkbox
const keysCheckbox = document.querySelector(".keys-checkbox input");
const displayKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
keysCheckbox.addEventListener("click", displayKeys);
