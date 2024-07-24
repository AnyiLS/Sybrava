$(document).ready(function () {
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

  function redirectTo(url) {
    window.location.href = url;
  }


  updatePositions();
  updateScore();
  scoreRedirect();
});
