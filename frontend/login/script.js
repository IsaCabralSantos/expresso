const formulario = document.getElementById("loginForm");
const loading = document.getElementById("loading");
const mensagem = document.getElementById("mensagem-erro");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const dots = document.querySelector(".dots");

let count = 1;
setInterval(function(){
    count++;
    if (count > 3){
        count = 1;
    }
    dots.textContent = ".".repeat(count);
}, 450);

/* LOGIN */
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const valorUsuario = usuario.value;
    const valorSenha = senha.value;
    /* LOGIN CORRETO */
    if(
        valorUsuario === "admin" &&
        valorSenha === "1234"
    ) {
        mensagemErro.style.display = "nome";
        /* Mostra o carregamento */
        loading.style.display = "flex";
        /* Simula carregando */
        setTimeout(function(){
        loading.style.display = "none";
        }, 2500);
    }
        /* LOGIN INCORRETO */
        else{
            mensagemErro.style.display = "block";
        }
});