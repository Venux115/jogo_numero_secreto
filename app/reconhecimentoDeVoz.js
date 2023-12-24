SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
const elementoChute = document.querySelector("#chute")
const btnTentar = document.querySelector('.btnVoz')

recognition.lang = "pt-Br"
recognition.start()


function exibechuteNaTela(chute)
{
    elementoChute .innerHTML = `
    <div>Você disse</div>
    <span clas="box">${chute}</span>
    `
}


recognition.addEventListener('result', reconhecer)
recognition.addEventListener('end', ()=>{recognition.start()})
function reconhecer(e){
    chute = (e.results[0][0].transcript)
    
    exibechuteNaTela(chute)
    verificaChute(chute)
}