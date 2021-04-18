let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //context renderiza o tipo de desenho, no caso 2d//
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen"; //estilo do contexto, o fundo
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha onde acontece o jogo. 4 parametros: x e y, altura e larfgura//
                            //16 quadradinhos, máx de 32//
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
               //x e y tamanho da box//

    }

}

criarBG();
criarCobrinha();