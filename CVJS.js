function pro() {
    var x = document.getElementById('bouton1');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.getElementById('button1').innerHTML = '-';
    } else {
        x.style.display = 'none';
        document.getElementById('button1').innerHTML = '+';
    }
}

function ecole() {
    var x = document.getElementById('bouton2');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.getElementById("button2").innerHTML= '-';

    } else {
        x.style.display = 'none';
        document.getElementById("button2").innerHTML= '+';
    }
}

function compet() {
    var x = document.getElementById('bouton3');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.getElementById("button3").innerHTML= '-';
    } else {
        x.style.display = 'none';
        document.getElementById("button3").innerHTML= '+';
    }
}


