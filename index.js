//Declarações -------------------------------------------------------
var vitorias = 100
var derrotas = 10
var saldo = 0
var ranking = "Ferro"

// Funções -------------------------------------------------------
function calculoSaldo() {
    saldo = vitorias - derrotas;
}

function rankear() {
    var chaveamento = [101, 90, 80, 50, 20, 10];
    var ranks = ["Imortal", "Lendário", "Diamante", "Ouro", "Prata", "Bronze"];
    calculoSaldo()

    for (var i = 0; i < chaveamento.length; i++) {
        if (saldo > chaveamento[i]) {
            ranking = ranks[i];
            return ranking;
        }
        
        
    }
    return ranking;
}

// Execução -------------------------------------------------------
rankear();

//Output -------------------------------------------------------
console.log("O Herói tem saldo de " + saldo + " vitórias e está no nível de "+ ranking);