function escolhaAleatoria(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const options = { 0: "pedra", 1: "papel", 2: "tesoura" };
const minhaEscolha = process.argv[2];
const escolhaCPU = options[escolhaAleatoria(0, 2)];

if ((minhaEscolha === "pedra" && escolhaCPU === "tesoura") || (minhaEscolha === "papel" && escolhaCPU === "pedra") || (minhaEscolha === "tesoura" && escolhaCPU === "papel")) {
  console.log(`Voce escolheu ${minhaEscolha} e o computador escolheu ${escolhaCPU}. Voce Venceu!`);
} else if (minhaEscolha === escolhaCPU) {
  console.log(`Voce escolhe ${minhaEscolha} e o computador escolheu ${escolhaCPU}.Empate`);
} else {
  console.log(`Voce escolheu ${minhaEscolha} e o computador escolheu ${escolhaCPU}. voce perdeu!`);
}
