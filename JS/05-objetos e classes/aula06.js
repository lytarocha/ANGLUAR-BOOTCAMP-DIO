
class Pessoa {

}

function compararPessoas(p1 ,p2){
    if (p1.idade > p2.idade){
         console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome}tem a mesma idade`);
    }
}

const thalita = new Pessoa('Thalita', 31);
const ingrid = new Pessoa('Ingrid' , 35); 

compararPessoas(thalita,ingrid);