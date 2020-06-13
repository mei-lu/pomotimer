const timer = document.querySelector('.time-display');
const increaseButton = document.querySelector('#increase-btn');
const decreaseButton = document.querySelector('#decrease-btn');
const setTimerButton = document.querySelector('.start-btn');
const startButton = document.querySelector('.start-btn');

let timerRunning = false;
let timeSetting = 300;

//Increment Time
increaseButton.addEventListener('click', () => {
    if (timeSetting+300 <= 3600) {
        timeSetting += 300;
        timer.innerHTML = `${timeSetting/60}:00`;
        console.log(timeSetting);
    }
})

decreaseButton.addEventListener('click', () => {
    if (timeSetting-300 >= 300) {
        timeSetting -= 300;
        timer.innerHTML = `${timeSetting/60}:00`;
        console.log(timeSetting);
    }
})

//Set Time
startButton.addEventListener('click', () => {
    let prevTime = timeSetting;
    timerRunning = true;
    runTimer = setInterval(() => {
        if (timeSetting == 0) {
            timerRunning = false;
            window.alert('wow!');
            clearInterval(runTimer);
            timer.innerHTML = `${prevTime/60}:00`;
            timeSetting = prevTime;
        }
        if (timerRunning) {
            timeSetting -= 1;
            let minutes = Math.floor(timeSetting/60);
            let seconds = timeSetting - minutes * 60;
            seconds =  (seconds < 10) ? '0' + seconds : '' + seconds;
            console.log(seconds)
            timer.innerHTML = `${minutes}:${seconds}`;
        }
    }, 1000)
})