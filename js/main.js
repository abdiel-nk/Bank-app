import esUnCuil from "./validar-cuil.js"
import esMayor from "./validar-edad.js";

const campoFormulario = document.querySelectorAll("[required]");

campoFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=>verificarCampo(campo))
    campo.addEventListener("invalid", evento =>evento.preventDefault())
});
function verificarCampo(campo){
    if(campo.name == "cuil" && campo.value.length >=11){
        esUnCuil(campo)
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
       esMayor(campo)
    }
    console.log(ValidityState);
}