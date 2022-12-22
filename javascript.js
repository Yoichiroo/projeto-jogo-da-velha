let jogo = []
let tabuleiro = []
let quemJoga = 0 // 0 - JOGADOR = X; 1 - CPU = O
let verificar //VERIFICAR SE HOUVE VENCEDOR OU NÃO
let jogando = true
let nivel = 2
let jogadaCPU = 1
let quemComeca = Math.round(Math.random()*2)
let jogada = 0

//  JOGANDO

function jogar(pos) {
    //VERIFICAÇÃO DO JOGADOR QUE ESTÁ JOGANDO 
    if((jogando) && (quemJoga == 0)) {
        switch(pos) {
            case 1:
                if(jogo[0][0] == "") {
                    jogo[0][0] = "X"
                    quemJoga = 1
                }
                break
            case 2:
                if(jogo[0][1] == "") {
                    jogo[0][1] = "X"
                    quemJoga = 1
                }
                break
            case 3:
                if(jogo[0][2] == "") {
                    jogo[0][2] = "X"
                    quemJoga = 1
                }
                break
            case 4:
                if(jogo[1][0] == "") {
                    jogo[1][0] = "X"
                    quemJoga = 1
                }
                break
            case 5:
                if(jogo[1][1] == "") {
                    jogo[1][1] = "X"
                    quemJoga = 1
                }
                break
            case 6:
                if(jogo[1][2] == "") {
                    jogo[1][2] = "X"
                    quemJoga = 1
                }
                break
            case 7:
                if(jogo[2][0] == "") {
                    jogo[2][0] = "X"
                    quemJoga = 1
                }
                break
            case 8:
                if(jogo[2][1] == "") {
                    jogo[2][1] = "X"
                    quemJoga = 1
                }
                break
            default:
                if(jogo[2][2] == "") {
                    jogo[2][2] = "X"
                    quemJoga = 1
                }
            }
            if(quemJoga == 1) {
                atualizarTabuleiro()
                verifica = verificarVitoria()
                if(verifica != "") {
                    alert(verifica + " venceu!")
                    jogando = false
                }
            }
            jogada++
            cpuJoga()
    }
}   

//ATUALIZAÇÃO DO TABULEIRO DEPENDENDO DA JOGADA

function atualizarTabuleiro() {
    //PERCORRER O TABULEIRO
    for(let linha = 0; linha < 3; linha++) {
        for(let coluna = 0; coluna < 3; coluna++) {
            if(jogo[linha][coluna] == "X") {
                tabuleiro[linha][coluna].innerHTML = "X"
                tabuleiro[linha][coluna].style.cursor = "default"
            } else if (jogo[linha][coluna] == "O") {
                tabuleiro[linha][coluna].innerHTML = "O"
                tabuleiro[linha][coluna].style.cursor = "default"
            } else {
                tabuleiro[linha][coluna].innerHTML = ""
                tabuleiro[linha][coluna].style.cursor = "pointer"
            }
        }
    }
}

//INICALIZAÇÃO 

function iniciar() {
    jogando = true
    jogadaCPU = 1
    jogada = 0
    jogo = [
        //MATRIZ COM 3 LINHAS E CADA LINHA TEM 3 COLUNAS. SERVIRÃO PARA A NOSSA IA JOGAR.
        ["", "", ""], // 0,0 | 0,1 | 0,2
        ["", "", ""], // 1,0 | 1,1 | 1,2
        ["", "", ""] // 2,0 | 2,1 | 2,2
    ]
    tabuleiro = [
        [document.getElementById("pos1"),document.getElementById("pos2"),document.getElementById("pos3")],
        [document.getElementById("pos4"),document.getElementById("pos5"),document.getElementById("pos6")],
        [document.getElementById("pos7"),document.getElementById("pos8"),document.getElementById("pos9")]
    ]
    atualizarTabuleiro()
        if (quemComeca == 1) {
            quemComeca = 0
            quemJoga = quemComeca
            document.getElementById("divQuemComeca").innerHTML = "Quem começa - <strong>Jogador</strong>"
        } else {
            quemComeca = 1
            quemJoga = quemComeca
            document.getElementById("divQuemComeca").innerHTML = "Quem começa - <strong>BOT</strong>"
            cpuJoga()
        }
}

