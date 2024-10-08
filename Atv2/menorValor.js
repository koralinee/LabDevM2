import promptSync from 'prompt-sync';

const prompt = promptSync();

function menorValor(n1, n2, n3, n4, n5) {
    return Math.min(n1, n2, n3, n4, n5);
}

console.log("Aqui vamos encontrar o menor valor entre cinco números.");

const n1 = parseFloat(prompt("Digite o número 1: "));
const n2 = parseFloat(prompt("Digite o número 2: "));
const n3 = parseFloat(prompt("Digite o número 3: "));
const n4 = parseFloat(prompt("Digite o número 4: "));
const n5 = parseFloat(prompt("Digite o número 5: "));

const menor = menorValor(n1, n2, n3, n4, n5);
console.log("O menor valor entre os cinco números digitados é:", menor);
