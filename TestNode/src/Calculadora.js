class Calculadora {
    somar(a, b) {
      return a + b;
    }
  
    subtrair(a, b) {
      return a - b;
    }
  
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        throw new Error('Divisão por zero');
      }
      return a / b;
    }
  
    nPar(numero) {
      return numero % 2 === 0;
    }
  
    maiorNumero(numeros) {
      if (!Array.isArray(numeros) || numeros.length === 0) return null;
      return Math.max(...numeros);
    }
  }
  
  module.exports = Calculadora;
  
  