$(document).ready(function () {
  // Audio functions
  function playAudio(id) {
    document.getElementById(id).play();
  }

  // Dimensiones
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

  $(".quiz-option").on("click", function () {
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

      // Store the correctness of the first question
      if (questionNumber === 8) {
        localStorage.setItem("part8Correct", true);
      }

      $("#miPopupCorrect").show();

      setTimeout(() => {
        window.location.href = `./index47.html`;
      }, 2000);
    } else {
      $option.addClass("incorrect");
      results[questionNumber - 1] = false;
      localStorage.setItem("quizResults", JSON.stringify(results));

      if (questionNumber === 8) {
        localStorage.setItem("part8Correct", false);
      }

      $("#miPopupIncorrect").show();
    }
  });

  // Function to toggle popup visibility
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

  // Function to update the score
  function updateScore(results) {
    const score = results.filter(Boolean).length;
    $("#marcador").text(score);
  }

  // Set up popups
  togglePopup(null, $("#cerrarPopupCorrect"), $("#miPopupCorrect"));
  togglePopup(null, $("#cerrarPopupIncorrect"), $("#miPopupIncorrect"));

  // Initialize on page load
  cambioVentana();

  // Initialize score on page load
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];
  updateScore(results);
});
