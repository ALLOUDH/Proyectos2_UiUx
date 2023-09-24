/*
Esta función hace que al hacer click ("onclick()") en el icono del ojo
se muestre la contraseña y viceversa, ocultando la contraseña y cambiando
de icono a un ojo cerrado.
*/
function mostrar_pass(){
    var tipo = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");
    if(tipo.type == 'password'){
        tipo.type = 'text';
        eyeIcon.src = "Resources/slash_eye_icon.svg"
        eyeIcon.classList.add("closed-eye");
    }else{
        tipo.type = 'password';
        eyeIcon.src = "Resources/211661_eye_icon.svg"
        eyeIcon.classList.remove("closed-eye");
    }
}