import { lerstring, exibirMensagem,  lernum } from "./exibicao.js";

function deposito(saque) {
    let ValorDepositado;
    let novoValor = saque
    do {
        exibirMensagem('Quanto deseja depositar? (Digite "c" para cancelar): ');
        ValorDepositado = lernum();

        novoValor = novoValor +=ValorDepositado
        if (ValorDepositado === 'c') {
            console.log('Operação cancelada.');
            return 0;
        }
        ValorDepositado = Number(ValorDepositado);
        if ( ValorDepositado <= 0) {
            exibirMensagem('Valor inválido. Tente novamente.');
        }
    } while (ValorDepositado <= 0);
    return novoValor ;
}

function sacar(saldo) {
    let sacado;
    do {
        exibirMensagem('Quanto deseja sacar? (Digite "c" para cancelar): ');
        sacado = lerstring();
        if (sacado === 'c') {
            exibirMensagem('Operação cancelada.');
            return saldo;
        }
        sacado = Number(sacado);
        if (sacado <= 0) {
            exibirMensagem('Valor inválido. Tente novamente.');
        } else if (sacado > saldo) {
            exibirMensagem('Saldo insuficiente.');
            return saldo;
        }
    } while ( sacado <= 0 || sacado > saldo);
    return saldo - sacado;
}

function exibirSaldo(saldo) {
    console.log(`Seu saldo atual é: ${saldo}`);
}

export { deposito , sacar, exibirSaldo };
