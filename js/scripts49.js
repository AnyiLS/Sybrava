$(document).ready(function () {
  const MAX_ATTEMPTS = 4;
  const BLOCK_DURATION = 24 * 60 * 60 * 1000;
  const partPositions = {
    1: {
      top: "49.1%",
      left: "31%",
      transform: "rotate(-17.4deg)",
      scale: "1.58",
    },
    2: {
      top: "37.9%",
      left: "18.3%",
      transform: "rotate(-139.3deg)",
      scale: "1.58",
    },
    3: {
      top: "34.6%",
      left: "19.8%",
      transform: "rotate(-49.2deg)",
      scale: "1.58",
    },
    4: {
      top: "36.4%",
      left: "19.4%",
      transform: "rotate(-47.7deg)",
      scale: "1.7",
    },
    5: {
      top: "17.3%",
      left: "20.6%",
      transform: "rotate(-28.5deg)",
      scale: "1.75",
    },
    6: {
      top: "23.5%",
      left: "13.9%",
      transform: "rotate(-0.9deg)",
      scale: "1.50",
    },
    7: {
      top: "23.9%",
      left: "11.9%",
      transform: "rotate(4.5deg)",
      scale: "1.75",
    },
    8: {
      top: "23%",
      left: "14.2%",
      transform: "rotate(-0.6deg)",
      scale: "1.68",
    },
    9: {
      top: "54.7%",
      left: "13.6%",
      transform: "rotate(-1.3deg)",
      scale: "1.55",
    },
  };

  function init() {
    const blockTime = localStorage.getItem("blockTime");
    if (
      blockTime &&
      Date.now() - new Date(blockTime).getTime() < BLOCK_DURATION
    ) {
      displayMessage(
        "<b>Se han acabado tus intentos</b>, vuelve a intentarlo en 24 horas."
      );
      disableQuiz();
      return;
    }

    updatePositions();
    updateScore();
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

  function updatePositions() {
    for (let i = 1; i <= 9; i++) {
      const $part = $(`#parte${i}`);
      const isCorrect = localStorage.getItem(`part${i}Correct`) === "true";
      if (isCorrect) {
        $part.css(partPositions[i]).show();
      } else {
        $part.hide();
      }
    }
  }

  function handleFinishAttempt() {
    let attempts = parseInt(localStorage.getItem("attempts") || "0");
    attempts++;
    localStorage.setItem("attempts", attempts);

    const score = updateScore();
    let message = "";

    if (score === 9) {
      redirectTo("/index57.html");
    } else if (score === 8) {
      redirectTo("./index57.html");
    } else if (score === 7) {
      /*       redirectTo("./index57.html"); */
    } else {
      if (attempts >= MAX_ATTEMPTS) {
        localStorage.setItem("blockTime", new Date().toISOString());

        redirectTo("./index57.html");
      }
    }

    displayMessage(message);
  }

  function disableQuiz() {
    $("#finishAttemptButton").prop("disabled", true);
  }

  function displayMessage(message) {
    console.log("Displaying message:", message); // Agrega esta línea para depuración
    $("#messageContainer").html(message);
  }

  function redirectTo(url) {
    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  }
  init();
});
