import {EnviandoResposta} from './index.js'

let botao = document.getElementById('botaoPergunta')
let pergunta = document.getElementById('caixaPergunta')
let resposta = document.getElementById('resposta')


botao.addEventListener('click', function(){
    
    if(pergunta.value === '' ){
        resposta.innerText = 'Po man pergunta ai vai <3'
    }else{
        resposta.innerHTML = ''
        resposta.innerText = EnviandoResposta.selecionandoResposta()
    }
})