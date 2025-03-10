function somaA() {
    const data = new Date()
    const ano = data.getFullYear()
    const mes = data.getMonth() + 1

    const anoS = ano.toString()
    const mesS = mes.toString()

    let somaAlga = 0

    for (let char of anoS) {
        somaAlga += parseInt(char, 10)
    }

    for (let char of mesS) {
        somaAlga += parseInt(char, 10)
    }

    return somaAlga
}

var main = document.getElementsByTagName("main")[0]
var box = document.getElementById("box")
var botao = document.getElementById("login")
botao.addEventListener("click", login)

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');    

    const userCerto = "MalucoEverton"
    const passwordCerto = somaA()

    if(1== 1 || username === userCerto && password === passwordCerto.toString()) {
        message.innerText = ""
        
        box.style.display = "none"
        main.style.filter = "none"
    } else if(username === "" || password === "") {
        message.innerText = "Preencha os campos"
    } else {
        message.innerText = "Usuário ou senha incorretos"
    }
}

window.onload = exibeV;

document.getElementById("regi").addEventListener("click", registrar);

function registrar() {
    const pesoVal = document.getElementById("Vpeso").value;
    localStorage.setItem('meuPeso', pesoVal);
    exibeV();
}

function exibeV() {
    const valorS = localStorage.getItem('meuPeso');
    document.getElementById("Mpeso").textContent = valorS 
    ? `O peso atual registrado em Kg é: ${valorS}Kg` 
    : "Peso atual não definido";
}

document.getElementById("T1").addEventListener("click", abre1)

function abre1() {
    const img1 = document.getElementById("seta1")
    img1.classList.toggle("ativo")
    const toggle1 = document.getElementById("Dpeso")
    toggle1.classList.toggle("ativo")
}