$(document).ready(function () {
  let htmlancho, htmlalto, bodyancho, bodyalto, resizeTimer;

  function cambioVentana() {
    htmlancho = $("html").width();
    htmlalto = $("html").height();
    bodyancho = $("body").width();
    bodyalto = $("body").height();

    if ($("body").hasClass("alto") && bodyancho > htmlancho) {
      $("body").removeClass("alto").addClass("ancho");
    } else if ($("body").hasClass("ancho") && bodyalto > htmlalto) {
      $("body").removeClass("ancho").addClass("alto");
    }
  }

  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(cambioVentana, 500);
  });

  $(".quiz-option2").on("click", function () {
    const $option = $(this);
    const isCorrect = $option.data("correct") === true;
    const questionNumber = parseInt(
      $option.closest(".quiz-question").data("question"),
      10
    );

    $(
      `.quiz-question[data-question="${questionNumber}"] .quiz-option`
    ).removeClass("correct incorrect");

    if (isCorrect) {
      $option.addClass("correct");
      let results = JSON.parse(localStorage.getItem("quizResults")) || [];
      results[questionNumber - 1] = `${questionNumber}`;
      localStorage.setItem("quizResults", JSON.stringify(results));

      if (questionNumber === 7) {
        localStorage.setItem("part7Correct", true);
      }

      $("#miPopupCorrect").show();
    } else {
      $option.addClass("incorrect");

      if (questionNumber === 7) {
        localStorage.setItem("part7Correct", false);
      }

      $("#miPopupIncorrect").show();
    }
  });

  function togglePopup(mostrarBtn, cerrarBtn, popup) {
    if (mostrarBtn) {
      mostrarBtn.on("click", function () {
        popup.show();
      });
    }

    cerrarBtn.on("click", function () {
      popup.hide();
    });
  }

  function updateScore(results) {
    const score = results.filter(Boolean).length;
    $("#marcador").text(score);
  }

  togglePopup(null, $("#cerrarPopupCorrect"), $("#miPopupCorrect"));
  togglePopup(null, $("#cerrarPopupIncorrect"), $("#miPopupIncorrect"));

  cambioVentana();

  let results = JSON.parse(localStorage.getItem("quizResults")) || [];
  updateScore(results);
});
