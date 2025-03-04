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

console.log(somaA())

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');    

    const userCerto = "MalucoEverton"
    const passwordCerto = somaAlga
}