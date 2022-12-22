let jogo = []
let tabuleiro = []
let quemJoga = 0 // 0 - JOGADOR = X; 1 - CPU = O
let verificar //VERIFICAR SE HOUVE VENCEDOR OU NÃO
let jogando = true
let nivel = 1
let jogadaCPU = 1
let quemComeca = Math.round(Math.random() * 1)

//  JOGANDO

function jogar(pos) {
    //VERIFICAÇÃO DO JOGADOR QUE ESTÁ JOGANDO 
    if((jogando) && (quemJoga == 0)) {
        switch(pos) {
            case 1:
                if(jogo[0][0 == ""]) {
                    jogo[0][0] = "X"
                    quemJoga = 1
                } else {
                    
                }
                break
        }
    }
}   

function iniciar() {
    jogando = true
    jogadaCPU = 1
    jogo = [
        //MATRIZ COM 3 LINHAS E CADA LINHA TEM 3 COLUNAS. SERVIRÃO PARA A NOSSA IA JOGAR.

        ["", "", ""] // 0,0 | 0,1 | 0,2
        ["", "", ""] // 1,0 | 1,1 | 1,2
        ["", "", ""] // 2,0 | 2,1 | 2,2

    ]
}

window.addEventListener("load", iniciar)