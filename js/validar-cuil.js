export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "");
    
    if(numerosRepetidos(cuil)){
            campo.setCustomValidity("Valores repetidos")
    }else{
        if(validarPrimerosDigitos(cuil) && validarDigVerificador(cuil)){
            console.log("cuil válido");
        }else{
            campo.setCustomValidity("Cuil Inválido")
        }
    }
   
}
// 23-71012338-1 cuil válido 
function numerosRepetidos(cuil){
    const numeroRep = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
    ];
    return numeroRep.includes(cuil);
}
function validarPrimerosDigitos(cuil){
    let primerosDigitos = cuil.substr(0,2);
    let digitosValido = ['20','23','24','25'];
   return digitosValido.includes(primerosDigitos)

}
function validarDigVerificador(cuil){
    let acumulado = 0 ; 
    const factores=[5,4,3,2,7,6,5,4,3,2]
    for(let i=0;i<10;i++){
        acumulado+= parseInt(cuil[i],10) * factores[i];
    }
    let validarTeorico=11 - (acumulado % 11);
    if(validarTeorico==11){
        validarTeorico=0;
    }else if(validarTeorico ==10){
        validarTeorico=9
    }
    const digitoVerificador=parseInt(cuil[10],10)
    console.log(digitoVerificador);
    return digitoVerificador === validarTeorico;
}