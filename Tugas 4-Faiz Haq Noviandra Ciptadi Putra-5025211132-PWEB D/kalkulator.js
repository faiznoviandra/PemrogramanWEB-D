function clearScreen() {
    document.getElementById("hasil").value = "";
}
 
function display(value) {
    document.getElementById("hasil").value += value;
}
 
function calculate() {
    var x = document.getElementById("hasil").value;
    var y = eval(x);
    document.getElementById("hasil").value = y;
}
