function votacao(){
    var modalidadeVar = select_modalidade.value;
    var skatistaVar = select_skatista.value;
    var usuarioVar = sessionStorage.getItem('ID_USUARIO')

    aguardar();
    fetch("/usuarios/votacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        modalidadeServer: modalidadeVar,
        skatistaServer: skatistaVar,
        usuarioServer: usuarioVar

      }),
    })
      .then(function (resposta) {
        listar_luan();
        listar_nyjah();
        listar_bob();
        listar_tony();
        listar_rodney();

        listar_street();
        listar_downhill();
        listar_freestyle();
        listar_vertical();
        listar_bowl();


        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
         finalizarAguardar();
            alert(`Votação efetuada com sucesso... redirecionando a página de gráficos`)
          setTimeout(() => {
            window.location.href = "../Gráfico/grafico.html";
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

function listar_luan() {
  fetch(`/usuarios/luan`)
     .then(function (resposta) {
        if (resposta.ok) {
           if (resposta.status == 204) {
              //   alert('ERRO ULTIMO CAPTURADO!');
           }
           resposta.json().then(function (resposta) {
              console.log("Dados recebidos: ", JSON.stringify(resposta));

              for (let i = 0; i < resposta.length; i++) {
                 var lista = resposta[i];
                 var resultado = lista.quantidade


                 sessionStorage.setItem("luan",resultado);
              }
           });
        } else {
           throw "Houve um erro na função listar_luan()";
        }
     })
     .catch(function (resposta) {
        console.error(resposta);
        //finalizarAguardar();
     });
  ;
}

function listar_nyjah() {
  fetch(`/usuarios/nyjah`)
     .then(function (resposta) {
        if (resposta.ok) {
           if (resposta.status == 204) {
              //   alert('ERRO ULTIMO CAPTURADO!');
           }
           resposta.json().then(function (resposta) {
              console.log("Dados recebidos: ", JSON.stringify(resposta));

              for (let i = 0; i < resposta.length; i++) {
                 var lista = resposta[i];
                 var resultado = lista.quantidade


                 sessionStorage.setItem("nyjah",resultado);
              }
           });
        } else {
           throw "Houve um erro na função listar_nyjah()";
        }
     })
     .catch(function (resposta) {
        console.error(resposta);
        //finalizarAguardar();
     });
  ;
}

function listar_bob() {
   fetch(`/usuarios/bob`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("bob",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_bob()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_tony() {
   fetch(`/usuarios/tony`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("tony",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_tony()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_rodney() {
   fetch(`/usuarios/rodney`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("rodney",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_rodney()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }


 function listar_street() {
   fetch(`/usuarios/street`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("street",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_street()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_downhill() {
   fetch(`/usuarios/downhill`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("downhill",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_downhill()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_freestyle() {
   fetch(`/usuarios/freestyle`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("freestyle",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_freestyle()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_vertical() {
   fetch(`/usuarios/vertical`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("vertical",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_vertical()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }

 function listar_bowl() {
   fetch(`/usuarios/bowl`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
 
               for (let i = 0; i < resposta.length; i++) {
                  var lista = resposta[i];
                  var resultado = lista.quantidade
 
 
                  sessionStorage.setItem("bowl",resultado);
               }
            });
         } else {
            throw "Houve um erro na função listar_bowl()";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   ;
 }