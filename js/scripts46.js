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

  // Otros elementos de inicialización
  var slide = 0;
  var botonActivo = "";
});

// Lógica preguntas:

// 1

document.querySelectorAll(".quiz-option").forEach((option) => {
  option.addEventListener("click", () => {
    const isCorrect = option.getAttribute("data-correct") === "true";
    const nextIndex = option.getAttribute("data-next-index");
    const questionNumber = 1;

    // Guardar la respuesta en localStorage
    let results = JSON.parse(localStorage.getItem("quizResults")) || [];
    results[questionNumber - 1] = isCorrect ? "Correcto" : "Incorrecto";
    localStorage.setItem("quizResults", JSON.stringify(results));

    // Redirigir a la siguiente pregunta
    window.location.href = `./index49.html`;
  });
});
