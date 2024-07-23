$(document).ready(function () {
  $(".quiz-option").on("click", function () {
    console.log("Quiz option clicked");
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
      console.log(`Part ${questionNumber} marked as correct`);
    } else {
      $option.addClass("incorrect");
      localStorage.setItem(`part${questionNumber}Correct`, "false");
      $("#miPopupIncorrect").show();
      console.log(`Part ${questionNumber} marked as incorrect`);
    }

    for (let i = 1; i <= 9; i++) {
      const partState = localStorage.getItem(`part${i}Correct`);
      console.log(`Part ${i} state: ${partState}`);
    }

    updateScore();
  });

  for (let i = 1; i <= 9; i++) {
    const partCorrect = localStorage.getItem(`part${i}Correct`);
    console.log(`La parte ${i}: tiene valor "${partCorrect}"`);

    if (partCorrect === "true" || partCorrect === "false") {
      console.log(`Part ${i} is ${partCorrect}`);
      updatePartPosition(i, partCorrect === "true");
    } else {
      console.log(`Parte ${i} sin resolver`);
    }
  }

  updateScore();
});

function updateScore() {
  let score = 0;
  for (let i = 1; i <= 9; i++) {
    if (localStorage.getItem(`part${i}Correct`) === "true") {
      score++;
    }
  }
  $("#marcador").text(score);
  console.log(`Current score: ${score}`);
  return score;
}

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
    5: { scale: "1", top: "38.1%", left: "67.3%", transform: "rotate(-31deg)" },
    6: { scale: ".8", top: "44.6%", left: "63.7%", transform: "rotate(-5deg)" },
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
    9: { scale: "1.1", top: "45.1%", left: "62%", transform: "rotate(1.6deg)" },
  };

  if (isCorrect) {
    $(`#parte${partNumber}`).css(positions[partNumber]);
  } else {
    $(`#parte${partNumber}`).addClass("incorrect-answer");
  }
}