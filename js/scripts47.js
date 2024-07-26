$(document).ready(function () {
  const MAX_ATTEMPTS = 3;
  const BLOCK_DURATION = 24 * 60 * 60 * 1000;

  const blockTime = localStorage.getItem("blockTime");
  if (
    blockTime &&
    Date.now() - new Date(blockTime).getTime() < BLOCK_DURATION
  ) {
    forceRedirect();
    return;
  }

  function calculateScore() {
    let score = 0;
    for (let i = 1; i <= 9; i++) {
      if (localStorage.getItem(`part${i}Correct`) === "true") {
        score++;
      }
    }
    return score;
  }

  function allQuestionsAnswered() {
    for (let i = 1; i <= 9; i++) {
      if (localStorage.getItem(`part${i}Correct`) === null) {
        return false;
      }
    }
    return true;
  }

  function updateScore() {
    let score = calculateScore();
    $("#marcador").text(score);
    return score;
  }

  function checkScore() {
    const score = calculateScore();

    let redirectURL;
    if (score === 9) {
      redirectURL = "./index60.html";
    } else if (score > 7) {
      redirectURL = "./index59.html";
    } else if (score > 6) {
      redirectURL = "./index58.html";
    } else if (score < 6) {
      redirectURL = "./index57.html";
    }

    window.location.href = redirectURL;
  }

  function forceRedirect() {
    const score = calculateScore();

    let redirectURL;
    if (score > 8) {
      redirectURL = "./index60.html";
    } else if (score > 7) {
      redirectURL = "./index59.html";
    } else if (score > 6) {
      redirectURL = "./index58.html";
    } else {
      redirectURL = "./index57.html";
    }

    window.location.href = redirectURL;
  }

  updateScore();

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

    if (isCorrect) {
      $(`#parte${partNumber}`).css(positions[partNumber]);
    } else {
      $(`#parte${partNumber}`).addClass("incorrect-answer");
    }

    $(`[id^="parte${partNumber}-"]`).css({
      pointerEvents: "none",
      cursor: "default",
    });
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
    updatePartPosition(questionNumber, isCorrect);

    if (allQuestionsAnswered()) {
      checkScore();
    }
  });

  for (let i = 1; i <= 9; i++) {
    const partCorrect = localStorage.getItem(`part${i}Correct`);
    if (partCorrect === "true" || partCorrect === "false") {
      updatePartPosition(i, partCorrect === "true");
    }
  }

  if (allQuestionsAnswered()) {
    checkScore();
  }

  let attempts = parseInt(localStorage.getItem("attempts")) || 0;
  if (attempts >= MAX_ATTEMPTS) {
    window.location.href = "./index62.html";
    return;
  }
});
