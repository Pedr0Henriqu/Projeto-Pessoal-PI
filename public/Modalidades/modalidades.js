var lista = []

function home(){
    window.location.href = "../index.html"
}

function login(){
    window.location.href = "../Login/login.html"
}

function verificar(){
    var frase = ipt_frase.value;
    var contagem = 0;
    lista.push(frase)

    for(var i = 0; i < lista.length ; i++){
        if(lista.length > 3){
            contagem++
        }
    }

    if(contagem > 0){
        alert("Apenas 3 modalidades!")
    }else{
        texto.innerHTML = `
        Sua modalidade preferida é: ${lista[0]}
        <br>
        Sua 2º modalidade favorita é: ${lista[1]} 
        <br>
        Sua 3º modalidade favorita é: ${lista[2]}
        `
    }

}