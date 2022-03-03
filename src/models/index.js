// Isso é um arquivo de exemplo,
//  crie os arquivos das models necessárias.

let resposta = document.getElementById('resposta')

let listaRespostas = ["É certo",
                "É decididamente assim",
                "Sem dúvida",
                "Sim definitivamente",
                "Você pode contar com ele",
                "A meu ver, sim",
                "Provavelmente",
                "Boa perspectiva",
                "Sim", 
                "Sinais apontam para sim",
                "Não conte com isso",
                "Minha resposta é não",
                "Minhas fontes dizem não",
                "Perspectiva não tão boa",
                "Muito duvidoso",
                "Pergunta bugada em..., manda de novo",
                "Pergunte novamente mais tarde",
                "Melhor não te dizer agora",
                "Não é possível prever agora",
                "Concentre-se e pergunte novamente"]

class EnviandoResposta{
    
    static selecionandoResposta(){

        let respostaSelecionada = listaRespostas[Math.floor(Math.random() * Math.floor(listaRespostas.length))]
        console.log(respostaSelecionada)
        return respostaSelecionada

        
    }
    
}
export {EnviandoResposta}