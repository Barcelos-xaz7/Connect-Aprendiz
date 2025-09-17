function doisDigitos(num) {
    return num < 10 ? '0' + num : num;
}

function atualizarHoras() {
    const agora = new Date();
    const horas = doisDigitos(agora.getHours());
    const minutos = doisDigitos(agora.getMinutes());
    const segundos = doisDigitos(agora.getSeconds());

    document.getElementById('horas').innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarHoras, 1000);

atualizarHoras();

function Entrar() {
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let confirma = document.getElementById('confirma').value.trim();
    let mensagem = document.getElementById('mensagem');

    
    if (email === "" || senha === "" || confirma === "") {
        mensagem.textContent = "Todos os campos são obrigatórios!";
        mensagem.className = "mensagem erro";
        mensagem.style.display = "block";
        return;
    }

   
    if (senha !== confirma) {
        mensagem.textContent = "As senhas não conferem!";
        mensagem.className = "mensagem erro";
        mensagem.style.display = "block";
        return;
    }

   
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.className = "mensagem sucesso";
    mensagem.style.display = "block";

    
    setTimeout(() => {
        window.location.href = "abertura.html";
    }, 1000);
}

