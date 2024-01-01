const pasw = document.querySelector("#password");
const conf = document.querySelector("#confirm");

conf.addEventListener("change", (e) => {
    if(pasw.value != conf.value){
        console.log("contraseñas no coinciden")
        conf.setCustomValidity("contraseñas no coinciden")
    }
})
