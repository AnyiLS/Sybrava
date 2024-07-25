$(document).ready(function () {
  const MAX_ATTEMPTS = 4;
  const BLOCK_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const TOTAL_QUESTIONS = 9;

  // Check if the user is blocked
  const blockTime = localStorage.getItem("blockTime");
  if (
    blockTime &&
    Date.now() - new Date(blockTime).getTime() < BLOCK_DURATION
  ) {
    checkResults(true);
    return;
  }

  // Event listener for quiz options
  $(".quiz-option").on("click", function () {
    const $option = $(this);
    const isCorrect = $option.data("correct") === true;
    const questionNumber = parseInt(
      $option.closest(".quiz-question").data("question"),
      10
    );

    $(`#quiz-question-${questionNumber} .quiz-option`).removeClass(
      "correct incorrect"
    );

    $option.addClass(isCorrect ? "correct" : "incorrect");
    localStorage.setItem(`part${questionNumber}Correct`, isCorrect.toString());

    if (isCorrect) {
      $("#miPopupCorrect").show();
    } else {
      $("#miPopupIncorrect").show();
      incrementAttempts();
    }

    updateScore();
    updatePartPosition(questionNumber, isCorrect);
    checkResults();
  });

  $("#cerrarPopupIncorrect").on("click", function (e) {
    $("#miPopupIncorrect").hide();
  });

  $("#finishAttemptButton").on("click", function (e) {
    handleFinishAttempt();
  });

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const partCorrect = localStorage.getItem(`part${i}Correct`);
    if (partCorrect === "true" || partCorrect === "false") {
      updatePartPosition(i, partCorrect === "true");
    }
  }

  updateScore();
  checkResults();

  function incrementAttempts() {
    let attempts = parseInt(localStorage.getItem("attempts") || "0") + 1;
    localStorage.setItem("attempts", attempts);

    if (attempts >= MAX_ATTEMPTS) {
      localStorage.setItem("blockTime", new Date().toISOString());
    }

    // Update attempts display
    $("#attemptsCounter").text(attempts);
  }

  function updateScore() {
    const score = Array.from(
      { length: TOTAL_QUESTIONS },
      (_, i) => localStorage.getItem(`part${i + 1}Correct`) === "true"
    ).filter(Boolean).length;

    $("#marcador").text(score);
    return score;
  }

  function checkResults(isBlocked = false) {
    const score = updateScore();
    const attempts = parseInt(localStorage.getItem("attempts") || "0");

    if (score === TOTAL_QUESTIONS || isBlocked || attempts >= MAX_ATTEMPTS) {
      redirectTo("./index57.html");
    }
  }

  function handleFinishAttempt() {
    checkResults();
    redirectTo("./index47.html");
  }

  function updatePartPosition(partNumber, isCorrect) {
    const positions = {
      1: { top: "58%", left: "73%", transform: "rotate(-18deg)" },
      2: {
        scale: "0.95",
        top: "50.8%",
        left: "63.3%",
        transform: "rotate(-139.3deg)",
      },
      3: {
        scale: "0.95",
        top: "47.1%",
        left: "64.6%",
        transform: "rotate(-52deg)",
      },
      4: {
        scale: "0.95",
        top: "47.7%",
        left: "64.4%",
        transform: "rotate(-49.2deg)",
      },
      5: {
        scale: "1",
        top: "38.1%",
        left: "67.3%",
        transform: "rotate(-31deg)",
      },
      6: {
        scale: ".8",
        top: "44.6%",
        left: "63.7%",
        transform: "rotate(-5deg)",
      },
      7: {
        scale: "0.98",
        top: "42.4%",
        left: "60.8%",
        transform: "rotate(5.3deg)",
      },
      8: {
        scale: "0.9",
        top: "63.7%",
        left: "63.8%",
        transform: "rotate(-1.3deg)",
      },
      9: {
        scale: "1.1",
        top: "45.1%",
        left: "62%",
        transform: "rotate(1.6deg)",
      },
    };

    const $part = $(`#parte${partNumber}`);
    if (isCorrect) {
      $part.css(positions[partNumber]);
    } else {
      $part.addClass("incorrect-answer");
    }
  }

  function redirectTo(url) {
    window.location.href = url;
  }
  $("#attemptsCounter").text(localStorage.getItem("attempts") || "0");
});
