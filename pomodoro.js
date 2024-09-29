let longbreak = document.getElementById("longbreak");
let shortbreak = document.getElementById("shortbreak");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer");
let text = document.getElementById("text");
let enter = document.getElementById("enter");
let count = 0;
let id = null;

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

timer.innerHTML = formatTime(count);

const loadup = () => {
  if (count <= 0) {
    clearInterval(id);
    id = null;
    count = 0;
    timer.innerHTML = formatTime(count);
  } else {
    count -= 1;
    timer.innerHTML = formatTime(count);
  }
};

const startTimer = () => {
  if (!id && count > 0) {
    id = setInterval(loadup, 1000);
  }
};

const setTimer = (minutes) => {
  clearInterval(id);
  id = null;
  count = minutes * 60;
  timer.innerHTML = formatTime(count);
};

const resetTimer = () => {
  setTimer(0);
};

const setLongBreak = () => {
  setTimer(25);
};

const setShortBreak = () => {
  setTimer(10);
};

enter.addEventListener("click", () => {
  let inputTime = parseInt(text.value);
  if (!isNaN(inputTime) && inputTime > 0) {
    setTimer(inputTime);
    text.value = "";
  } else {
    alert("Please enter a valid number of minutes.");
  }
});

start.addEventListener("click", startTimer);

reset.addEventListener("click", resetTimer);

longbreak.addEventListener("click", setLongBreak);

shortbreak.addEventListener("click", setShortBreak);