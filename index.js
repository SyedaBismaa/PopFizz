var timer = 60;
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

        for (var i = 1; i <= 184; i++) {
            var rn = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble">${rn}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }

    // Run timer
    function runTimer() {
        var timeint = setInterval(function() {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerval").textContent = timer;
            } else {
                clearInterval(timeint);
                document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER</h1>";
            }
        }, 1000);
    }

    // Click event listener
    document.querySelector("#pbtm").addEventListener("click", function(dets) {
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