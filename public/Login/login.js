function home(){
    window.location.href = "../index.html"
}

function login(){
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if(input_email.value == "" || input_senha.value == ""){
        span_validacao.innerHTML = "Por favor preencha todos os campos";
        input_email.style.border = "thin solid #FF0000";
        input_senha.style.border = "thin solid #FF0000";
    

    /* marca a input email */
    if (input_email.value !== "") {
        input_email.style.border = "none";
      } else {
        input_email.style.border = "thin solid #FF0000";
      }

     /* marca a input senha */
    if (input_senha.value !== "") {
        input_senha.style.border = "none";
      } else {
        input_senha.style.border = "thin solid #FF0000";
      }

    } else {
    /* tira as marcações das inputs já preenchidas */
    input_email.style.border = "none";
    input_senha.style.border = "none";

    /* Valida se o email possui mais de 8 caracteres */
    if (input_email.value.length < 8) {
        input_email.style.border = "thin solid #FF0000";
        input_senha.style.border = "none";
        span_validacao.innerHTML =
          "Email inválido, deve conter no mínimo 8 digitos";

    }else if (input_email.value.indexOf("@") == -1) {
        /* Valida se o email possui "@" */
          input_email.style.border = "thin solid #FF0000";
          span_validacao.innerHTML = 'Email inválido, deve conter "@"';

    }else if (input_senha.value.length < 5) {
        /* Valida se a senha tem mais de 5 caracteres */
          input_senha.style.border = "thin solid #FF0000";
          input_email.style.border = "none";
          span_validacao.innerHTML = "Senha deve conter no mínimo 5 digitos";
    }else{
        span_validacao.innerHTML = ""
    aguardar();
    
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            finalizarAguardar();
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location.href = "../Minha conta/minhaconta.html";
                }, 100);

            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            span_validacao.innerHTML = "Email ou senha incorretos"

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
        }
    }
}