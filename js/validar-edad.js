export default function esMayor(campo){
    const fechaNacimiento = new Date(campo.value);
    if(!validarEdad(fechaNacimiento)){
        campo.setCustomValidity("Necesitas se mayor de edad")
    }
}

function validarEdad(fecha){
    const fechaActual = new Date();
    const fecha18 = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(),fecha.getUTCDate())
    console.log(fecha18);

    return fechaActual >= fecha18;
};
