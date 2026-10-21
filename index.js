
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 0;

function lap() {
    if (!isRunning) {
        return;
    }

    lapCount++;

    const lapTime = display.textContent;
    const lapItem = document.createElement("li");

    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;

    document.getElementById("lapList").prepend(lapItem);
}

function start() {

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
   clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00";
    lapCount = 0;
    document.getElementById("lapList").innerHTML = "";
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");


    display.textContent = `${minutes}:${seconds}:${miliseconds}`;
}