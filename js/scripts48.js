$(document).ready(function () {
  let resizeTimer;

  function adjustBodyClass() {
    const htmlancho = $("html").width();
    const htmlalto = $("html").height();
    const bodyancho = $("body").width();
    const bodyalto = $("body").height();

    if ($("body").hasClass("alto") && bodyancho > htmlancho) {
      $("body").removeClass("alto").addClass("ancho");
    } else if ($("body").hasClass("ancho") && bodyalto > htmlalto) {
      $("body").removeClass("ancho").addClass("alto");
    }
  }

  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustBodyClass, 500);
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
      localStorage.setItem(`part${questionNumber}Correct`, "true");
      $("#miPopupCorrect").show();
    } else {
      $option.addClass("incorrect");
      localStorage.setItem(`part${questionNumber}Correct`, "false");
      $("#miPopupIncorrect").show();
    }

    console.log(
      `Part ${questionNumber} marked as ${isCorrect ? "correct" : "incorrect"}`
    );
    updateScore();
  });

  function togglePopup(cerrarBtn, popup) {
    cerrarBtn.on("click", function () {
      popup.hide();
    });
  }

  function updateScore() {
    let score = 0;
    for (let i = 1; i <= 9; i++) {
      if (localStorage.getItem(`part${i}Correct`) === "true") {
        score++;
      }
    }
    $("#marcador").text(score);
    console.log(`Puntuación actual: ${score}`);
    return score;
  }

  togglePopup($("#cerrarPopupCorrect"), $("#miPopupCorrect"));
  togglePopup($("#cerrarPopupIncorrect"), $("#miPopupIncorrect"));

  adjustBodyClass();
  updateScore();

  function checkResults() {
    const score = updateScore();

    if (score === 9) {
      console.log("serás redirigido porque sacaste 9");
      window.location.href = "/index57.html";
    } else if (score >= 7 && score <= 8) {
      console.log("redirección por sacar más de 7");
      window.location.href = "./index46.html";
    } else if (score < 7) {
      console.log("sacaste menos de 7");
      // window.location.href = "./index50.html";
    }
  }

  checkResults();
});
