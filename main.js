let min = document.getElementById('minute')
let sec = document.getElementById('second')
let msec = document.getElementById('millisec')

let Start = document.getElementById('StartBtn')
let Reset = document.getElementById('ResetBtn')
let Lap = document.getElementById('LapBtn')
let LapDisplay = document.getElementsByClassName('lap-insert')[0]
let clearBtn = document.getElementsByClassName('clr-btn')[0]

let Play = true;
let count = 0;
let secc = 0;
let minc = 0;
let time;
let num = 0;

// Function to format time to display single digit time in two digit
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Start Button Function To start and stop the timer
Start.addEventListener('click',function(){
    if(Play){
        Start.innerHTML = 'Stop';
        StartTimer();
        Play = false; 
    }
    else{
        Start.innerHTML = 'Start';
        Play = true;
        clearInterval(time);
    }
})
 
// Reset Button Function to reset the time
Reset.addEventListener('click',function(){
    if(Play){
        min.innerHTML = '00';
        sec.innerHTML = '00';
        msec.innerHTML = '00';
        count = 0;
        secc = 0;
        minc = 0;
    }
    else{
        min.innerHTML = '00';
        sec.innerHTML = '00';
        msec.innerHTML = '00';
        count = 0;
        secc = 0;
        minc = 0;
        Start.innerHTML = 'Start';
        Play = true;
        clearInterval(time);
    }
})

// Lap Button function to record a lap
Lap.addEventListener('click',function(){
    let rcount = formatTime(count);
    let rsec = formatTime(secc);
    let rmin = formatTime(minc);
    num++;
    LapDisplay.innerHTML += `<li class="lap-item added-item">
          <span class="number"> #${num} </span>
          <span class="timestamp"> ${rmin} : ${rsec} : ${rcount} </span>
        </li>`
    clearBtn.style.display = 'inline';
})

// Clear Button function to clear the lap
clearBtn.addEventListener('click',function(){
    let element = document.getElementsByClassName('added-item');
    num = 0;
    while(element.length > 0){
        element[0].parentNode.removeChild(element[0]);
        clearBtn.style.display = 'none';
    }
})

// Stop Watch Timer function
function StartTimer(){
    time = setInterval(()=>{
        msec.innerHTML = `${formatTime(++count)}`;
        if(count == 100){
            sec.innerHTML = `${formatTime(++secc)}`;
            count = 0;
            if(secc == 60){
                min.innerHTML = `${formatTime(++minc)}`
                secc = 0;
            }
        }  
    },10)
}