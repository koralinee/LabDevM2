import promptSync from 'prompt-sync';

const prompt = promptSync();

function regraDeTres(n1, n2, n3) {
    return (n2 * n3) / n1;
}

console.log("Aqui vamos calcular a regra de três.");

const n1 = parseFloat(prompt("Digite o primeiro número: "));
const n2 = parseFloat(prompt("Digite o segundo número: "));
const n3 = parseFloat(prompt("Digite o terceiro número: "));

const resultado = regraDeTres(n1, n2, n3);
console.log("O resultado é:", resultado);
