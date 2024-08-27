function inserir(num) {
    document.querySelector(".tela-de-saida").innerText += num;
  }
  
function apagar() {
    document.querySelector(".tela-de-saida").innerText = "";
  }
  
function voltar() {
    let tela = document.querySelector(".tela-de-saida").innerHTML;
    document.querySelector(".tela-de-saida").innerText = tela.substring(
      0,
      tela.length - 1
    );
  }
  
function calcular() {
    let tela = document.querySelector(".tela-de-saida").innerText;
    if (tela) {
      document.querySelector(".tela-de-saida").innerText = eval(tela);
    } else {
      document.querySelector(".tela-de-saida").innerText = "";
    }
  }