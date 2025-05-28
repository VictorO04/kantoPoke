let readline = require("readline-sync");

console.log("------------------------------------------");
console.log("Escolha seu pokemon");
console.log()
console.log("1 - Venussaur  |   2 - Charizard |   3 - Blastoise");

let pokemons = ["Entei", "Suicune", "Raikou"];

let escolhaJogador1 = readline.questionFloat("Digite aqui sua escolha: ");
let escolhaValida1 = false;
while (escolhaValida1 === false) {
    switch (escolhaJogador1) {
        case 1:
            escolhaJogador1 = pokemons[0];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            break;
        case 2:
            escolhaJogador1 = pokemons[1];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            break;
        case 3:
            escolhaJogador1 = pokemons[2];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            break;
        default:
            escolhaValida1 = false;
            console.log();
            console.log("Escolha um pokémon válido");
            escolhaJogador1 = readline.questionFloat("Digite aqui sua escolha: ");
    }
}

console.log();
let escolhaJogador2 = readline.questionFloat("Sua vez jogador 2, escolha seu pokemon: ");
let escolhaValida2 = false;