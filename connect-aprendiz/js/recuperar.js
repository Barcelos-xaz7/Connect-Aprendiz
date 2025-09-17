const form = document.getElementById('recuperar-senha');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const novaSenha = document.getElementById('novaSenha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;
  const mensagem = document.getElementById('mensagem-recuperar');

  if (novaSenha !== confirmaSenha) {
    mensagem.textContent = "As senhas não coincidem!";
    mensagem.className = "mensagem erro";
    mensagem.style.display = "block";
    return;
  }

  mensagem.textContent = "Senha redefinida com sucesso!";
  mensagem.className = "mensagem sucesso";
  mensagem.style.display = "block";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
