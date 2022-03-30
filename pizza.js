export class Pizza {
    nome;
    ingredienti;
    prezzo;
    constructor(nome,ingredienti,prezzo){
        this.nome=nome;
        this.ingredienti=ingredienti;
        this.prezzo=prezzo;

    }
    descrizione(){
        let desc = "la pizza" + this.nome + " e' fatta con " + this.ingredienti.toString() + "e costa " + this.prezzo;
        return desc;
    }
}