$(document).ready(function () {
  const MAX_ATTEMPTS = 3;
  const BLOCK_DURATION = 24 * 60 * 60 * 1000;

  const blockTime = localStorage.getItem("blockTime");
  if (
    blockTime &&
    Date.now() - new Date(blockTime).getTime() < BLOCK_DURATION
  ) {
    alert("Se han acabado tus intentos, vuelve a intentarlo en 24 horas.");
    checkResults(true);
    return;
  }

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

    return score;
  }

  togglePopup($("#cerrarPopupCorrect"), $("#miPopupCorrect"));
  togglePopup($("#cerrarPopupIncorrect"), $("#miPopupIncorrect"));

  adjustBodyClass();
  updateScore();

  function checkResults(forceRedirect = false) {
    const score = updateScore();

    if (score === 9) {
      window.location.href = "/index57.html";
    } else if (score >= 7 && score <= 8) {
      window.location.href = "./index46.html";
    } else if (score < 7) {
      let attempts = parseInt(localStorage.getItem("attempts")) || 0;
      attempts++;
      localStorage.setItem("attempts", attempts);

      if (attempts > MAX_ATTEMPTS || forceRedirect) {
        localStorage.setItem("blockTime", new Date().toISOString());
        alert("Se han acabado tus intentos, vuelve a intentarlo en 24 horas.");
        window.location.href = "./index50.html";
      }
    }
  }

  checkResults();
});
