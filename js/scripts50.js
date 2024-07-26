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
      scale: "1.08",
      top: "42.4%",
      left: "60.8%",
      transform: "rotate(5.3deg)",
    },
    8: {
      scale: "0.99",
      top: "44.1%",
      left: "62%",
      transform: " rotate(1.6deg)",
    },
    9: {
      top: "69.6%",
      left: "64.3%",
      transform: "rotate(-1.3deg)",
      scale: "2",
    },
  };

  function updatePositions() {
    for (let i = 1; i <= 9; i++) {
      const $part = $(`#parte${i}`);
      const isCorrect = localStorage.getItem(`part${i}Correct`) === "true";
      if (isCorrect) {
        $part.css(partPositions[i]);
      } else {
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

  $(".hover-target").hover(
    function () {
      $(this).siblings(".tooltip").show();
    },
    function () {
      $(this).siblings(".tooltip").hide();
    }
  );

  updatePositions();
  updateScore();
});
