class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023- idade ;
    }
     
    descrever(){
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//INSTÂNCIAS

const thalita = new Pessoa('Thalita', 31);
const ingrid = new Pessoa('Ingrid' , 32);

console.log(thalita);
