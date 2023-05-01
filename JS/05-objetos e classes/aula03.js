
//CLASSES

class Pessoa {
    nome;
    idade;
     
    descrever(){
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//INSTÂNCIAS

const thalita = new Pessoa();
thalita.nome = 'Thalita Rocha';
thalita.idade = 31;

const ingrid = new Pessoa();
ingrid.nome = 'Ingrid';
ingrid.idade = 32;


console.log(thalita);
console.log(ingrid);

thalita.descrever();
ingrid.descrever();
  