const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const botaoNumero = document.querySelectorAll('.numero');
const botaoOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorAtual);

botaoNumero.forEach(botao => {
    botao.addEventListener('click', () => display.adicionarNumero(botao.innerHTML));
});

botaoOperadores.forEach(botao => {
    botao.addEventListener('click', () => display.calcular(botao.value)); 
})
 
