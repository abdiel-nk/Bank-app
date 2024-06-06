const botonCamera = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamera = document.querySelector("[data-camera]");
const tomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
const botonEnviarImg = document.querySelector("[data-enviar]");
let imgUrl = ""

//aplicar try catch
//campo.style.border = "2px solid red"

//abrir camara
botonCamera.addEventListener("click", async() =>{
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botonCamera.style.display = "none";
    campoCamera.style.display="block";
    video.srcObject = iniciarVideo

})
//Foto
tomarFoto.addEventListener("click", async()=>{
    canvas.getContext("2d").drawImage(video,0,0,canvas.width, canvas.height)

    imgUrl = canvas.toDataURL("image/jpeg")
    campoCamera.style.display="none"
    mensaje.style.display="block"

} )

botonEnviarImg.addEventListener("click",()=>{
    const getData =localStorage.getItem("registro")
    const convertirDatos=JSON.parse(getData)
    convertirDatos.img_url=imgUrl;
    localStorage.setItem("registro", JSON.stringify(convertirDatos))
    window.location.href="./abrir-cuenta-form-3.html";
})