window.onload = function () {
    let btCacadstrar = document.getElementById("btCadastrar");
    btCacadstrar.onclick = cadastrarEmail;
}
function cadastrarEmail() {
    let campoEmail = document.getElementById("email");
    let email = campoEmail.value;

    localStorage.setItem("email", email);
}