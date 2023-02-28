const minhaVez = process.argv[2]
const jogadaCpu = Math.floor(Math.random()*10)
const resultado = +(minhaVez + jogadaCpu)

resultado %2==0 ? console.log(`O resultado foi ${resultado}, numero par Voce ganhou`) : console.log(`O resultado foi ${resultado}, numero impar voce perdeu`);