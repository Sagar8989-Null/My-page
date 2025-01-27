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
var dark=0;

function theme()
{
        const root = document.documentElement;
        if (dark==0){
            root.style.setProperty('--color1', '#fd6f00');
            root.style.setProperty('--color2', '#1E1E1E');
            root.style.setProperty('--color3', 'white');
            dark=1;
        }
        else
        {
            root.style.setProperty('--color1', '#fd6f00');
            root.style.setProperty('--color2', 'white');
            root.style.setProperty('--color3', '#1E1E1E');
            dark=0;
        }
}