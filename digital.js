let timerDisplay = document.getElementById('timer-display');
let startBut = document.getElementById('startBtn');
let stopBut = document.getElementById('stopBtn');
let resetBut = document.getElementById('resetBtn');

let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let timer = null;




function startButton() {
    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(timerON, 10);
}

function pauseButton() {
    clearInterval(timer);
}

function resetButton() {
    clearInterval(timer);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    msec = sec = min = hour = 0;
}

function timerON() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min == 60){
        min = 0;
        hour++;
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    timerDisplay.innerHTML = `${hourString} : ${minString} : ${secString} : ${msecString}`;
}