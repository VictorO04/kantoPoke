let readline = require("readline-sync");

console.log("------------------------------------------");
console.log("Escolha seu pokemon");
console.log()
console.log("1 - Venussaur  |   2 - Charizard |   3 - Blastoise");

const pokemons = ["Venussaur", "Charizard", "Blastoise"];
let vidaPokemon = [364, 360, 362];

let escolhaJogador1 = readline.questionInt("Digite aqui sua escolha: ");
let vidaPokemonJogador1 = 0;
let escolhaValida1 = false;
while (escolhaValida1 === false) {
    switch (escolhaJogador1) {
        case 1:
            escolhaJogador1 = pokemons[0];
            vidaPokemonJogador1 = vidaPokemon[0];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            console.log("------------------------------------------");
            break;
        case 2:
            escolhaJogador1 = pokemons[1];
            vidaPokemonJogador1 = vidaPokemon[1];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            console.log("------------------------------------------");
            break;
        case 3:
            escolhaJogador1 = pokemons[2];
            vidaPokemonJogador1 = vidaPokemon[2];
            escolhaValida1 = true;
            console.log();
            console.log(`- Jogador 1 escolheu ${escolhaJogador1}`);
            console.log("------------------------------------------");
            break;
        default:
            escolhaValida1 = false;
            console.log();
            console.log("Escolha um pokémon válido");
            escolhaJogador1 = readline.questionInt("Digite aqui sua escolha: ");
    }
}

console.log();
let escolhaJogador2 = readline.questionInt("Sua vez jogador 2, escolha seu pokemon: ");
let vidaPokemonJogador2 = 0;
let escolhaValida2 = false;
while (escolhaValida2 === false) {
    switch (escolhaJogador2) {
        case 1:
            escolhaJogador2 = pokemons[0];
            vidaPokemonJogador2 = vidaPokemon[0];
            escolhaValida2 = true;
            console.log();
            console.log(`- Jogador 2 escolheu ${escolhaJogador2}`);
            console.log("------------------------------------------");
            break;
        case 2:
            escolhaJogador2 = pokemons[1];
            vidaPokemonJogador2 = vidaPokemon[1];
            escolhaValida2 = true;
            console.log();
            console.log(`- Jogador 2 escolheu ${escolhaJogador2}`);
            console.log("------------------------------------------");
            break;
        case 3:
            escolhaJogador2 = pokemons[2];
            vidaPokemonJogador2 = vidaPokemon[2];
            escolhaValida2 = true;
            console.log();
            console.log(`- Jogador 2 escolheu ${escolhaJogador2}`);
            console.log("------------------------------------------");
            break;
        default:
            escolhaValida2 = false;
            console.log();
            console.log("Escolha um pokémon válido");
            escolhaJogador2 = readline.questionInt("Digite aqui sua escolha: ");
    }
}

console.log();
console.log("Vamos para a batalha!!!");
console.log();
console.log(`${escolhaJogador1} HP: ${vidaPokemonJogador1} | ${escolhaJogador2} HP: ${vidaPokemonJogador2}`);

while (vidaPokemonJogador1 > 0 && vidaPokemonJogador2 > 0){
    
}