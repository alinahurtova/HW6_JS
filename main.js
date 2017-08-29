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

setInterval(time, 500);

function toggle() {
    format = !format;
}

clock.addEventListener("click", toggle);

// =======================================

function sum(x) {
    return function(y) {
        return x + y;
    }
}

var sum1 = sum (1);

console.log( sum1(2) );
console.log( sum(1)(2) ); // git

// =======================================

var a = 5; // Не было точки с запятой.

(function() {
    alert(a);
})();

