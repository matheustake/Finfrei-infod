import { exibirMensagem } from "./exibicao.js";
import { exibirMenu, obterOpcaoMenu } from "./menu.js"
import {  sacar, exibirSaldo,  deposito} from "./financeiro.js";

let saldo = 0;

exibirMensagem('Sejam bem vindos ao FinFrei!');

while (true) {
    exibirMenu();
    const opcao = obterOpcaoMenu();
    
    if (opcao === '1') saldo = deposito(saldo);
    else if (opcao === '2') saldo = sacar(saldo);
    else if (opcao === '3') exibirSaldo(saldo);
    else if (opcao === 'fechar') {
        exibirMensagem('DESLIGANDO PROGRAMA..');
        break;
    } else exibirMensagem('Opção inválida. Tente novamente');
}