// JOGADA DA CPU

function cpuJoga(){
    if((jogando)) {
        let linha, coluna
            if(nivel == 1) {
                //NIVEL 1
                do {
                    linha = Math.round(Math.random()*2)
                    coluna = Math.round(Math.random()*2)
                } while(jogo[linha][coluna] != "")
                jogo[linha][coluna] = "O"
            } else if (nivel == 2) {
                //NIVEL 2
                //ATAQUE LINHA 1
            if((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            } else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O"
            } else if ((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O"
            } else 
                //JOGADAS LINHA 2
            if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")){
                jogo[1][2] = "O"
            } else if ((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")) {
                    jogo[1][0] = "O"
            } else 
            //JOGADAS LINHA 3
            if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O"
            } else if ((jogo[2][0] == "O") && (jogo[2][1] == "") && (jogo[2][2] == "O")) {
                jogo[2][1] = "O"
            } else if ((jogo[2][1] == "O") && (jogo[2][2] == "O")) {
                jogo[2][0] = "O"
            } else {
            //JOGADAS COLUNA 1
            } if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O"
            } else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")) {
                jogo[1][0] = "O"
            } else if ((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O"
            } else
            //JOGADAS COLUNA 2 
            if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")){
                jogo[2][1] = "O"
            } else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O"    
            } else 
            //JOGADAS COLUNA 3
            if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O"
            } else if ((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")) {
                jogo[1][2] = "O"
            } else if ((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            } else 
            //JOGADAS DIAGONAL 1
            if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O"
            } else if ((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            } else 
            //JOGADAS DIAGONAL 2 
            if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O"
            } else if ((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            } else 
            //DEFESA 
            //JOGADAS LINHA 1
            if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O"
            } else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "O"
            } else if ((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "O"
            } else 
            //JOGADAS LINHA 2
            if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")){
                jogo[1][2] = "O"
            } else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "X") && (jogo[0][2] == "X") && (jogo[1][0] == "")) {
                jogo[1][0] = "O"
            } else
            //JOGADAS LINHA 3
            if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O"
            } else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "O"
            } else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
            } else 
            //JOGADAS COLUNA 1 
            if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O"
            } else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "O"
            } else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
            } else 
            //JOGADAS COLUNA 2 
            if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")){
                jogo[2][1] = "O"
            } else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "O"
            } else 
            //JOGADAS DIAGONAL 1 
            if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O"
            } else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "O"
            } else 
            //JOGADAS DIAGONAL 2 
            if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O"
            } else if ((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O"
            } else if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            } else if (jogada < 8) {
                do {
                    linha = Math.round(Math.random()*2)
                    coluna = Math.round(Math.random()*2)
                } while(jogo[linha][coluna] != "")
                    jogo[linha][coluna] = "O"
                } else {
                    for (let linha = 0; linha < 3; linha++) {
                        for (let coluna = 0; coluna < 3; coluna++) {
                            if(jogo[linha][coluna] == "") {
                                jogo[linha][coluna] = "O"
                            }
                        }
                    }
                }
            }
        }
        quemJoga = 0
        verificar = verificarVitoria()
        if (verificar != "") {
            alert(verificar + " venceu!")
        }
        atualizarTabuleiro()
        jogada++
}

//VERIFICAÇÃO DA VITÓRIA DO JOGADOR OU CPU

function verificarVitoria() {
    let linha, coluna
    for (linha = 0; linha < 3; linha++) {
        //VERIFICAÇÃO DAS LINHAS
        if(jogo[linha][0] == jogo[linha][1] && (jogo[linha][1] == jogo[linha][2])) {
            return jogo[linha][0]
        }
    }
    for (coluna = 0; coluna < 3; coluna++) {
        //VERIFICAÇÃO DAS COLUNAS
        if(jogo[0][coluna] == jogo[1][coluna] && (jogo[1][coluna] == jogo[2][coluna])) {
        return jogo[0][coluna]
        }
    }

    //DIAGONAIS
    if(jogo[0][0] == jogo[1][1] && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0]
    }
    //SEGUNDA DIAGONAL
    if(jogo[0][2] == jogo[1][1] && (jogo[1][1] == jogo[2][0])) {
        return jogo[0][2]
    }
    return ""
}

window.addEventListener("load", iniciar)