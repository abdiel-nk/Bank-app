export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "");
    numerosRepetidos(cuil)
    console.log(cuil);
    console.log(numerosRepetidos(cuil));
}
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