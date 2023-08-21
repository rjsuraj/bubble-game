let score = 0;
let timer = 60;
let pbtm = document.querySelector('#pbtm');


function updateScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 112; i++) {
        let randNo = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randNo}</div>`;
    }
    pbtm.innerHTML = clutter;
}

function runTimer() {
    let timerKey = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else {
            clearInterval(timerKey);
            pbtm.removeEventListener('click',clickHandler);
            pbtm.innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}

function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = rn;
}

function clickHandler(e) {
    let hitVal = document.querySelector('#hitVal').textContent;
    let clickedVal = e.target.textContent;
    if (hitVal == clickedVal) {
        updateScore();
        getNewHit();
        makeBubble();
    }
}

pbtm.addEventListener('click',clickHandler)


makeBubble();
runTimer();
getNewHit();