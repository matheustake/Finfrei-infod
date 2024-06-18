import { lerstring } from "./exibicao.js";

function exibirMenu() {
    console.log('Escolha uma opção:');
    console.log('1. Depositar');
    console.log('2. Sacar');
    console.log('3. Exibir saldo');
    console.log('S. fechar programa');
}

function obterOpcaoMenu() {
    return lerstring ('Opção: ');
}

export { exibirMenu, obterOpcaoMenu };