function clearPartCorrect() {
  for (let i = 1; i <= 9; i++) {
    localStorage.removeItem(`part${i}Correct`);
  }
  console.log("Respuestas correctas limpiadas");
}
$("#incrementAttemptsButton").on("click", function () {
  console.log("Botón de incrementar intentos presionado");
  clearPartCorrect();
  incrementAttempts();
});

function incrementAttempts() {
  let attempts = parseInt(localStorage.getItem("attempts")) || 0;
  attempts++;
  localStorage.setItem("attempts", attempts);
  console.log("Intentos actuales:", attempts);

  if (attempts >= MAX_ATTEMPTS) {
    console.log("Máximo de intentos alcanzado, bloqueando...");
    localStorage.setItem("blockTime", new Date().toISOString());
    forceRedirect();
  }
}
