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

      updateScore(results);

      $("#miPopupCorrect").show();

      setTimeout(() => {
        window.location.href = `./index49.html`;
      }, 2000);
    } else {
      $option.addClass("incorrect");
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
      top: "58%",
      left: "73%",
      transform: "rotate(-18deg)",
    });
  }

  const part2Correct = localStorage.getItem("part2Correct") === "true";
  if (part2Correct) {
    $("#parte2").css({
      scale: "0.95",
      top: "50.8%",
      left: "63.3%",
      transform: "rotate(-139.3deg)",
    });
  }

  const part3Correct = localStorage.getItem("part3Correct") === "true";
  if (part3Correct) {
    $("#parte3").css({
      scale: "0.95",
      top: "47.1%",
      left: "64.6%",
      transform: "rotate(-52deg)",
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
    $("#parte9").css({
      scale: "0.95",
      top: "63.1%",
      left: "63.7%",
      transform: "rotate(-1.3deg)",
    });
  }

  const part9Correct = localStorage.getItem("part9Correct") === "true";
  if (part9Correct) {
    $("#parte9").css({
      scale: "1.1",
      top: "45.1%",
      left: "62%",
      transform: "rotate(1.6deg)",
    });
  }
});
