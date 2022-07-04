class Display{
    constructor(displayValorAnterior, displayValorAtual) {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacao = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.sinais = {
            somar: '+',
            subtrair: '-',
            multiplicar: 'x',
            dividir: '/',
        }
    }

    apagar() {
        this.valorAtual = this.valorAtual.toString().slice(0, -1);
        this.imprimirValores();
    }

    limpar() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperacao = undefined;
        this.imprimirValores();
    }

    calcular(tipo) {
        this.tipoOperacao !== 'igual' && this.calcularNumeros();
        this.tipoOperacao = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    adicionarNumero(numero) {
        if(numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.sinais[this.tipoOperacao] || ''}`;
    }

    calcularNumeros() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if( isNaN(valorAtual) || isNaN(valorAnterior) ) return
        this.valorAtual = this.calculadora[this.tipoOperacao](valorAnterior, valorAtual);
    }
}