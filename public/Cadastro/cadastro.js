function cadastro(){
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmarSenha.value;
    var idUsuarioLogado = sessionStorage.getItem("ID_USUARIO");

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
            alert(
              "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
            );

            setTimeout(() => {
              window.location.href = "../Login/login.html";
            }, "100");

            limparFormulario();
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
            finalizarAguardar();
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });

      return false;

}