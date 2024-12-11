var mexer = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png",
];

var contador = 0;
var valor = 0;
var direcao = 1;
var limite = 300;
function andar(){
    var img = document.querySelector("#imagem");

    var indiceImagem = contador % 3;

    img.src = mexer[indiceImagem];
    img.style.left = valor + "px";
    valor = valor + 15 * direcao;
    contador = contador + 1 * direcao;

    if (direcao === 1 && valor >= limite) {
        clearInterval(intervalo);
    } else if (direcao === -1 && valor <= 0) {
        clearInterval(intervalo);
    }
}

var intervalo = setInterval(andar, 250);