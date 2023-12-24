

function verificaChute(chute){
    

    const numero = +chute.replace(/,/g, "").replace(/\./g, "");

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += "<div>Valor inválido</div>"
        return
    }


    if ((numeroInvalido(numero) == false)){
        elementoChute.innerHTML += `Valor invalido: numero secreto precisa estar entre ${menorValor} e ${maiorValor}`
        return
    }else if(numero > numAleatorio){
        elementoChute.innerHTML += `O número secreto é menor <i class="fa-solid fa-arrow-down"></i>`
    }else if(numero < numAleatorio){
        elementoChute.innerHTML += `O número secreto é maior <i class="fa-solid fa-arrow-up"></i>`

    }

    

    if (numero == numAleatorio)
    {
        document.body.innerHTML = `
        <h2> Você acertou</h2>
        <h3> O número secreto era ${numAleatorio}</h3>
        <button type="button" id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
        const btn = document.querySelector("#jogarNovamente")

        btn.addEventListener('click', () => {
            window.location.reload()
        })
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
  
function numeroInvalido(numero){
    
    return (numero > menorValor) && (numero < maiorValor)
    
}