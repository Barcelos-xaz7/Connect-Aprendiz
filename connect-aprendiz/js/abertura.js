// botão ENTRAR → vai para login.html
document.getElementById("btnEntrar").addEventListener("click", () => {
    window.location.href = "login.html";
});

// botão CADASTRAR → vai para cadastro.html
document.getElementById("btnCadastrar").addEventListener("click", () => {
    window.location.href = "cadastro.html";
});

// botão PULAR CADASTRO → vai para home.html (ou outra que você quiser)
document.getElementById("btnPular").addEventListener("click", () => {
    window.location.href = "home.html"; 
});
