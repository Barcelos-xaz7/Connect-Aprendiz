document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("telefone");
  
    const apenasNumeros = (v) => v.replace(/\D/g, "");
  
    // Máscara CPF
    cpfInput.addEventListener("input", () => {
      let nums = apenasNumeros(cpfInput.value).slice(0, 11);
      if (nums.length <= 3) {
        cpfInput.value = nums;
      } else if (nums.length <= 6) {
        cpfInput.value = nums.replace(/(\d{3})(\d+)/, "$1.$2");
      } else if (nums.length <= 9) {
        cpfInput.value = nums.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
      } else {
        cpfInput.value = nums.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
      }
    });
  
    // Máscara Telefone
    telInput.addEventListener("input", () => {
      let nums = apenasNumeros(telInput.value).slice(0, 11);
      if (nums.length <= 2) {
        telInput.value = nums;
      } else if (nums.length <= 6) {
        telInput.value = nums.replace(/(\d{2})(\d+)/, "($1) $2");
      } else {
        telInput.value = nums.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
    });
  
    // Validação + Redirecionamento
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const data = document.getElementById("data").value.trim();
      const telefone = telInput.value.trim();
      const email = document.getElementById("email").value.trim();
      const cpf = cpfInput.value.trim();
      const senha = document.getElementById("senha").value.trim();
      const termo = document.getElementById("termo").checked;
  
      if (!nome || !data || !telefone || !email || !cpf || !senha) {
        alert("⚠️ Preencha todos os campos obrigatórios!");
        return;
      }
  
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(cpf)) {
        alert("⚠️ CPF inválido! Digite no formato 000.000.000-00.");
        return;
      }
  
      const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      if (!telRegex.test(telefone)) {
        alert("⚠️ Telefone inválido! Use o formato (11) 99999-9999.");
        return;
      }
  
      if (senha.length < 6) {
        alert("⚠️ A senha deve ter no mínimo 6 caracteres.");
        return;
      }
  
      if (!termo) {
        alert("⚠️ Você precisa aceitar o termo de uso.");
        return;
      }
  
      // Cadastro OK
      alert("✅ Cadastro realizado com sucesso!");
      window.location.href = "abertura.html"; // redireciona
    });
  });
  