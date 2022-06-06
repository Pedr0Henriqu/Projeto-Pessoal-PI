function cadastro() {
  var nomeVar = input_nome.value;
  var emailVar = input_email.value;
  var senhaVar = input_senha.value;
  var confirmarSenhaVar = input_confirmarSenha.value;
  var idUsuarioLogado = sessionStorage.getItem("ID_USUARIO");

  if (input_nome.value == "" || input_email.value == "" || input_senha.value == "" || input_confirmarSenha.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    input_nome.style.border = "thin solid #FF0000";
    input_email.style.border = "thin solid #FF0000";
    input_senha.style.border = "thin solid #FF0000";
    input_confirmarSenha.style.border = "thin solid #FF0000";


    if (input_nome.value !== "") {
      input_nome.style.border = "none";
    } else {
      input_nome.style.border = "thin solid #FF0000";
    }

    if (input_email.value !== "") {
      input_email.style.border = "none";
    } else {
      input_email.style.border = "thin solid #FF0000";
    }

    if (input_senha.value !== "") {
      input_senha.style.border = "none";
    } else {
      input_senha.style.border = "thin solid #FF0000";
    }

    if (input_confirmarSenha.value !== "") {
      input_confirmarSenha.style.border = "none";
    } else {
      input_confirmarSenha.style.border = "thin solid #FF0000";
    }
  
  } else {
    input_nome.style.border = "none";
    input_email.style.border = "none";
    input_senha.style.border = "none";
    input_confirmarSenha.style.border = "none";

    if (input_email.value.indexOf("@") == -1) {
      input_email.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';

    } else if (input_email.value.length < 8) {
      /* Valida se o email possui mais de 10 caracteres */
        input_email.style.border = "thin solid #FF0000";
        span_validacao.innerHTML =
          "Email inválido, deve conter no mínimo 8 digitos";

    } else if(input_nome.value.length < 3){
      /* Valida se o nome possui mais de 3 caracteres */
      input_nome.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Nome deve conter no mínimo 3 digitos";

    }else if(input_senha.value.length < 5){
      /* Valida se a senha tem mais de 5 caracteres */
      input_senha.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Senha deve conter no mínimo 5 digitos";

    } else if (input_senha.value !== input_confirmarSenha.value) {

      /* Valida se as inputs de senha e confirmar senha são iguais */
        input_senha.style.border = "thin solid #FF0000";
        input_confirmarSenha.style.border = "thin solid #FF0000";
        span_validacao.innerHTML = "As senhas não coincidem";
    }else{
      aguardar()
      input_nome.style.border = "none";
      input_email.style.border = "none";
      input_senha.style.border = "none";
      input_confirmarSenha.style.border = "none";
      span_validacao.innerHTML = ""
    
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      confirmarSenhaServer: confirmarSenhaVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        finalizarAguardar();

        setTimeout(() => {
          window.location.href = "../Login/login.html";
        }, "100");

        limparFormulario();
      } else {
        finalizarAguardar();
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}
}
}