"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaFormatoData = verificaFormatoData;
exports.stringParaData = stringParaData;
exports.dataParaString = dataParaString;
function verificaFormatoData(dataString) {
    let dateIsCorrect = false;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(dataString)) {
        dateIsCorrect = true;
    }
    return dateIsCorrect;
}
function stringParaData(dataString) {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);
    let data = new Date(ano, mes, dia);
    if (isNaN(data.getTime())) {
        throw new Error("Data inválida");
    }
    return data;
}
function dataParaString(data) {
    const date = new Date(data);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
}
