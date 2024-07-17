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

// Lógica preguntas:

// 1

document.querySelectorAll(".quiz-option").forEach((option) => {
  option.addEventListener("click", () => {
    const isCorrect = option.getAttribute("data-correct") === "true";
    const questionNumber = parseInt(
      option.closest(".quiz-question").getAttribute("data-question"),
      10
    );

    document
      .querySelectorAll(
        `.quiz-question[data-question="${questionNumber}"] .quiz-option`
      )
      .forEach((opt) => {
        opt.classList.remove("correct", "incorrect");
      });

    if (isCorrect) {
      option.classList.add("correct");
      let results = JSON.parse(localStorage.getItem("quizResults")) || [];
      results[questionNumber - 1] = isCorrect
        ? `${questionNumber}`
        : "Incorrecto";
      localStorage.setItem("quizResults", JSON.stringify(results));
      setTimeout(() => {
        window.location.href = `./index57.html`;
      }, 2000);
    } else {
      option.classList.add("incorrect");
    }
  });
});
