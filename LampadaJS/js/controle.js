/**
* JS - Lâmpada
* @author Igor Pegoraro Armelin
*/

function on(){
    document.getElementById("lamp").src = "imagens/on.jpg";
}

function off(){
    document.getElementById("lamp").src = "imagens/off.jpg";
}

function piscar(){
    var intervalo = 0;
    var contador = 0;

    while(contador < 20){
        intervalo += 200;
        setTimeout("document.getElementById('lamp').src = 'imagens/on.jpg';", intervalo);
        intervalo += 200;
        setTimeout("document.getElementById('lamp').src = 'imagens/off.jpg';", intervalo);
        contador++;
    }
}