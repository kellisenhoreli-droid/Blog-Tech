// Seleciona todos os elementos <button> da página e os guarda na constante 'botoes' como uma lista
const botoes = document.querySelectorAll('button');

// Passa por cada botão da lista (um por um) para aplicar as regras abaixo
botoes.forEach(function (botao) {

    // Cria uma variável interna para controlar se o BOTÃO ATUAL foi clicado ou não (começa como falso)
    let curtiu = false;

    // Adiciona um "escutador" que espera o clique especificamente neste botão
    botao.addEventListener('click', function() {

        // Define a função que roda toda vez que este botão específico recebe um clique
        function botaoClicado() {
            console.log("botão clicado")
        }

        // Procura no botão uma tag <span> e armazena o número de curtidas neste botão
        let texto = botao.querySelector('span');

        // Se o usuário ainda não deu o primeiro clique neste botão (curtiu é igual a false)
        if (curtiu === false) {
            // Incrementa +1 no número atual do contador
            curtiu = texto.textContent;
            // Soma +1 ao número atual do contador
            curtiu += 1;
        }

        // Caso o usuário clique novamente (ou seja, curtiu já era true)
        else {
            texto.textContent--;
            curtiu = false;
        }
    });
});
