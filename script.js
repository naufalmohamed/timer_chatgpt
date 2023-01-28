let timer = 0;
let interval;
let count = 0;
let timerContainer = document.querySelector("#timer");


let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimerBtn);

function startTimer() {
    interval = setInterval(() => {
      timer += 0.01;
      timerContainer.innerHTML = timer.toFixed(2);
      if (timer >= 4 && count === 0) {
        stopTimer();
        count++;
        timerContainer.classList.add("red");
        setTimeout(() => {
          timerContainer.classList.remove("red");
          resetTimer();
        }, 500);
      } else if (timer >= 7 && count === 1) {
        stopTimer();
        count++;
        timerContainer.classList.add("red");
        setTimeout(() => {
          timerContainer.classList.remove("red");
          resetTimer();
        }, 500);
      } else if (timer >= 8 && count === 2) {
        stopTimer();
        timerContainer.classList.add("red");
        setTimeout(() => {
          timerContainer.classList.remove("red");
          resetTimer();
          count = 0;
        }, 500);
      }
    }, 10);
  }

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  timer = 0;
  timerContainer.innerHTML = timer;
  startTimer();
}

function resetTimerBtn() {
    stopTimer();
    timer = 0;
    timerContainer.innerHTML = timer;
    count = 0;
    // startTimer();
  }


