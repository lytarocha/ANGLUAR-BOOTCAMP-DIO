
function incrementarJuros(valor , percentualJuros){
    const valorDeAcrecimo =(percentualJuros / 100) * valor ;
    
    return valor + valorDeAcrecimo;

}

console.log(incrementarJuros(100, 100));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));



