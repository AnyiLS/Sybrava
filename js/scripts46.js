$(document).ready(function () {
  let htmlancho, htmlalto, bodyancho, bodyalto, id;

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

  CambioVentana();
});
