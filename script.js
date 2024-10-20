let display = document.querySelector('.timer');
let start = document.getElementById('start');
let st = document.getElementById('stop');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');
let lapDisplay = document.querySelector('.lap-times');

let msec = 0;
let sec = 0;
let min = 0;

let isRunning = false;

let timerID = null;


start.addEventListener('click', function() {
    if (!isRunning) 
    { 
        timerID = setInterval(startT, 10);
        start.textContent = 'STOP';  
        isRunning = true; 
        start.classList.remove('op1', 'op4');
        start.classList.add('op5');  
    } 
    else 
    {
        clearInterval(timerID);
        start.textContent = 'RESUME';  
        isRunning = false;
        start.classList.remove('op5');
        start.classList.add('op4');
    }
});

let i = 0;
lap.addEventListener('click', function() {
    let lapDisplay = document.querySelector('.lap-times');
    let lapTime = `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec} : ${msec < 10 ? '0' + msec : msec}`;
    let lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${i + 1} : ${lapTime}`;
    lapDisplay.appendChild(lapElement);
    i++;
});


reset.addEventListener('click', function(){
    clearInterval(timerID);
    timerID = null;
    msec = 0;
    sec = 0;
    min = 0;
    i = 0;
    update();
    isRunning = false;
    lapDisplay.innerHTML = '';
    start.textContent = 'START';

    start.classList.remove('op5', 'op4');
    start.classList.add('op1');
});
function startT()
{
    msec++;
    if(msec == 100)
    {
        msec = 0;
        sec++;
        if(sec == 60)
        {
            sec = 0;
            min++;
        }
    }

    update();
}

function update()
{
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    display.innerHTML = `${minString} : ${secString} : ${msecString}`;
}