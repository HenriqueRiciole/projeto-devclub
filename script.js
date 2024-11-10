//Criar botão para emitir som


let botaoSom = document.getElementById("botao")
let videoSom = docement.getElementById("video")

botaoSom.addEventListener("click", ligarSom)

function ligarSom(){
    videoSom.muted = false
}