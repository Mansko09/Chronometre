let startTime = 0;
let elapsedBeforePause = 0;
let intervalID = null;
let isRunning = false;

function update_chrono() {
    const now = Date.now();
    const elapsed = now - startTime + elapsedBeforePause;

    const h = Math.floor(elapsed / 3600000);
    const m = Math.floor((elapsed % 3600000) / 60000);
    const s = Math.floor((elapsed % 60000) / 1000);
    const ms = elapsed % 1000;

    document.getElementById("affichage").textContent =
        `${h} h : ${m} min : ${s} s : ${ms} ms`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now();
        intervalID = setInterval(update_chrono, 50); 
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalID);
        elapsedBeforePause += Date.now() - startTime;
    }
}

function reset() {
    stop();
    elapsedBeforePause = 0;
    document.getElementById("affichage").textContent = "0 h : 0 min : 0 s : 0 ms";
}
