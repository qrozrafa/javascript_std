class Calculadora{
    somar(num1, num2) {
        return num1 + num2;
    }

    subtrair(num1, num2) {
        return num1 - num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    dividir(num1, num2) {
        if(num2 != 0) {
           return num1 / num2;
        }
        return alert("divisao por zero não existe" )
    }
}