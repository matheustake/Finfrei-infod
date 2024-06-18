import prompt from "prompt-sync";
let ler = prompt()

function exibirMensagem(mensagem) {
    console.log(mensagem);
}

function lerstring() {
    let leitor = ler()
    return leitor ;
}

function lernum() {
    let leitorN = Number(ler())
    return leitorN
}

export { exibirMensagem, lerstring, lernum};
