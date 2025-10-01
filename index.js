//Criação das variáveis de animação
$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  //Função de clicar no envelope - vai fazer o envelope abrir
  envelope.click(function () {
    open();
  });
  //Função de clicar no botão de abrir - vai fazer o envelope abrir
  btn_open.click(function () {
    open();
  });
  //Função de clicar no botão de fechar - vai fazer o envelope fechar
  btn_reset.click(function () {
    close();
  });

  //Instanciação da função abrir
  function open() {
    envelope.addClass("open").removeClass("close");
  }
  //Instanciação da função fechar
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

