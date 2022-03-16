function Relogio(){

    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundo = data.getSeconds();

    var tempoTotal = zero( hora) + ':' +zero(minutos)+':'+zero(segundo);
    var tempo = window.document.getElementById('relogio');
    tempo.innerHTML = tempoTotal;


}
function zero(numero) {
if (numero < 10){
    numero = '0' + numero;
}
    return numero;

}

setInterval(Relogio, 500);
