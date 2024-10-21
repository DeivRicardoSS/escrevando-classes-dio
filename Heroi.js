class Heroi {
    nome;
    idade;
    tipo;
    ataque;
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        switch(this.tipo){
            case "mago":
                this.ataque = "magia";
                break;
            case "guerreiro":
                this.ataque = "espada";
                break;
            case "monge":
                this.ataque = "artes marciais"
                break;
            case "ninja":
                this.ataque = "shuriken";
                break;
            case "arqueiro":
                this.ataque = "arco e flechas";
                break;
            default:
                this.ataque = "soco";
                break;
        }

        console.log(`${this.nome}, tipo ${this.tipo}, atacou usando ${this.ataque}`);
    }
    
}

let herois = [];

herois.push(new Heroi("Zézinho", 80, "mago"));
herois.push(new Heroi("Felas", 20, "ninja"));
herois.push(new Heroi("Steve", 50, "guerreiro"));
herois.push(new Heroi("Alex", 40, "arqueiro"));

herois.forEach(heroi => {
    heroi.atacar();
})