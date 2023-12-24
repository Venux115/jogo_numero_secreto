
const elementoMenorValor = document.querySelector(".menor-valor")
const elementoMaiorNumero = document.querySelector(".maior-valor")


const menorValor = 0
const maiorValor = 1000
 
const numAleatorio = gerarNumeroAletorio()

console.log(numAleatorio)

function gerarNumeroAletorio() {
    return parseInt(Math.random() * maiorValor + 1)
}


elementoMenorValor.textContent = menorValor
elementoMaiorNumero.textContent = maiorValor

