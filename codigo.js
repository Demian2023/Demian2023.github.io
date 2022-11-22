const enviar = document.getElementById("enviar")

enviar.addEventListener("click", () => {
    let mensaje = document.getElementById("floatingTextarea2").value;
    let wp = "https://api.whatsapp.com/send?phone=5493462662288&text=";
    let mensajeWP = wp + mensaje;
    window.open(mensajeWP);
})