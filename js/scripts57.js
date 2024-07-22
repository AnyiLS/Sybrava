$(document).ready(function () {
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

      if (questionNumber === 1) {
        localStorage.setItem("part1Correct", true);
      }

      $("#miPopupCorrect").show();

      setTimeout(() => {
        window.location.href = `./index47.html`;
      }, 2000);
    } else {
      $option.addClass("incorrect");

      if (questionNumber === 1) {
        localStorage.setItem("part1Correct", false);
      }

      $("#miPopupIncorrect").show();
    }
  });

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

  function updateScore(results) {
    const score = results.filter(Boolean).length;
    $("#marcador").text(score);
  }

  togglePopup(null, $("#cerrarPopupCorrect"), $("#miPopupCorrect"));
  togglePopup(null, $("#cerrarPopupIncorrect"), $("#miPopupIncorrect"));

  cambioVentana();

  let results = JSON.parse(localStorage.getItem("quizResults")) || [];
  updateScore(results);

  const part1Correct = localStorage.getItem("part1Correct") === "true";
  if (part1Correct) {
    $("#parte1").css({
      top: "49.1%",
      left: "31%",
      transform: "rotate(-17.4deg)",
      scale: "1.58",
    });
  }

  const part2Correct = localStorage.getItem("part2Correct") === "true";
  if (part2Correct) {
    $("#parte2").css({
      top: "37.9%",
      left: "18.3%",
      transform: "rotate(-139.3deg)",
      scale: "1.58",
    });
  }

  const part3Correct = localStorage.getItem("part3Correct") === "true";
  if (part3Correct) {
    $("#parte3").css({
      top: "34.6%",
      left: "19.8%",
      transform: "rotate(-49.2deg)",
      scale: "1.58",
    });
  }

  const part4Correct = localStorage.getItem("part4Correct") === "true";
  if (part4Correct) {
    $("#parte4").css({
      scale: "0.95",
      top: "47.7%",
      left: "64.4%",
      transform: "rotate(-49.2deg)",
    });
  }

  const part5Correct = localStorage.getItem("part5Correct") === "true";
  if (part5Correct) {
    $("#parte5").css({
      scale: "1",
      top: "38.1%",
      left: "67.3%",
      transform: "rotate(-31deg)",
    });
  }

  const part6Correct = localStorage.getItem("part6Correct") === "true";
  if (part6Correct) {
    $("#parte6").css({
      scale: ".8",
      top: "44.6%",
      left: "63.7%",
      transform: "rotate(-5deg)",
    });
  }

  const part7Correct = localStorage.getItem("part7Correct") === "true";
  if (part7Correct) {
    $("#parte7").css({
      scale: ".98",
      top: "41.3%",
      left: "60.9%",
      transform: "rotate(-3.3deg)",
    });
  }

  const part8Correct = localStorage.getItem("part8Correct") === "true";
  if (part8Correct) {
    $("#parte8").css({
      scale: "1.1",
      top: "45.1%",
      left: "62%",
      transform: "rotate(1.6deg)",
    });
  }

  const part9Correct = localStorage.getItem("part9Correct") === "true";
  if (part9Correct) {
    $("#parte9").css({
      scale: "0.95",
      top: "63.1%",
      left: "63.7%",
      transform: "rotate(-1.3deg)",
    });
  }

  $(document).ready(function () {
    function updateSVGVisibility() {
      const results = JSON.parse(localStorage.getItem("quizResults")) || [];
      const totalQuestions = 9;

      for (let i = 1; i <= totalQuestions; i++) {
        if (results.includes(i.toString())) {
          $(`#parte${i}`).show();
        } else {
          $(`#parte${i}`).hide();
        }
      }
    }

    function updateScore(results) {
      const score = results.filter(Boolean).length;
      $("#marcador").text(score);
    }

    let results = JSON.parse(localStorage.getItem("quizResults")) || [];
    updateScore(results);
    updateSVGVisibility();
  });
});
