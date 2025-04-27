var timer = 30;
var score = 0;
var hitrn = 0;

// Score increase function
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Get new hit value
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Create bubbles
function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 180; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

// Run timer
function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER <br><br> your Final score is : ${score} <br> <button id="resetBtn">Restart</button> </h1>
            `;

            // Add event listener to the reset button
            document.querySelector("#resetBtn").addEventListener("click", function () {
                resetGame();
            });
        }
    }, 1000);
}

// Reset function
function resetGame() {
    timer = 30;
    score = 0;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    makebubble();
    getNewHit();
    runTimer();
}

// Click event listener
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makebubble();
        getNewHit();
    }
});

// Initial function calls
runTimer();
makebubble();
getNewHit();
