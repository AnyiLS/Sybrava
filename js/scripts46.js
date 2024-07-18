$(document).ready(function () {
  // Sonido
  function playAudio() {
    document.getElementById("audio").play();
  }

  function playAudio1() {
    document.getElementById("audio1").play();
  }

  function playAudio2() {
    document.getElementById("audio2").play();
  }

  // Dimensiones
  var htmlancho;
  var htmlalto;
  var bodyancho;
  var bodyalto;
  var id;

  function CambioVentana() {
    htmlancho = $("html").width();
    htmlalto = $("html").height();
    bodyancho = $("body").width();
    bodyalto = $("body").height();
    if ($("body").hasClass("alto") && bodyancho > htmlancho) {
      $("body").removeClass("alto").addClass("ancho");
    }
    if ($("body").hasClass("ancho") && bodyalto > htmlalto) {
      $("body").removeClass("ancho").addClass("alto");
    }
  }

  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(CambioVentana, 500);
  });

  // Inicialización al cargar la página
  CambioVentana();
});
