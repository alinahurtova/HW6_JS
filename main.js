var timeBlock = document.getElementById('clock');
var format = true;

function time() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var fullTime = h + ':' + m + ':' + s;
    var shortTime = h + ':' + m;

    if (format) {
        timeBlock.innerHTML = fullTime;
    } else {
        timeBlock.innerHTML = shortTime;
    }
}

setInterval(time, 1000);

function toggle() {
    format = !format;
}

clock.addEventListener("click", toggle);

