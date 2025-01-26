var a = document.getElementById('Cvoption');
var display = 0;

function Cvoption() {
    if (display == 0) {
        a.style.display = "block";
        display=1;
    }
    else{
        a.style.display = "none"
        display=0;
    }
}
