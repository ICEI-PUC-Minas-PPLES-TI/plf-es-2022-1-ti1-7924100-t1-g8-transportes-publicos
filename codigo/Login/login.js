function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "usuario" && senha == "12345") {
    alert("sucesso");
    location.href = "../Tela Inicial";
  } else {
    alert("usuario ou senha incorreto");
  }
}

function cadastro() {
   location.href = "cadastro.html"
}

function sair() {
  location.href = "index.html"
}

function esquecisenha() {
  location.href = "esquecisenha.html"
}

function alerta(){
  alert("NOVA SENHA ENVIADO A SEU EMAIL")
    location.href = "index.html"
 
} 
   