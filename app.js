let decrease = document.getElementById('dec');
let count= document.getElementById('count');
let increase = document.getElementById('inc');
let reset = document.getElementById('reset');
let mul = document.getElementById('mul');

value = 0;

increase.onclick = function() {
    value++;
    count.textContent = value;
}
decrease.onclick = function() {
    value--;
    count.textContent = value;
    if (value < 0) {
        count.textContent = "0";
        value = 0;
    }
}
reset.onclick = function() {
    value = 0;
    count.textContent = value;
}
mul.onclick = function() {
    value *=  value;
    count.textContent = value;
}

