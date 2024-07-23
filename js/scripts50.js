$(document).ready(function () {
  const partPositions = {
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

  function updatePositions() {
    for (let i = 1; i <= 9; i++) {
      const $part = $(`#parte${i}`);
      const isCorrect = localStorage.getItem(`part${i}Correct`) === "true";
      if (isCorrect) {
        $part.css(partPositions[i]);
      } else {
        // Instead of hiding, set a default position or style
        $part.hide();
      }
    }
  }

  function scoreRedirect() {
    let score = updateScore();
    if (score === 9) {
      e.preventdefault();
      redirectTo("./index60.html");
    } else if (score === 8) {
      e.preventdefault();
      redirectTo("./index59.html");
    } else if (score === 7) {
      e.preventdefault();
      redirectTo("./index58.html");
    } else {
      e.preventdefault();
      redirectTo("./index57.html");
    }
  }

  updatePositions();
  updateScore();
  scoreRedirect();
});
